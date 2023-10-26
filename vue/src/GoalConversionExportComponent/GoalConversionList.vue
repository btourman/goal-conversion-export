<!--
  Matomo - free/libre analytics platform

  @link https://matomo.org
  @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
-->

<template>
  <ContentBlock
  >
    <div class="alert alert-info">
      Exports below are only available for <strong>{{ site }}</strong> website.
    </div>
    <table class="card card-table entityTable">
      <thead>
      <tr>
        <th>Name</th>
        <th>Export type</th>
        <th>Included Conversions</th>
        <th>Last requested</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="goalConversion in goalConversions"
          :id="`export_${goalConversion.id_export}`"
          :key="goalConversion.id_export">
        <td>{{ goalConversion.name }}</td>
        <td>{{ exportTypeOptions[goalConversion.export_type] }}</td>
        <td>
          <div v-for="goal in goalConversion.goals"
               :id="`goal_${goal.id_export}`"
               :key="goal.id_export"
               v-html="$sanitize(displayGoal(goal))">
          </div>
        </td>
        <td>{{ goalConversion.ts_requested }}</td>
        <td>
          <div style="display: flex;gap: 15px;justify-content: center;align-items: center">
            <a class="icon-download" href="#" style="text-decoration: none !important"
               title="Download"
               @click="openExport(goalConversion.access_token)"/>
            <a class="icon-export" href="#" style="text-decoration: none !important"
               title="Export URL"
               @click="generateExportUrl(goalConversion.access_token)"/>
            <a
              :href="editGoalConversion(goalConversion.id_export)"
              class="icon-edit"
              style="text-decoration: none !important"
              title="Edit"/>
            <a class="icon-delete" href="#" style="text-decoration: none !important"
               title="Delete"
               @click="deleteConversion(goalConversion.id_export)"/>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <SaveButton
      class="createButton"
      tabindex="100"
      value="Create new conversion export"
      @confirm="save()"
    >
    </SaveButton>
    <div
      id="confirmDeleteExport"
      ref="confirmDeleteExport"
      class="ui-confirm"
    >
      <h2>Are you sure you want to delete this export? External services using this export URL as
        data source will no longer be able to fetch any data.</h2>
      <input
        role="yes"
        type="button"
        value="Yes"
      />
      <input
        role="no"
        type="button"
        value="No"
      />
    </div>
    <div
      id="showExportLink"
      ref="showExportLink"
      class="ui-confirm"
    >
      <h2>Link to download this conversion export</h2>
      <textarea
        id="exportLink"
        :value="exportLink"
        onclick="this.select()"
        readonly
      />
      Be careful with whom you share this, as it will grant access to this conversion export without
      any further authentication.
      <input
        role="yes"
        type="button"
        value="Close"
      />
    </div>
  </ContentBlock>
</template>

<style lang="less" scoped>
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { SaveButton } from 'CorePluginsAdmin';
import { ContentBlock, Matomo, MatomoUrl } from 'CoreHome';
import { GoalConversion, GoalFromGoalConversion, KeyValue } from '../types';
import { deleteConversion, fetchGoalConversions, fetchGoals } from '../api';

interface TestPluginComponentState {
  goalConversions: GoalConversion[];
  goals: any;
  exportLink: string;
  site: string;
}

const REVENUE_OPTIONS: KeyValue = {
  goal: 'UseGoalRevenue',
  custom: 'UseCustomRevenue',
  null: 'UseEmptyRevenue',
};

const EXPORT_TYPE_OPTIONS: KeyValue = {
  google: 'Google',
  facebook: 'Facebook',
};

export default defineComponent({
  components: {
    ContentBlock,
    SaveButton,
  },
  data(): TestPluginComponentState {
    return {
      site: Matomo.currentSiteName,
      goals: {},
      goalConversions: [] as GoalConversion[],
      exportLink: '',
    };
  },
  mounted() {
    Promise.all([
      fetchGoals(),
      fetchGoalConversions(),
    ])
      .then(([goals, goalConversions]) => {
        this.goals = goals;
        this.goalConversions = goalConversions.sort(
          (lhs, rhs) => parseInt(`${lhs.id_export}`, 10) - parseInt(`${rhs.id_export}`, 10),
        );
      });
  },
  methods: {
    save() {
      window.location.href = `${window.location.origin}${window.location.pathname}?module=GoalConversionExport&action=createOrEdit&idSite=${Matomo.idSite}`;
    },
    displayGoal(goal: GoalFromGoalConversion) {
      const content = [this.goals[goal.id_goal]];
      content.push('&#x279C;');
      content.push(goal.export_name);
      const revenuName = this.revenueOptions[goal.revenu];
      if (revenuName) {
        content.push(`(${revenuName})`);
      }
      return content.join(' ');
    },
    openExport(accessToken: string) {
      window.open(this.getExportUrl(accessToken));
    },
    getExportUrl(accessToken: string) {
      const params = MatomoUrl.stringify({
        module: 'GoalConversionExport',
        action: 'generateConversionExport',
        accessToken,
      });
      return `${window.location.origin}${window.location.pathname}?${params}`;
    },
    generateExportUrl(accessToken: string) {
      this.exportLink = this.getExportUrl(accessToken);
      Matomo.helper.modalConfirm(this.$refs.showExportLink as HTMLElement);
    },
    deleteConversion(id_export: number) {
      Matomo.helper.modalConfirm(this.$refs.confirmDeleteExport as HTMLElement, {
        yes: () => {
          deleteConversion(id_export)
            .then(fetchGoalConversions)
            .then((goalConversions) => {
              this.goalConversions = goalConversions;
            });
        },
      });
    },
    editGoalConversion(id_export: number) {
      return `${window.location.origin}${window.location.pathname}?module=GoalConversionExport&action=createOrEdit&idSite=${Matomo.idSite}&idExport=${id_export}`;
    },
  },
  computed: {
    exportTypeOptions() {
      return EXPORT_TYPE_OPTIONS;
    },
    revenueOptions() {
      return REVENUE_OPTIONS;
    },
    siteId() {
      return Matomo.idSite;
    },
  },
});
</script>
