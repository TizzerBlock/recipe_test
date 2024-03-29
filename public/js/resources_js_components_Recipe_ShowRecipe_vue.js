"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Recipe_ShowRecipe_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Recipe/ShowRecipe.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Recipe/ShowRecipe.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  name: "ShowRecipe",
  data: function data() {
    return {
      fields: '',
      recipeType: ''
    };
  },
  mounted: function mounted() {
    this.getRecipe();
  },
  methods: {
    getRecipe: function getRecipe() {
      var _this = this;

      axios.get('/api/recipe/' + this.$route.params.id).then(function (res) {
        _this.fields = res.data;

        if (_this.fields.recipe_position === 1) {
          _this.recipeType = 'Сніданок';
        } else if (_this.fields.recipe_position === 2) {
          _this.recipeType = 'Обід';
        } else if (_this.fields.recipe_position === 3) {
          _this.recipeType = 'Вечеря';
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Recipe/ShowRecipe.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Recipe/ShowRecipe.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShowRecipe_vue_vue_type_template_id_3c9a155e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowRecipe.vue?vue&type=template&id=3c9a155e&scoped=true& */ "./resources/js/components/Recipe/ShowRecipe.vue?vue&type=template&id=3c9a155e&scoped=true&");
/* harmony import */ var _ShowRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowRecipe.vue?vue&type=script&lang=js& */ "./resources/js/components/Recipe/ShowRecipe.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowRecipe_vue_vue_type_template_id_3c9a155e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ShowRecipe_vue_vue_type_template_id_3c9a155e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3c9a155e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Recipe/ShowRecipe.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Recipe/ShowRecipe.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Recipe/ShowRecipe.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowRecipe.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Recipe/ShowRecipe.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowRecipe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Recipe/ShowRecipe.vue?vue&type=template&id=3c9a155e&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Recipe/ShowRecipe.vue?vue&type=template&id=3c9a155e&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowRecipe_vue_vue_type_template_id_3c9a155e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowRecipe_vue_vue_type_template_id_3c9a155e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowRecipe_vue_vue_type_template_id_3c9a155e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowRecipe.vue?vue&type=template&id=3c9a155e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Recipe/ShowRecipe.vue?vue&type=template&id=3c9a155e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Recipe/ShowRecipe.vue?vue&type=template&id=3c9a155e&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Recipe/ShowRecipe.vue?vue&type=template&id=3c9a155e&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _vm.fields
    ? _c("div", [
        _c("div", [
          _vm._v("\n\n    name: " + _vm._s(this.fields.name) + "\n  "),
        ]),
        _vm._v(" "),
        _c("div", [
          _vm._v("\n    email: " + _vm._s(this.fields.email) + "\n  "),
        ]),
        _vm._v(" "),
        _c("div", [_c("h1", [_vm._v(_vm._s(this.fields.recipe_name))])]),
        _vm._v(" "),
        _c("div", [
          _vm._v("\n    recipe_position: " + _vm._s(this.recipeType) + "\n  "),
        ]),
        _vm._v(" "),
        _c("div", [
          _c("h2", [_vm._v("description: " + _vm._s(this.fields.description))]),
        ]),
        _vm._v(" "),
        _c("div", [_c("p", [_vm._v(" " + _vm._s(this.fields.message))])]),
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);