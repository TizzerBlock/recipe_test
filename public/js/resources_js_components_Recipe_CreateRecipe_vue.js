"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Recipe_CreateRecipe_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Recipe/CreateRecipe.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Recipe/CreateRecipe.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../router */ "./resources/js/router.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CreateRecipe",
  data: function data() {
    return {
      fields: {
        name: '',
        email: '',
        recipe_name: '',
        recipe_position: '',
        description: '',
        message: ''
      }
    };
  },
  methods: {
    addRecipeToDb: function addRecipeToDb() {
      axios.post('/api/recipe', {
        name: this.fields.name,
        email: this.fields.email,
        recipe_name: this.fields.recipe_name,
        recipe_position: this.fields.recipe_position,
        description: this.fields.description,
        message: this.fields.message
      }).then(function (res) {
        _router__WEBPACK_IMPORTED_MODULE_0__["default"].push({
          name: 'recipe.index'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Recipe/CreateRecipe.vue?vue&type=style&index=0&id=5e9b25e0&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Recipe/CreateRecipe.vue?vue&type=style&index=0&id=5e9b25e0&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-5e9b25e0] {\n  box-sizing: border-box;\n}\nbody[data-v-5e9b25e0] {\n  background: #F5E9D9;\n}\n.postcard[data-v-5e9b25e0] {\n  background-color: rgba(239, 228, 228, 0.6);\n  max-width: 1000px;\n  margin: -5px auto 0;\n  padding: 20px;\n  /*background: #fffdee;*/\n  border: 10px solid transparent;\n  -o-border-image: 10 repeating-linear-gradient(135deg, #C42061, #C42061 10px, transparent 10px, transparent 20px, #FBCFDF 20px, #FBCFDF 30px, transparent 30px, transparent 40px);\n     border-image: 10 repeating-linear-gradient(135deg, #C42061, #C42061 10px, transparent 10px, transparent 20px, #FBCFDF 20px, #FBCFDF 30px, transparent 30px, transparent 40px);\n  color: rgba(24, 16, 16, 0.76);\n}\n.form-row[data-v-5e9b25e0] {\n  margin-bottom: 15px;\n}\n.form-row input[type=\"text\"][data-v-5e9b25e0], .form-row input[type=\"email\"][data-v-5e9b25e0], .form-row textarea[data-v-5e9b25e0] {\n  width: 100%;\n  padding: 0 10px;\n  line-height: 35px;\n  border-width: 0;\n  outline: none;\n  background: transparent url(https://html5book.ru/wp-content/uploads/2016/12/bg-form.png) bottom left repeat-x;\n  background-size: 8px 35px;\n}\n.form-row textarea[data-v-5e9b25e0] {\n  background-attachment: local;\n  background-repeat: repeat;\n  resize: none;\n}\n.form-row input[type=\"submit\"][data-v-5e9b25e0] {\n  padding: 10px 20px;\n  margin-top: 10px;\n  background: #F67CA5;\n  border-width: 0;\n  cursor: pointer;\n  outline: none;\n  font-size: 13px;\n  letter-spacing: 1px;\n  color: #fffdee;\n  text-transform: uppercase;\n  transition: 1s cubic-bezier(.165, .84, .44, 1);\n}\n.form-row input[type=submit][data-v-5e9b25e0]:hover {\n  background: #C42061;\n}\n#contactChoice1[data-v-5e9b25e0] {\n  margin: 10px;\n}\n#contactChoice2[data-v-5e9b25e0] {\n  margin: 10px;\n}\n#contactChoice3[data-v-5e9b25e0] {\n  margin: 10px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Recipe/CreateRecipe.vue?vue&type=style&index=0&id=5e9b25e0&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Recipe/CreateRecipe.vue?vue&type=style&index=0&id=5e9b25e0&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateRecipe_vue_vue_type_style_index_0_id_5e9b25e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateRecipe.vue?vue&type=style&index=0&id=5e9b25e0&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Recipe/CreateRecipe.vue?vue&type=style&index=0&id=5e9b25e0&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateRecipe_vue_vue_type_style_index_0_id_5e9b25e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateRecipe_vue_vue_type_style_index_0_id_5e9b25e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Recipe/CreateRecipe.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Recipe/CreateRecipe.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateRecipe_vue_vue_type_template_id_5e9b25e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateRecipe.vue?vue&type=template&id=5e9b25e0&scoped=true& */ "./resources/js/components/Recipe/CreateRecipe.vue?vue&type=template&id=5e9b25e0&scoped=true&");
/* harmony import */ var _CreateRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateRecipe.vue?vue&type=script&lang=js& */ "./resources/js/components/Recipe/CreateRecipe.vue?vue&type=script&lang=js&");
/* harmony import */ var _CreateRecipe_vue_vue_type_style_index_0_id_5e9b25e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateRecipe.vue?vue&type=style&index=0&id=5e9b25e0&scoped=true&lang=css& */ "./resources/js/components/Recipe/CreateRecipe.vue?vue&type=style&index=0&id=5e9b25e0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CreateRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateRecipe_vue_vue_type_template_id_5e9b25e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreateRecipe_vue_vue_type_template_id_5e9b25e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5e9b25e0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Recipe/CreateRecipe.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Recipe/CreateRecipe.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Recipe/CreateRecipe.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateRecipe.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Recipe/CreateRecipe.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Recipe/CreateRecipe.vue?vue&type=style&index=0&id=5e9b25e0&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Recipe/CreateRecipe.vue?vue&type=style&index=0&id=5e9b25e0&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateRecipe_vue_vue_type_style_index_0_id_5e9b25e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateRecipe.vue?vue&type=style&index=0&id=5e9b25e0&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Recipe/CreateRecipe.vue?vue&type=style&index=0&id=5e9b25e0&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Recipe/CreateRecipe.vue?vue&type=template&id=5e9b25e0&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Recipe/CreateRecipe.vue?vue&type=template&id=5e9b25e0&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateRecipe_vue_vue_type_template_id_5e9b25e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateRecipe_vue_vue_type_template_id_5e9b25e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateRecipe_vue_vue_type_template_id_5e9b25e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateRecipe.vue?vue&type=template&id=5e9b25e0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Recipe/CreateRecipe.vue?vue&type=template&id=5e9b25e0&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Recipe/CreateRecipe.vue?vue&type=template&id=5e9b25e0&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Recipe/CreateRecipe.vue?vue&type=template&id=5e9b25e0&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "add_form",
      staticStyle: {
        "background-repeat": "no-repeat",
        "background-size": "100% 100%",
        "background-image":
          "url(https://naurok-test2.nyc3.digitaloceanspaces.com/433397/images/202691_1605727182.jpg)",
      },
    },
    [
      _c("form", { staticClass: "postcard" }, [
        _c("div", { staticClass: "form-row" }, [
          _c("label", { attrs: { for: "name" } }, [_vm._v("Введіть ім'я")]),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.fields.name,
                expression: "fields.name",
              },
            ],
            attrs: { type: "text", id: "name", required: "" },
            domProps: { value: _vm.fields.name },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.fields, "name", $event.target.value)
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-row" }, [
          _c("label", { attrs: { for: "email" } }, [_vm._v("Введіть Email")]),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.fields.email,
                expression: "fields.email",
              },
            ],
            attrs: { type: "email", id: "email", required: "" },
            domProps: { value: _vm.fields.email },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.fields, "email", $event.target.value)
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-row" }, [
          _c("label", { attrs: { for: "recipe_name" } }, [
            _vm._v("Введіть назву страви"),
          ]),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.fields.recipe_name,
                expression: "fields.recipe_name",
              },
            ],
            attrs: { type: "text", id: "recipe_name", required: "" },
            domProps: { value: _vm.fields.recipe_name },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.fields, "recipe_name", $event.target.value)
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-row" }, [
          _c("label", { attrs: { for: "description" } }, [
            _vm._v("Введіть опис страви"),
          ]),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.fields.description,
                expression: "fields.description",
              },
            ],
            attrs: { type: "text", id: "description", required: "" },
            domProps: { value: _vm.fields.description },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.fields, "description", $event.target.value)
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-row" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.fields.recipe_position,
                expression: "fields.recipe_position",
              },
            ],
            attrs: {
              type: "radio",
              id: "contactChoice1",
              name: "contact",
              value: "1",
            },
            domProps: { checked: _vm._q(_vm.fields.recipe_position, "1") },
            on: {
              change: function ($event) {
                return _vm.$set(_vm.fields, "recipe_position", "1")
              },
            },
          }),
          _vm._v(" "),
          _c("label", { attrs: { for: "contactChoice1" } }, [
            _vm._v("Сніданок"),
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.fields.recipe_position,
                expression: "fields.recipe_position",
              },
            ],
            attrs: {
              type: "radio",
              id: "contactChoice2",
              name: "contact",
              value: "2",
            },
            domProps: { checked: _vm._q(_vm.fields.recipe_position, "2") },
            on: {
              change: function ($event) {
                return _vm.$set(_vm.fields, "recipe_position", "2")
              },
            },
          }),
          _vm._v(" "),
          _c("label", { attrs: { for: "contactChoice2" } }, [_vm._v("Обід")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.fields.recipe_position,
                expression: "fields.recipe_position",
              },
            ],
            attrs: {
              type: "radio",
              id: "contactChoice3",
              name: "contact",
              value: "3",
            },
            domProps: { checked: _vm._q(_vm.fields.recipe_position, "3") },
            on: {
              change: function ($event) {
                return _vm.$set(_vm.fields, "recipe_position", "3")
              },
            },
          }),
          _vm._v(" "),
          _c("label", { attrs: { for: "contactChoice3" } }, [_vm._v("Вечеря")]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-row" }, [
          _c("label", { attrs: { for: "message" } }, [_vm._v("Ваш рецепт")]),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.fields.message,
                expression: "fields.message",
              },
            ],
            attrs: { rows: "9", name: "message", id: "message", required: "" },
            domProps: { value: _vm.fields.message },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.fields, "message", $event.target.value)
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-row" }, [
          _c("input", {
            attrs: { type: "submit", value: "Поділитися" },
            on: {
              click: function ($event) {
                $event.preventDefault()
                return _vm.addRecipeToDb.apply(null, arguments)
              },
            },
          }),
        ]),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);