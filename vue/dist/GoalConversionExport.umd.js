(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("CoreHome"), require("vue"), require("CorePluginsAdmin"));
	else if(typeof define === 'function' && define.amd)
		define(["CoreHome", , "CorePluginsAdmin"], factory);
	else if(typeof exports === 'object')
		exports["GoalConversionExport"] = factory(require("CoreHome"), require("vue"), require("CorePluginsAdmin"));
	else
		root["GoalConversionExport"] = factory(root["CoreHome"], root["Vue"], root["CorePluginsAdmin"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__19dc__, __WEBPACK_EXTERNAL_MODULE__8bbf__, __WEBPACK_EXTERNAL_MODULE_a5a2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "plugins/GoalConversionExport/vue/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "19dc":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__19dc__;

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "a5a2":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_a5a2__;

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "GoalConversionEdit", function() { return /* reexport */ GoalConversionEdit; });
__webpack_require__.d(__webpack_exports__, "GoalConversionList", function() { return /* reexport */ GoalConversionList; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "CoreHome"
var external_CoreHome_ = __webpack_require__("19dc");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/GoalConversionExport/vue/src/GoalConversionExportComponent/GoalConversionEdit.vue?vue&type=template&id=6e0b8b94

var _hoisted_1 = {
  class: "row"
};
var _hoisted_2 = {
  class: "col s12"
};
var _hoisted_3 = {
  class: "row"
};
var _hoisted_4 = {
  class: "col s12"
};
var _hoisted_5 = {
  class: "row"
};
var _hoisted_6 = {
  class: "col s12"
};
var _hoisted_7 = {
  class: "row"
};
var _hoisted_8 = {
  class: "col s12"
};
var _hoisted_9 = {
  class: "row"
};
var _hoisted_10 = {
  class: "col s12"
};
var _hoisted_11 = {
  key: 0,
  class: "row"
};
var _hoisted_12 = {
  class: "col s12"
};
var _hoisted_13 = {
  key: 1,
  class: "row"
};
var _hoisted_14 = {
  class: "col s12"
};
var _hoisted_15 = {
  class: "row",
  style: {
    "margin-bottom": "0"
  }
};
var _hoisted_16 = {
  class: /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])("col s12")
};

var _hoisted_17 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, "Conversions To Export", -1);

var _hoisted_18 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("In this section, you can specify the objectives to be included in the exported conversions. For each objective, you have the option to designate an alternative name for use in the export. This alternative name is employed to link Matomo objectives to the conversions configured in an external system, such as Google Ads. You can also assign the same alternative name to multiple objectives to consolidate them into a single conversion alias. "), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br"), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("Furthermore, you have the flexibility to set the revenue to be utilized for the export.")], -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;

  var _component_Field = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Field");

  var _component_SaveButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SaveButton");

  var _component_ContentBlock = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ContentBlock");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_ContentBlock, null, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        "model-value": _ctx.conversionExport.name,
        "inline-help": "Provide a concise label to distinguish this export conversion in the list\n          of exports.",
        name: "name",
        title: "Name of export",
        uicontrol: "text",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return _ctx.conversionExport.name = $event;
        })
      }, null, 8, ["model-value"])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        "model-value": _ctx.conversionExport.export_type,
        options: _ctx.exportTypeOptions,
        "inline-help": "Select the Export category. Depending on your choice, the export format\n          may vary. You have the option to choose from these categories:",
        name: "type",
        title: "Export type",
        uicontrol: "radio",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return _ctx.conversionExport.export_type = $event;
        })
      }, null, 8, ["model-value", "options"])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        "model-value": _ctx.conversionExport.description,
        "inline-help": "Providing a description could be useful for providing additional details\n          about the export conversion and its intended purpose.",
        name: "description",
        title: "Description (Optional)",
        uicontrol: "text",
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return _ctx.conversionExport.description = $event;
        })
      }, null, 8, ["model-value"])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        "model-value": _ctx.conversionExport.access_token,
        disabled: "",
        "inline-help": "The access token generated within the export URL provides unique access to\n          export conversions to third-party external services and tools.",
        name: "access_token",
        placeholder: "Access token will be automatically generated after the export is created.",
        title: "Access Token",
        uicontrol: "text"
      }, null, 8, ["model-value"])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_9, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_10, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        "model-value": _ctx.conversionExport.day_to_export,
        "inline-help": "You can specify the count of days to be incorporated into the export,\n          with today always being excluded.",
        name: "day_to_export",
        title: "Days to export",
        uicontrol: "number",
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return _ctx.conversionExport.day_to_export = $event;
        })
      }, null, 8, ["model-value"])])]), _ctx.conversionExport.export_type == 'facebook' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_11, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_12, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        "model-value": _ctx.conversionExport.parameters.pixel_id,
        "inline-help": "Here you must define the meta pixel ID",
        name: "pixel_id",
        title: "Pixel ID",
        uicontrol: "text",
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return _ctx.conversionExport.parameters.pixel_id = $event;
        })
      }, null, 8, ["model-value"])])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.conversionExport.export_type == 'facebook' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_13, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_14, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        "model-value": _ctx.conversionExport.parameters.meta_access_token,
        "inline-help": "Here you must define the Meta Access Token to send to Conversion API",
        name: "meta_access_token",
        title: "Meta Access Token",
        uicontrol: "text",
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
          return _ctx.conversionExport.parameters.meta_access_token = $event;
        })
      }, null, 8, ["model-value"])])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_15, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_16, [_hoisted_17, _hoisted_18, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        "model-value": _ctx.conversionExport.goals,
        "ui-control-attributes": {
          "field1": {
            "key": "id_goal",
            "title": "Goal",
            "uiControl": "select",
            availableValues: _this.goals
          },
          "field2": {
            "key": "export_name",
            "title": "Alias name in export",
            "uiControl": "text"
          },
          "field3": {
            "key": "revenu",
            "title": "Revenue",
            "uiControl": "select",
            availableValues: _this.revenueOptions
          }
        },
        "full-width": "true",
        name: "trigger_type",
        uicontrol: "multituple",
        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
          return _ctx.conversionExport.goals = $event;
        })
      }, null, 8, ["model-value", "ui-control-attributes"])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
        class: "createButton",
        tabindex: "100",
        onConfirm: _cache[7] || (_cache[7] = function ($event) {
          return _ctx.save();
        })
      })];
    }),
    _: 1
  });
}
// CONCATENATED MODULE: ./plugins/GoalConversionExport/vue/src/GoalConversionExportComponent/GoalConversionEdit.vue?vue&type=template&id=6e0b8b94

// EXTERNAL MODULE: external "CorePluginsAdmin"
var external_CorePluginsAdmin_ = __webpack_require__("a5a2");

// CONCATENATED MODULE: ./plugins/GoalConversionExport/vue/src/api.ts

var api_fetchGoals = function fetchGoals() {
  return external_CoreHome_["AjaxHelper"].fetch({
    module: 'API',
    method: 'Goals.getGoals',
    idSite: external_CoreHome_["Matomo"].idSite,
    filter_limit: '-1'
  }).then(function (goals) {
    return Object.values(goals).reduce(function (acc, g) {
      acc[g.idgoal] = g.name;
      return acc;
    }, {});
  });
};
var api_fetchGoalConversions = function fetchGoalConversions() {
  return external_CoreHome_["AjaxHelper"].fetch({
    module: 'API',
    method: 'GoalConversionExport.getGoalConversions',
    idSite: external_CoreHome_["Matomo"].idSite,
    filter_limit: '-1'
  }).then(function (goalConversions) {
    return goalConversions.map(function (goalConversion) {
      if (typeof goalConversion.goals === 'string') {
        goalConversion.goals = JSON.parse(goalConversion.goals);
      }

      return goalConversion;
    });
  });
};
var api_fetchGoalConversion = function fetchGoalConversion(idExport) {
  return external_CoreHome_["AjaxHelper"].fetch({
    module: 'API',
    method: 'GoalConversionExport.getGoalConversion',
    idSite: external_CoreHome_["Matomo"].idSite,
    idExport: idExport,
    filter_limit: '-1'
  }).then(function (goalConversion) {
    if (typeof goalConversion.goals === 'string') {
      goalConversion.goals = JSON.parse(goalConversion.goals);
    }

    if (typeof goalConversion.parameters === 'string' && goalConversion.parameters !== 'null') {
      goalConversion.parameters = JSON.parse(goalConversion.parameters);
    } else {
      goalConversion.parameters = {};
    }

    return goalConversion;
  });
};
var api_deleteConversion = function deleteConversion(id_export) {
  return external_CoreHome_["AjaxHelper"].post({}, {
    idExport: id_export,
    idSite: external_CoreHome_["Matomo"].idSite,
    method: 'GoalConversionExport.deleteGoalConversion'
  }, {
    withTokenInUrl: true
  }).then(function (response) {
    return {
      type: 'success',
      response: response
    };
  }).catch(function (e) {
    return {
      type: 'error',
      message: e.message || e
    };
  });
};
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/GoalConversionExport/vue/src/GoalConversionExportComponent/GoalConversionEdit.vue?vue&type=script&lang=ts




var REVENUE_OPTIONS = {
  goal: 'Include revenue information in the export (if any available)',
  null: 'Do not set revenue (revenue won\'t be exported)'
};
var EXPORT_TYPE_OPTIONS = {
  google: 'Google',
  facebook: 'Facebook'
};
/* harmony default export */ var GoalConversionEditvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  components: {
    ContentBlock: external_CoreHome_["ContentBlock"],
    Field: external_CorePluginsAdmin_["Field"],
    SaveButton: external_CorePluginsAdmin_["SaveButton"]
  },
  data: function data() {
    return {
      goals: {},
      conversionExport: {
        export_type: 'google',
        day_to_export: 7,
        goals: [{
          id_goal: '',
          export_name: '',
          revenu: ''
        }],
        parameters: {
          pixel_id: '',
          meta_access_token: ''
        }
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    api_fetchGoals().then(function (goals) {
      _this.goals = goals;
    });
    var parameters = new URLSearchParams(window.location.search);

    if (parameters.has('idExport')) {
      api_fetchGoalConversion(parameters.get('idExport')).then(function (conversionExport) {
        _this.conversionExport = conversionExport;
      });
    }
  },
  methods: {
    constructBodySave: function constructBodySave() {
      var body = {
        name: this.conversionExport.name,
        exportType: this.conversionExport.export_type,
        description: this.conversionExport.description ? this.conversionExport.description.trim() : '',
        method: 'GoalConversionExport.addGoalConversion',
        goals: this.conversionExport.goals.filter(function (g) {
          return !!g.id_goal && !!g.revenu;
        }),
        dayToExport: this.conversionExport.day_to_export,
        idExport: null,
        parameters: {}
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
    save: function save() {
      return external_CoreHome_["AjaxHelper"].post({}, this.constructBodySave(), {
        withTokenInUrl: true
      }).then(function () {
        window.location.href = "".concat(window.location.origin).concat(window.location.pathname, "?module=GoalConversionExport&action=index&idSite=").concat(external_CoreHome_["Matomo"].idSite);
      }).catch(function (e) {
        return {
          type: 'error',
          message: e.message || e
        };
      });
    }
  },
  computed: {
    exportTypeOptions: function exportTypeOptions() {
      return EXPORT_TYPE_OPTIONS;
    },
    revenueOptions: function revenueOptions() {
      return REVENUE_OPTIONS;
    }
  }
}));
// CONCATENATED MODULE: ./plugins/GoalConversionExport/vue/src/GoalConversionExportComponent/GoalConversionEdit.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/GoalConversionExport/vue/src/GoalConversionExportComponent/GoalConversionEdit.vue



GoalConversionEditvue_type_script_lang_ts.render = render

/* harmony default export */ var GoalConversionEdit = (GoalConversionEditvue_type_script_lang_ts);
// CONCATENATED MODULE: ./plugins/GoalConversionExport/vue/src/GoalConversionExportComponent/GoalConversionEdit.adapter.ts
/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */


/* harmony default export */ var GoalConversionEdit_adapter = (Object(external_CoreHome_["createAngularJsAdapter"])({
  component: GoalConversionEdit,
  scope: {
    exportTypes: {
      angularJsBind: '='
    },
    alreadyCreatedExportTypes: {
      angularJsBind: '='
    },
    clickIdProviders: {
      angularJsBind: '='
    },
    hasWriteAccess: {
      angularJsBind: '='
    }
  },
  directiveName: 'goalConversionExportEdit'
}));
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/GoalConversionExport/vue/src/GoalConversionExportComponent/GoalConversionList.vue?vue&type=template&id=6edac63e

var GoalConversionListvue_type_template_id_6edac63e_hoisted_1 = {
  class: "alert alert-info"
};

var GoalConversionListvue_type_template_id_6edac63e_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" Exports below are only available for ");

var GoalConversionListvue_type_template_id_6edac63e_hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" website. ");

var GoalConversionListvue_type_template_id_6edac63e_hoisted_4 = {
  class: "card card-table entityTable"
};

var GoalConversionListvue_type_template_id_6edac63e_hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("thead", null, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, "Export type"), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, "Included Conversions"), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, "Last requested"), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, "Actions")])], -1);

var GoalConversionListvue_type_template_id_6edac63e_hoisted_6 = ["id"];
var GoalConversionListvue_type_template_id_6edac63e_hoisted_7 = ["id", "innerHTML"];
var GoalConversionListvue_type_template_id_6edac63e_hoisted_8 = {
  style: {
    "display": "flex",
    "gap": "15px",
    "justify-content": "center",
    "align-items": "center"
  }
};
var GoalConversionListvue_type_template_id_6edac63e_hoisted_9 = ["onClick"];
var GoalConversionListvue_type_template_id_6edac63e_hoisted_10 = ["onClick"];
var GoalConversionListvue_type_template_id_6edac63e_hoisted_11 = ["href"];
var GoalConversionListvue_type_template_id_6edac63e_hoisted_12 = ["onClick"];
var GoalConversionListvue_type_template_id_6edac63e_hoisted_13 = {
  id: "confirmDeleteExport",
  ref: "confirmDeleteExport",
  class: "ui-confirm"
};

var GoalConversionListvue_type_template_id_6edac63e_hoisted_14 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, "Are you sure you want to delete this export? External services using this export URL as data source will no longer be able to fetch any data.", -1);

var GoalConversionListvue_type_template_id_6edac63e_hoisted_15 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
  role: "yes",
  type: "button",
  value: "Yes"
}, null, -1);

var GoalConversionListvue_type_template_id_6edac63e_hoisted_16 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
  role: "no",
  type: "button",
  value: "No"
}, null, -1);

var GoalConversionListvue_type_template_id_6edac63e_hoisted_17 = [GoalConversionListvue_type_template_id_6edac63e_hoisted_14, GoalConversionListvue_type_template_id_6edac63e_hoisted_15, GoalConversionListvue_type_template_id_6edac63e_hoisted_16];
var GoalConversionListvue_type_template_id_6edac63e_hoisted_18 = {
  id: "showExportLink",
  ref: "showExportLink",
  class: "ui-confirm"
};

var _hoisted_19 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, "Link to download this conversion export", -1);

var _hoisted_20 = ["value"];

var _hoisted_21 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" Be careful with whom you share this, as it will grant access to this conversion export without any further authentication. ");

var _hoisted_22 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
  role: "yes",
  type: "button",
  value: "Close"
}, null, -1);

function GoalConversionListvue_type_template_id_6edac63e_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SaveButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SaveButton");

  var _component_ContentBlock = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ContentBlock");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_ContentBlock, null, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", GoalConversionListvue_type_template_id_6edac63e_hoisted_1, [GoalConversionListvue_type_template_id_6edac63e_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("strong", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.site), 1), GoalConversionListvue_type_template_id_6edac63e_hoisted_3]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("table", GoalConversionListvue_type_template_id_6edac63e_hoisted_4, [GoalConversionListvue_type_template_id_6edac63e_hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tbody", null, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.goalConversions, function (goalConversion) {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", {
          id: "export_".concat(goalConversion.id_export),
          key: goalConversion.id_export
        }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(goalConversion.name), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.exportTypeOptions[goalConversion.export_type]), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(goalConversion.goals, function (goal) {
          return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
            id: "goal_".concat(goal.id_export),
            key: goal.id_export,
            innerHTML: _ctx.$sanitize(_ctx.displayGoal(goal))
          }, null, 8, GoalConversionListvue_type_template_id_6edac63e_hoisted_7);
        }), 128))]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(goalConversion.ts_requested), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", GoalConversionListvue_type_template_id_6edac63e_hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
          class: "icon-download",
          href: "#",
          style: {
            "text-decoration": "none !important"
          },
          title: "Download",
          onClick: function onClick($event) {
            return _ctx.openExport(goalConversion.access_token);
          }
        }, null, 8, GoalConversionListvue_type_template_id_6edac63e_hoisted_9), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
          class: "icon-export",
          href: "#",
          style: {
            "text-decoration": "none !important"
          },
          title: "Export URL",
          onClick: function onClick($event) {
            return _ctx.generateExportUrl(goalConversion.access_token);
          }
        }, null, 8, GoalConversionListvue_type_template_id_6edac63e_hoisted_10), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
          href: _ctx.editGoalConversion(goalConversion.id_export),
          class: "icon-edit",
          style: {
            "text-decoration": "none !important"
          },
          title: "Edit"
        }, null, 8, GoalConversionListvue_type_template_id_6edac63e_hoisted_11), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
          class: "icon-delete",
          href: "#",
          style: {
            "text-decoration": "none !important"
          },
          title: "Delete",
          onClick: function onClick($event) {
            return _ctx.deleteConversion(goalConversion.id_export);
          }
        }, null, 8, GoalConversionListvue_type_template_id_6edac63e_hoisted_12)])])], 8, GoalConversionListvue_type_template_id_6edac63e_hoisted_6);
      }), 128))])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
        class: "createButton",
        tabindex: "100",
        value: "Create new conversion export",
        onConfirm: _cache[0] || (_cache[0] = function ($event) {
          return _ctx.save();
        })
      }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", GoalConversionListvue_type_template_id_6edac63e_hoisted_13, GoalConversionListvue_type_template_id_6edac63e_hoisted_17, 512), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", GoalConversionListvue_type_template_id_6edac63e_hoisted_18, [_hoisted_19, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("textarea", {
        id: "exportLink",
        value: _ctx.exportLink,
        onclick: "this.select()",
        readonly: ""
      }, null, 8, _hoisted_20), _hoisted_21, _hoisted_22], 512)];
    }),
    _: 1
  });
}
// CONCATENATED MODULE: ./plugins/GoalConversionExport/vue/src/GoalConversionExportComponent/GoalConversionList.vue?vue&type=template&id=6edac63e

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/GoalConversionExport/vue/src/GoalConversionExportComponent/GoalConversionList.vue?vue&type=script&lang=ts
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var GoalConversionListvue_type_script_lang_ts_REVENUE_OPTIONS = {
  goal: 'UseGoalRevenue',
  custom: 'UseCustomRevenue',
  null: 'UseEmptyRevenue'
};
var GoalConversionListvue_type_script_lang_ts_EXPORT_TYPE_OPTIONS = {
  google: 'Google',
  facebook: 'Facebook'
};
/* harmony default export */ var GoalConversionListvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  components: {
    ContentBlock: external_CoreHome_["ContentBlock"],
    SaveButton: external_CorePluginsAdmin_["SaveButton"]
  },
  data: function data() {
    return {
      site: external_CoreHome_["Matomo"].currentSiteName,
      goals: {},
      goalConversions: [],
      exportLink: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    Promise.all([api_fetchGoals(), api_fetchGoalConversions()]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          goals = _ref2[0],
          goalConversions = _ref2[1];

      _this.goals = goals;
      _this.goalConversions = goalConversions.sort(function (lhs, rhs) {
        return parseInt("".concat(lhs.id_export), 10) - parseInt("".concat(rhs.id_export), 10);
      });
    });
  },
  methods: {
    save: function save() {
      window.location.href = "".concat(window.location.origin).concat(window.location.pathname, "?module=GoalConversionExport&action=createOrEdit&idSite=").concat(external_CoreHome_["Matomo"].idSite);
    },
    displayGoal: function displayGoal(goal) {
      var content = [this.goals[goal.id_goal]];
      content.push('&#x279C;');
      content.push(goal.export_name);
      var revenuName = this.revenueOptions[goal.revenu];

      if (revenuName) {
        content.push("(".concat(revenuName, ")"));
      }

      return content.join(' ');
    },
    openExport: function openExport(accessToken) {
      window.open(this.getExportUrl(accessToken));
    },
    getExportUrl: function getExportUrl(accessToken) {
      var params = external_CoreHome_["MatomoUrl"].stringify({
        module: 'GoalConversionExport',
        action: 'generateConversionExport',
        accessToken: accessToken
      });
      return "".concat(window.location.origin).concat(window.location.pathname, "?").concat(params);
    },
    generateExportUrl: function generateExportUrl(accessToken) {
      this.exportLink = this.getExportUrl(accessToken);
      external_CoreHome_["Matomo"].helper.modalConfirm(this.$refs.showExportLink);
    },
    deleteConversion: function deleteConversion(id_export) {
      var _this2 = this;

      external_CoreHome_["Matomo"].helper.modalConfirm(this.$refs.confirmDeleteExport, {
        yes: function yes() {
          api_deleteConversion(id_export).then(api_fetchGoalConversions).then(function (goalConversions) {
            _this2.goalConversions = goalConversions;
          });
        }
      });
    },
    editGoalConversion: function editGoalConversion(id_export) {
      return "".concat(window.location.origin).concat(window.location.pathname, "?module=GoalConversionExport&action=createOrEdit&idSite=").concat(external_CoreHome_["Matomo"].idSite, "&idExport=").concat(id_export);
    }
  },
  computed: {
    exportTypeOptions: function exportTypeOptions() {
      return GoalConversionListvue_type_script_lang_ts_EXPORT_TYPE_OPTIONS;
    },
    revenueOptions: function revenueOptions() {
      return GoalConversionListvue_type_script_lang_ts_REVENUE_OPTIONS;
    },
    siteId: function siteId() {
      return external_CoreHome_["Matomo"].idSite;
    }
  }
}));
// CONCATENATED MODULE: ./plugins/GoalConversionExport/vue/src/GoalConversionExportComponent/GoalConversionList.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/GoalConversionExport/vue/src/GoalConversionExportComponent/GoalConversionList.vue



GoalConversionListvue_type_script_lang_ts.render = GoalConversionListvue_type_template_id_6edac63e_render

/* harmony default export */ var GoalConversionList = (GoalConversionListvue_type_script_lang_ts);
// CONCATENATED MODULE: ./plugins/GoalConversionExport/vue/src/GoalConversionExportComponent/GoalConversionList.adapter.ts
/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */


/* harmony default export */ var GoalConversionList_adapter = (Object(external_CoreHome_["createAngularJsAdapter"])({
  component: GoalConversionList,
  scope: {
    exportTypes: {
      angularJsBind: '='
    },
    alreadyCreatedExportTypes: {
      angularJsBind: '='
    },
    clickIdProviders: {
      angularJsBind: '='
    },
    hasWriteAccess: {
      angularJsBind: '='
    }
  },
  directiveName: 'goalConversionExportEdit'
}));
// CONCATENATED MODULE: ./plugins/GoalConversionExport/vue/src/index.ts




// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ })

/******/ });
});
//# sourceMappingURL=GoalConversionExport.umd.js.map