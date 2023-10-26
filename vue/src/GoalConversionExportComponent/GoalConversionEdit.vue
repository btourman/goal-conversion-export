<!--
  Matomo - free/libre analytics platform

  @link https://matomo.org
  @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
-->

<template>
  <ContentBlock
  >
    <div class="row">
      <div class="col s12">
        <Field
          :model-value="conversionExport.name"
          inline-help="Provide a concise label to distinguish this export conversion in the list
          of exports."
          name="name"
          title="Name of export"
          uicontrol="text"
          @update:model-value="conversionExport.name = $event"
        />
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <Field
          :model-value="conversionExport.export_type"
          :options="exportTypeOptions"
          inline-help="Select the Export category. Depending on your choice, the export format
          may vary. You have the option to choose from these categories:"
          name="type"
          title="Export type"
          uicontrol="radio"
          @update:model-value="conversionExport.export_type = $event"
        />
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <Field
          :model-value="conversionExport.description"
          inline-help="Providing a description could be useful for providing additional details
          about the export conversion and its intended purpose."
          name="description"
          title="Description (Optional)"
          uicontrol="text"
          @update:model-value="conversionExport.description = $event"
        />
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <Field
          :model-value="conversionExport.access_token"
          disabled
          inline-help="The access token generated within the export URL provides unique access to
          export conversions to third-party external services and tools."
          name="access_token"
          placeholder="Access token will be automatically generated after the export is created."
          title="Access Token"
          uicontrol="text"
        />
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <Field
          :model-value="conversionExport.day_to_export"
          inline-help="You can specify the count of days to be incorporated into the export,
          with today always being excluded."
          name="day_to_export"
          title="Days to export"
          uicontrol="number"
          @update:model-value="conversionExport.day_to_export = $event"
        />
      </div>
    </div>
    <div v-if="conversionExport.export_type == 'facebook'" class="row">
      <div class="col s12">
        <Field
          :model-value="conversionExport.parameters.pixel_id"
          inline-help="Here you must define the meta pixel ID"
          name="pixel_id"
          title="Pixel ID"
          uicontrol="text"
          @update:model-value="conversionExport.parameters.pixel_id = $event"
        />
      </div>
    </div>
    <div v-if="conversionExport.export_type == 'facebook'" class="row">
      <div class="col s12">
        <Field
          :model-value="conversionExport.parameters.meta_access_token"
          inline-help="Here you must define the Meta Access Token to send to Conversion API"
          name="meta_access_token"
          title="Meta Access Token"
          uicontrol="text"
          @update:model-value="conversionExport.parameters.meta_access_token = $event"
        />
      </div>
    </div>
    <div class="row" style="margin-bottom:0">
      <div
        :class="`col s12`"
      >
        <h3>Conversions To Export</h3>
        <p>In this section, you can specify the objectives to be included in the exported
          conversions. For each objective, you have the option to designate an alternative name
          for use in the export. This alternative name is employed to link Matomo objectives to
          the conversions configured in an external system, such as Google Ads. You can also assign
          the same alternative name to multiple objectives to consolidate them into a single
          conversion alias. <br/>Furthermore, you have the flexibility to set the revenue to be
          utilized for the export.</p>
        <Field
          :model-value='conversionExport.goals'
          :ui-control-attributes='{
          "field1":{
            "key":"id_goal",
            "title":"Goal",
            "uiControl":"select",
          availableValues:this.goals
          },
          "field2":{
            "key":"export_name",
            "title":"Alias name in export",
            "uiControl":"text"
            },
          "field3":{
            "key":"revenu",
            "title":"Revenue",
            "uiControl":"select",
          availableValues: this.revenueOptions
          }
        }'
          full-width="true"
          name="trigger_type"
          uicontrol="multituple"

          @update:model-value="conversionExport.goals = $event"
        />
      </div>
    </div>
    <SaveButton
      class="createButton"
      tabindex="100"
      @confirm="save()"
    >
    </SaveButton>
  </ContentBlock>
</template>

<style lang="less" scoped>
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { Field, SaveButton } from 'CorePluginsAdmin';
import { AjaxHelper, ContentBlock, Matomo } from 'CoreHome';
import {
  GoalConversion, GoalFromGoalConversion, KeyValue, SaveGoalConversion,
} from '../types';
import { fetchGoalConversion, fetchGoals } from '../api';

interface TestPluginComponentState {
  conversionExport: GoalConversion;
  goals: KeyValue;
}

const REVENUE_OPTIONS = {
  goal: 'Include revenue information in the export (if any available)',
  null: 'Do not set revenue (revenue won\'t be exported)',
};

const EXPORT_TYPE_OPTIONS = {
  google: 'Google',
  facebook: 'Facebook',
};

export default defineComponent({
  components: {
    ContentBlock,
    Field,
    SaveButton,
  },
  data(): TestPluginComponentState {
    return {
      goals: {},
      conversionExport: {
        export_type: 'google',
        day_to_export: 7,
        goals: [{ id_goal: '', export_name: '', revenu: '' }],
        parameters: { pixel_id: '', meta_access_token: '' },
      } as unknown as GoalConversion,
    };
  },
  mounted() {
    fetchGoals()
      .then((goals) => {
        this.goals = goals;
      });

    const parameters = new URLSearchParams(window.location.search);
    if (parameters.has('idExport')) {
      fetchGoalConversion(parameters.get('idExport'))
        .then((conversionExport) => {
          this.conversionExport = conversionExport;
        });
    }
  },
  methods: {
    constructBodySave() {
      const body: SaveGoalConversion = {
        name: this.conversionExport.name,
        exportType: this.conversionExport.export_type,
        description: this.conversionExport.description ? this.conversionExport.description.trim() : '',
        method: 'GoalConversionExport.addGoalConversion',
        goals: this.conversionExport.goals
          .filter((g: GoalFromGoalConversion) => !!g.id_goal && !!g.revenu),
        dayToExport: this.conversionExport.day_to_export,
        idExport: null,
        parameters: {},
      };
      if (this.conversionExport.id_export) {
        body.idExport = this.conversionExport.id_export;
        body.method = 'GoalConversionExport.updateGoalConversion';
      }
      if (this.conversionExport.export_type === 'facebook') {
        body.parameters = this.conversionExport.parameters;
      }
      return body;
    },
    save() {
      return AjaxHelper.post(
        {},
        this.constructBodySave(),
        {
          withTokenInUrl: true,
        },
      ).then(() => {
        window.location.href = `${window.location.origin}${window.location.pathname}?module=GoalConversionExport&action=index&idSite=${Matomo.idSite}`;
      }).catch((e) => ({
        type: 'error',
        message: e.message || e,
      }));
    },
  },
  computed: {
    exportTypeOptions() {
      return EXPORT_TYPE_OPTIONS;
    },
    revenueOptions() {
      return REVENUE_OPTIONS;
    },
  },
});
</script>
