function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive": function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts": function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/app.component.ngfactory.js": function srcAppAppComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function () {
      return RenderType_AppComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function () {
      return View_AppComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function () {
      return View_AppComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function () {
      return AppComponentNgFactory;
    });
    /* harmony import */


    var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.component.scss.shim.ngstyle */
    "./src/app/app.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_flash_messages_angular_module_flash_messages_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../node_modules/flash-messages-angular/module/flash-messages.component.ngfactory */
    "./node_modules/flash-messages-angular/module/flash-messages.component.ngfactory.js");
    /* harmony import */


    var flash_messages_angular_module_flash_messages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! flash-messages-angular/module/flash-messages.component */
    "./node_modules/flash-messages-angular/module/flash-messages.component.js");
    /* harmony import */


    var flash_messages_angular_module_flash_messages_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flash_messages_angular_module_flash_messages_component__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var flash_messages_angular_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! flash-messages-angular/module/flash-messages.service */
    "./node_modules/flash-messages-angular/module/flash-messages.service.js");
    /* harmony import */


    var flash_messages_angular_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flash_messages_angular_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _service_chat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./service/chat.service */
    "./src/app/service/chat.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_AppComponent,
      data: {}
    });

    function View_AppComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "flash-messages", [], null, null, null, _node_modules_flash_messages_angular_module_flash_messages_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_FlashMessagesComponent_0"], _node_modules_flash_messages_angular_module_flash_messages_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_FlashMessagesComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, flash_messages_angular_module_flash_messages_component__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesComponent"], [flash_messages_angular_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);

        _ck(_v, 3, 0);
      }, null);
    }

    function View_AppComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], [_service_chat_service__WEBPACK_IMPORTED_MODULE_7__["ChatService"]], null, null)], null, null);
    }

    var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/app.component.scss.shim.ngstyle.js": function srcAppAppComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"];
    /***/
  },

  /***/
  "./src/app/app.component.ts": function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(_chatService) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this._chatService = _chatService;
        this.messageArray = []; // For receving messages
        // After all we are using observables, So we'have to subscribe to this particular method of a service

        this._chatService.newUserJoined().subscribe(function (data) {
          return _this.messageArray.push(data);
        });

        this._chatService.userLeftRoom().subscribe(function (data) {
          return _this.messageArray.push(data);
        });

        this._chatService.newMessageReceived().subscribe(function (data) {
          return _this.messageArray.push(data);
        });
      }

      _createClass(AppComponent, [{
        key: "join",
        value: function join() {
          this._chatService.joinRoom({
            user: this.user,
            room: this.room
          });
        }
      }, {
        key: "leave",
        value: function leave() {
          this._chatService.leaveRoom({
            user: this.user,
            room: this.room
          });
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          this._chatService.sendMessage({
            user: this.user,
            room: this.room,
            message: this.messageText
          });
        }
      }]);

      return AppComponent;
    }();
    /***/

  },

  /***/
  "./src/app/app.module.ngfactory.js": function srcAppAppModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function () {
      return AppModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _authentication_login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./authentication/login/login.component.ngfactory */
    "./src/app/authentication/login/login.component.ngfactory.js");
    /* harmony import */


    var _authentication_register_register_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./authentication/register/register.component.ngfactory */
    "./src/app/authentication/register/register.component.ngfactory.js");
    /* harmony import */


    var _chat_chat_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chat/chat.component.ngfactory */
    "./src/app/chat/chat.component.ngfactory.js");
    /* harmony import */


    var _authentication_profile_profile_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./authentication/profile/profile.component.ngfactory */
    "./src/app/authentication/profile/profile.component.ngfactory.js");
    /* harmony import */


    var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component.ngfactory */
    "./src/app/app.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/fesm2015/angularx-social-login.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var flash_messages_angular_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! flash-messages-angular/module/flash-messages.service */
    "./node_modules/flash-messages-angular/module/flash-messages.service.js");
    /* harmony import */


    var flash_messages_angular_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(flash_messages_angular_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_17__);
    /* harmony import */


    var _service_validate_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./service/validate.service */
    "./src/app/service/validate.service.ts");
    /* harmony import */


    var _service_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./service/auth.service */
    "./src/app/service/auth.service.ts");
    /* harmony import */


    var _gaurds_auth_gaurd_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./gaurds/auth-gaurd.guard */
    "./src/app/gaurds/auth-gaurd.guard.ts");
    /* harmony import */


    var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./authentication/login/login.component */
    "./src/app/authentication/login/login.component.ts");
    /* harmony import */


    var _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./authentication/register/register.component */
    "./src/app/authentication/register/register.component.ts");
    /* harmony import */


    var _chat_chat_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./chat/chat.component */
    "./src/app/chat/chat.component.ts");
    /* harmony import */


    var _authentication_profile_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./authentication/profile/profile.component */
    "./src/app/authentication/profile/profile.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var flash_messages_angular_module_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! flash-messages-angular/module/module */
    "./node_modules/flash-messages-angular/module/module.js");
    /* harmony import */


    var flash_messages_angular_module_module__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(flash_messages_angular_module_module__WEBPACK_IMPORTED_MODULE_26__);
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _authentication_login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["LoginComponentNgFactory"], _authentication_register_register_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RegisterComponentNgFactory"], _chat_chat_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["ChatComponentNgFactory"], _authentication_profile_profile_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ProfileComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_x"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_t"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_g"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) {
        return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomRendererFactory2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_11__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_11__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_11__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_11__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p1_0) {
        return [p0_0, p1_0];
      }, [_angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angularx_social_login__WEBPACK_IMPORTED_MODULE_14__["SocialAuthService"], angularx_social_login__WEBPACK_IMPORTED_MODULE_14__["SocialAuthService"], ["SocialAuthServiceConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_fire__WEBPACK_IMPORTED_MODULE_15__["FirebaseApp"], _angular_fire__WEBPACK_IMPORTED_MODULE_15__["ɵfirebaseAppFactory"], [_angular_fire__WEBPACK_IMPORTED_MODULE_15__["FIREBASE_OPTIONS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_fire__WEBPACK_IMPORTED_MODULE_15__["FIREBASE_APP_NAME"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuth"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuth"], [_angular_fire__WEBPACK_IMPORTED_MODULE_15__["FIREBASE_OPTIONS"], [2, _angular_fire__WEBPACK_IMPORTED_MODULE_15__["FIREBASE_APP_NAME"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["USE_EMULATOR"]], [2, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["SETTINGS"]], [2, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["TENANT_ID"]], [2, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["LANGUAGE_CODE"]], [2, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["USE_DEVICE_LANGUAGE"]], [2, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["PERSISTENCE"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, flash_messages_angular_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_17__["FlashMessagesService"], flash_messages_angular_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_17__["FlashMessagesService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _service_validate_service__WEBPACK_IMPORTED_MODULE_18__["ValidateService"], _service_validate_service__WEBPACK_IMPORTED_MODULE_18__["ValidateService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _service_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _gaurds_auth_gaurd_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGaurdGuard"], _gaurds_auth_gaurd_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGaurdGuard"], [_service_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () {
        return [_angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_b"](), _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_b"]()];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0, p2_0) {
        return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_platform_browser_m"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_i"](p1_0), _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_i"](p2_0)];
      }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_11__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_9__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_9__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTES"], function () {
        return [[], [{
          path: "login",
          component: _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"]
        }, {
          path: "register",
          component: _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_22__["RegisterComponent"]
        }, {
          path: "chat",
          component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_23__["ChatComponent"],
          canActivate: [_gaurds_auth_gaurd_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGaurdGuard"]]
        }, {
          path: "profile",
          component: _authentication_profile_profile_component__WEBPACK_IMPORTED_MODULE_24__["ProfileComponent"]
        }, {
          path: "",
          redirectTo: "/login",
          pathMatch: "full"
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_f"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_25__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_25__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, flash_messages_angular_module_module__WEBPACK_IMPORTED_MODULE_26__["FlashMessagesModule"], flash_messages_angular_module_module__WEBPACK_IMPORTED_MODULE_26__["FlashMessagesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angularx_social_login__WEBPACK_IMPORTED_MODULE_14__["SocialLoginModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_14__["SocialLoginModule"], [[3, angularx_social_login__WEBPACK_IMPORTED_MODULE_14__["SocialLoginModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CURRENCY_CODE"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_u"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵINJECTOR_SCOPE"], "root", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, "SocialAuthServiceConfig", _app_module__WEBPACK_IMPORTED_MODULE_1__["ɵ0"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_fire__WEBPACK_IMPORTED_MODULE_15__["FIREBASE_OPTIONS"], {
        apiKey: "AIzaSyA9hFskOR5PZ975xfRmYil60pZtYOqPAMQ",
        authDomain: "chat-flow-325406.firebaseapp.com",
        projectId: "chat-flow-325406",
        storageBucket: "chat-flow-325406.appspot.com",
        messagingSenderId: "800596385766",
        appId: "1:800596385766:web:aba3128e23e57453f58027",
        measurementId: "G-D9JY2NZ5C5"
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_fire__WEBPACK_IMPORTED_MODULE_15__["FIREBASE_APP_NAME"], undefined, [])]);
    });
    /***/

  },

  /***/
  "./src/app/app.module.ts": function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony import */


    var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./authentication/login/login.component */
    "./src/app/authentication/login/login.component.ts");
    /* harmony import */


    var _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./authentication/register/register.component */
    "./src/app/authentication/register/register.component.ts");
    /* harmony import */


    var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./chat/chat.component */
    "./src/app/chat/chat.component.ts");
    /* harmony import */


    var _authentication_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentication/profile/profile.component */
    "./src/app/authentication/profile/profile.component.ts");
    /* harmony import */


    var _gaurds_auth_gaurd_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./gaurds/auth-gaurd.guard */
    "./src/app/gaurds/auth-gaurd.guard.ts");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/fesm2015/angularx-social-login.js");

    var routes = [{
      path: 'login',
      component: _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
    }, {
      path: 'register',
      component: _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"]
    }, {
      path: 'chat',
      component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"],
      canActivate: [_gaurds_auth_gaurd_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGaurdGuard"]]
    }, {
      path: 'profile',
      component: _authentication_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]
    }, {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }];
    var ɵ0 = {
      autoLogin: false,
      providers: [{
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginProvider"]('800596385766-dj3knbe81phidod2655ldo5iplmhos27.apps.googleusercontent.com')
      }]
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };
    /***/

  },

  /***/
  "./src/app/authentication/login/login.component.ngfactory.js": function srcAppAuthenticationLoginLoginComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_LoginComponent", function () {
      return RenderType_LoginComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_LoginComponent_0", function () {
      return View_LoginComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_LoginComponent_Host_0", function () {
      return View_LoginComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponentNgFactory", function () {
      return LoginComponentNgFactory;
    });
    /* harmony import */


    var _login_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./login.component.scss.shim.ngstyle */
    "./src/app/authentication/login/login.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/authentication/login/login.component.ts");
    /* harmony import */


    var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/auth.service */
    "./src/app/service/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var flash_messages_angular_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! flash-messages-angular/module/flash-messages.service */
    "./node_modules/flash-messages-angular/module/flash-messages.service.js");
    /* harmony import */


    var flash_messages_angular_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flash_messages_angular_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/fesm2015/angularx-social-login.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_LoginComponent = [_login_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_LoginComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_LoginComponent,
      data: {}
    });

    function View_LoginComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 42, "body", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["class", "wave"], ["src", "../../../assets/wave.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 40, "div", [["class", "login-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "img"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "img", [["src", "../../../assets/bg.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 37, "div", [["class", "login-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 36, "form", [["action", ""], ["class", "form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onReset() !== false;
          ad = pd_1 && ad;
        }

        if ("submit" === en) {
          var pd_2 = _co.onLoginSubmit() !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "img", [["alt", ""], ["src", "../../../assets/avatar.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "h2", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Login"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 10, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 7, "input", [["id", "username"], ["name", "username"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.username = $event) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], {
        required: [0, "required"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], {
        name: [0, "name"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "label", [["for", "username"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Username"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 10, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 7, "input", [["id", "password"], ["name", "password"], ["required", ""], ["type", "password"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.password = $event) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], {
        required: [0, "required"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], {
        name: [0, "name"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "label", [["for", "password"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Password"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 0, "input", [["class", "btn"], ["type", "submit"], ["value", "Login"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "a", [["class", "forgot-pw"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Don't have account?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 2, "div", [["class", "google-login"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "button", [["class", "btn btn-success"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.signInWithGoogle() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Google "]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_15 = "";

        _ck(_v, 17, 0, currVal_15);

        var currVal_16 = "username";
        var currVal_17 = _co.username;

        _ck(_v, 20, 0, currVal_16, currVal_17);

        var currVal_26 = "";

        _ck(_v, 28, 0, currVal_26);

        var currVal_27 = "password";
        var currVal_28 = _co.password;

        _ck(_v, 31, 0, currVal_27, currVal_28);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending;

        _ck(_v, 6, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).required ? "" : null;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassUntouched;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassTouched;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassPristine;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassDirty;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassValid;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassInvalid;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassPending;

        _ck(_v, 15, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).required ? "" : null;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassUntouched;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassTouched;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassPristine;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassDirty;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassValid;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassInvalid;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassPending;

        _ck(_v, 26, 0, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25);
      });
    }

    function View_LoginComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-login", [], null, null, null, View_LoginComponent_0, RenderType_LoginComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], [_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], flash_messages_angular_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesService"], angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["SocialAuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuth"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var LoginComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-login", _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], View_LoginComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/authentication/login/login.component.scss.shim.ngstyle.js": function srcAppAuthenticationLoginLoginComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: url('wave.png');\n  background-size: cover;\n  font-family: \"Poppins\", sans-serif;\n  overflow: hidden;\n}\n\n.wave[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  z-index: -1;\n}\n\n.login-wrapper[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 7rem;\n  padding: 0 2rem;\n}\n\n.img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.login-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  text-align: center;\n}\n\n.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.login-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.login-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 15px 0;\n  color: #333;\n  text-transform: uppercase;\n  font-size: 2.9rem;\n  color: #32be8f;\n}\n\n.form[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  max-width: 380px;\n  padding: 80px 40px 40px;\n  background: rgba(0, 0, 0, 0.7);\n  border-radius: 15px;\n  color: #fff;\n  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);\n}\n\n.form[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.08);\n  transform: skewX(-26deg);\n  transform-origin: bottom left;\n  border-radius: 10px;\n  pointer-events: none;\n}\n\n.form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -50px;\n  left: calc(50% - 50px);\n  width: 100px;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 50%;\n}\n\n.form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 0;\n  font-size: 1rem;\n  letter-spacing: 1px;\n  margin-bottom: 30px;\n  border: none;\n  border-bottom: 1px solid #fff;\n  outline: none;\n  background-color: transparent;\n  color: inherit;\n}\n\n.form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 10px 0;\n  font-size: 1rem;\n  pointer-events: none;\n  transition: 0.3s ease-out;\n}\n\n.form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + label[_ngcontent-%COMP%] {\n  transform: translateY(-18px);\n  color: #ff652f;\n  font-size: 0.8rem;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 50px;\n  border-radius: 25px;\n  outline: none;\n  border: none;\n  background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);\n  background-size: 200%;\n  font-size: 1.2rem;\n  color: #fff;\n  font-family: \"Poppins\", sans-serif;\n  text-transform: uppercase;\n  margin: 1rem 0;\n  cursor: pointer;\n  transition: 0.5s;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-position: right;\n}\n\n.btn[_ngcontent-%COMP%]:hover   .img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.btn[_ngcontent-%COMP%]:hover   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n@media screen and (max-width: 1050px) {\n  .login-wrapper[_ngcontent-%COMP%] {\n    grid-gap: 5rem;\n  }\n}\n\n@media screen and (max-width: 1000px) {\n  form[_ngcontent-%COMP%] {\n    width: 290px;\n  }\n\n  .login-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2.4rem;\n    margin: 8px 0;\n  }\n\n  .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n}\n\n@media screen and (max-width: 900px) {\n  .login-wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .img[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .wave[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .login-content[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4vRDpcXFJlYWwgVGltZSBDaGF0IEFwcGxpY2F0aW9uXFxDaGF0LUZsb3dcXEZyb250ZW5kL3NyY1xcYXBwXFxhdXRoZW50aWNhdGlvblxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURDRTtFQUNFLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQ0U7RUFDRCxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0VEOztBRENFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREVFO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNDTjs7QURFRTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDTjs7QURFRTtFQUNJLFlBQUE7QUNDTjs7QURFRTtFQUNJLGFBQUE7QUNDTjs7QURFRTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDTjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0FDQ0o7O0FEQ0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0VKOztBREFFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQ0dKOztBREFFO0VBQ0Usa0JBQUE7QUNHSjs7QURERTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0FDSUo7O0FERkU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDS0o7O0FESEU7O0VBRUUsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNNSjs7QURKRTtFQUNELGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxzRUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNPRDs7QURMQTtFQUNDLDBCQUFBO0FDUUQ7O0FETkU7RUFDRCxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ1FEOztBRExBO0VBQ0MsWUFBQTtBQ09EOztBREhBO0VBQ0M7SUFDQyxjQUFBO0VDTUE7QUFDRjs7QURIQTtFQUNDO0lBQ0MsWUFBQTtFQ0tBOztFREZEO0lBQ08saUJBQUE7SUFDQSxhQUFBO0VDS047O0VERkQ7SUFDQyxZQUFBO0VDS0E7QUFDRjs7QURGQTtFQUNDO0lBQ0MsMEJBQUE7RUNJQTs7RURERDtJQUNDLGFBQUE7RUNJQTs7RURERDtJQUNDLGFBQUE7RUNJQTs7RURERDtJQUNDLHVCQUFBO0VDSUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL3dhdmUucG5nKSA7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAud2F2ZXtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0Ym90dG9tOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHotaW5kZXg6IC0xO1xyXG4gICAgXHJcbn1cclxuICAubG9naW4td3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBncmlkLWdhcCA6N3JlbTtcclxuICAgIHBhZGRpbmc6IDAgMnJlbTtcclxuXHJcbiAgfVxyXG5cclxuICAuaW1ne1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWNvbnRlbnR7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmltZyBpbWcge1xyXG4gICAgICB3aWR0aDogNTAwcHg7XHJcbiAgfVxyXG5cclxuICAubG9naW4tY29udGVudCBpbWcge1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWNvbnRlbnQgaDJ7XHJcbiAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICBjb2xvcjogIzMzMztcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC1zaXplOiAyLjlyZW07XHJcbiAgICAgIGNvbG9yOiAjMzJiZThmO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDM4MHB4O1xyXG4gICAgcGFkZGluZzogODBweCA0MHB4IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDE1cHggMjVweCByZ2JhKDAsMCwwLDAuNSk7IFxyXG4gIH1cclxuICAuZm9ybTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6Jyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsIDAuMDgpO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMjZkZWcpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG4gIC5mb3JtIGltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSA1MHB4KTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsIDAuOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuZm9ybSAuaW5wdXQtZ3JvdXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAuZm9ybSAuaW5wdXQtZ3JvdXAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIC5mb3JtIC5pbnB1dC1ncm91cCBsYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1vdXQ7XHJcbiAgfVxyXG4gIC5mb3JtIC5pbnB1dC1ncm91cCBpbnB1dDpmb2N1cyArIGxhYmVsLFxyXG4gIC5mb3JtIC5pbnB1dC1ncm91cCBpbnB1dDp2YWxpZCArIGxhYmVsIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMThweCk7XHJcbiAgICBjb2xvcjogI2ZmNjUyZjtcclxuICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgfVxyXG4gIC5idG57XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzJiZThmLCAjMzhkMzlmLCAjMzJiZThmKTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IDIwMCU7XHJcblx0Zm9udC1zaXplOiAxLjJyZW07XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Zm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdG1hcmdpbjogMXJlbSAwO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuLmJ0bjpob3ZlcntcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuXHJcbiAgLmltZ3tcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmltZyBpbWd7XHJcblx0d2lkdGg6IDUwMHB4O1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCl7XHJcblx0LmxvZ2luLXdyYXBwZXJ7XHJcblx0XHRncmlkLWdhcDogNXJlbTtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCl7XHJcblx0Zm9ybXtcclxuXHRcdHdpZHRoOiAyOTBweDtcclxuXHR9XHJcblxyXG5cdC5sb2dpbi1jb250ZW50IGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDA7XHJcblx0fVxyXG5cclxuXHQuaW1nIGltZ3tcclxuXHRcdHdpZHRoOiA0MDBweDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KXtcclxuXHQubG9naW4td3JhcHBlcntcclxuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG5cdH1cclxuXHJcblx0LmltZ3tcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cclxuXHQud2F2ZXtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cclxuXHQubG9naW4tY29udGVudHtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxufSIsIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL3dhdmUucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ud2F2ZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ubG9naW4td3JhcHBlciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ3JpZC1nYXA6IDdyZW07XG4gIHBhZGRpbmc6IDAgMnJlbTtcbn1cblxuLmltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWcgaW1nIHtcbiAgd2lkdGg6IDUwMHB4O1xufVxuXG4ubG9naW4tY29udGVudCBpbWcge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubG9naW4tY29udGVudCBoMiB7XG4gIG1hcmdpbjogMTVweCAwO1xuICBjb2xvcjogIzMzMztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyLjlyZW07XG4gIGNvbG9yOiAjMzJiZThmO1xufVxuXG4uZm9ybSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzgwcHg7XG4gIHBhZGRpbmc6IDgwcHggNDBweCA0MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDE1cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5mb3JtOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICB0cmFuc2Zvcm06IHNrZXdYKC0yNmRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmZvcm0gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01MHB4O1xuICBsZWZ0OiBjYWxjKDUwJSAtIDUwcHgpO1xuICB3aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uZm9ybSAuaW5wdXQtZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mb3JtIC5pbnB1dC1ncm91cCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4uZm9ybSAuaW5wdXQtZ3JvdXAgbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xufVxuXG4uZm9ybSAuaW5wdXQtZ3JvdXAgaW5wdXQ6Zm9jdXMgKyBsYWJlbCxcbi5mb3JtIC5pbnB1dC1ncm91cCBpbnB1dDp2YWxpZCArIGxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xOHB4KTtcbiAgY29sb3I6ICNmZjY1MmY7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uYnRuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzJiZThmLCAjMzhkMzlmLCAjMzJiZThmKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xufVxuLmJ0bjpob3ZlciAuaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5idG46aG92ZXIgLmltZyBpbWcge1xuICB3aWR0aDogNTAwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xuICAubG9naW4td3JhcHBlciB7XG4gICAgZ3JpZC1nYXA6IDVyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICBmb3JtIHtcbiAgICB3aWR0aDogMjkwcHg7XG4gIH1cblxuICAubG9naW4tY29udGVudCBoMiB7XG4gICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgfVxuXG4gIC5pbWcgaW1nIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5sb2dpbi13cmFwcGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5pbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAud2F2ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5sb2dpbi1jb250ZW50IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufSJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/authentication/login/login.component.ts": function srcAppAuthenticationLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(_authService, router, _flashMessageService, _socialAuthService, http, afAuth) {
        _classCallCheck(this, LoginComponent);

        this._authService = _authService;
        this.router = router;
        this._flashMessageService = _flashMessageService;
        this._socialAuthService = _socialAuthService;
        this.http = http;
        this.afAuth = afAuth;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLoginSubmit",
        value: function onLoginSubmit() {
          var _this2 = this;

          var user = {
            username: this.username,
            password: this.password
          };

          this._authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
              _this2._authService.storeUserData(data.token, data.user);

              _this2._flashMessageService.show('You are now logged in!', {
                cssClass: 'alert-success',
                timeout: 3000
              });

              _this2.router.navigate(['chat']);
            } else {
              _this2._flashMessageService.show(data.msg, {
                cssClass: 'alert-success',
                timeout: 3000
              });

              _this2.router.navigate(['login']);
            }

            console.log(data);
          });
        }
      }, {
        key: "signInWithGoogle",
        value: function signInWithGoogle() {//   this._socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
          //   (user) => {
          //       this.router.navigate(['chat']);
          //     this._authService.googleSignIn(user.idToken).subscribe(
          //      (res)=> {
          //        console.log(res)
          //       },
          //       (err) => {
          //         console.log(err)
          //       }
          //     )
          //   console.log()
          //  })
          // const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
          // this.afAuth.signInWithPopup(googleAuthProvider);
          // this.router.navigate(['chat']);
        }
      }]);

      return LoginComponent;
    }();
    /***/

  },

  /***/
  "./src/app/authentication/profile/profile.component.ngfactory.js": function srcAppAuthenticationProfileProfileComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ProfileComponent", function () {
      return RenderType_ProfileComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ProfileComponent_0", function () {
      return View_ProfileComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ProfileComponent_Host_0", function () {
      return View_ProfileComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponentNgFactory", function () {
      return ProfileComponentNgFactory;
    });
    /* harmony import */


    var _profile_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./profile.component.scss.shim.ngstyle */
    "./src/app/authentication/profile/profile.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./profile.component */
    "./src/app/authentication/profile/profile.component.ts");
    /* harmony import */


    var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/auth.service */
    "./src/app/service/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_ProfileComponent = [_profile_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_ProfileComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ProfileComponent,
      data: {}
    });

    function View_ProfileComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [], null, null);
    }

    function View_ProfileComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-profile", [], null, null, null, View_ProfileComponent_0, RenderType_ProfileComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"], [_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var ProfileComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-profile", _profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"], View_ProfileComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/authentication/profile/profile.component.scss.shim.ngstyle.js": function srcAppAuthenticationProfileProfileComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"];
    /***/
  },

  /***/
  "./src/app/authentication/profile/profile.component.ts": function srcAppAuthenticationProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(_authService, router) {
        _classCallCheck(this, ProfileComponent);

        this._authService = _authService;
        this.router = router;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this._authService.getProfile().subscribe(function (profile) {
            _this3.user = profile.user;
          }, function (err) {
            console.log(err);
            return false;
          });
        }
      }]);

      return ProfileComponent;
    }();
    /***/

  },

  /***/
  "./src/app/authentication/register/register.component.ngfactory.js": function srcAppAuthenticationRegisterRegisterComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_RegisterComponent", function () {
      return RenderType_RegisterComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_RegisterComponent_0", function () {
      return View_RegisterComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_RegisterComponent_Host_0", function () {
      return View_RegisterComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponentNgFactory", function () {
      return RegisterComponentNgFactory;
    });
    /* harmony import */


    var _register_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./register.component.scss.shim.ngstyle */
    "./src/app/authentication/register/register.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register.component */
    "./src/app/authentication/register/register.component.ts");
    /* harmony import */


    var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/auth.service */
    "./src/app/service/auth.service.ts");
    /* harmony import */


    var _service_validate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/validate.service */
    "./src/app/service/validate.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var flash_messages_angular_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! flash-messages-angular/module/flash-messages.service */
    "./node_modules/flash-messages-angular/module/flash-messages.service.js");
    /* harmony import */


    var flash_messages_angular_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flash_messages_angular_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_7__);
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_RegisterComponent = [_register_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_RegisterComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_RegisterComponent,
      data: {}
    });

    function View_RegisterComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 58, "body", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["class", "wave"], ["src", "../../../assets/wave.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 56, "div", [["class", "login-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "img"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "img", [["src", "../../../assets/bg.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 53, "div", [["class", "login-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 52, "form", [["action", ""], ["class", "form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onReset() !== false;
          ad = pd_1 && ad;
        }

        if ("submit" === en) {
          var pd_2 = _co.onRegister() !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "img", [["alt", ""], ["src", "../../../assets/avatar.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "h2", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Register"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 10, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 7, "input", [["id", "name"], ["name", "name"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.name = $event) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], {
        required: [0, "required"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], {
        name: [0, "name"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "label", [["for", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 10, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 7, "input", [["id", "username"], ["name", "username"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.username = $event) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], {
        required: [0, "required"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], {
        name: [0, "name"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "label", [["for", "username"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Username"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 10, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 7, "input", [["id", "email"], ["name", "email"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.email = $event) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], {
        required: [0, "required"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], {
        name: [0, "name"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 1, "label", [["for", "email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Email"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 10, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 7, "input", [["id", "password"], ["name", "password"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.password = $event) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], {
        required: [0, "required"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], {
        name: [0, "name"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 1, "label", [["for", "password"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Password"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 0, "input", [["class", "btn"], ["type", "submit"], ["value", "submit"]], null, null, null, null, null))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_15 = "";

        _ck(_v, 17, 0, currVal_15);

        var currVal_16 = "name";
        var currVal_17 = _co.name;

        _ck(_v, 20, 0, currVal_16, currVal_17);

        var currVal_26 = "";

        _ck(_v, 28, 0, currVal_26);

        var currVal_27 = "username";
        var currVal_28 = _co.username;

        _ck(_v, 31, 0, currVal_27, currVal_28);

        var currVal_37 = "";

        _ck(_v, 39, 0, currVal_37);

        var currVal_38 = "email";
        var currVal_39 = _co.email;

        _ck(_v, 42, 0, currVal_38, currVal_39);

        var currVal_48 = "";

        _ck(_v, 50, 0, currVal_48);

        var currVal_49 = "password";
        var currVal_50 = _co.password;

        _ck(_v, 53, 0, currVal_49, currVal_50);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending;

        _ck(_v, 6, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).required ? "" : null;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassUntouched;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassTouched;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassPristine;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassDirty;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassValid;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassInvalid;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ngClassPending;

        _ck(_v, 15, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).required ? "" : null;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassUntouched;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassTouched;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassPristine;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassDirty;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassValid;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassInvalid;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassPending;

        _ck(_v, 26, 0, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25);

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).required ? "" : null;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassUntouched;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassTouched;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassPristine;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassDirty;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassValid;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassInvalid;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassPending;

        _ck(_v, 37, 0, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36);

        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).required ? "" : null;

        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassUntouched;

        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassTouched;

        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassPristine;

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassDirty;

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassValid;

        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassInvalid;

        var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassPending;

        _ck(_v, 48, 0, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47);
      });
    }

    function View_RegisterComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-register", [], null, null, null, View_RegisterComponent_0, RenderType_RegisterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], [_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _service_validate_service__WEBPACK_IMPORTED_MODULE_5__["ValidateService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], flash_messages_angular_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_7__["FlashMessagesService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var RegisterComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-register", _register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], View_RegisterComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/authentication/register/register.component.scss.shim.ngstyle.js": function srcAppAuthenticationRegisterRegisterComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: url('wave.png');\n  background-size: cover;\n  font-family: \"Poppins\", sans-serif;\n  overflow: hidden;\n}\n\n.wave[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  z-index: -1;\n}\n\n.login-wrapper[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 7rem;\n  padding: 0 2rem;\n}\n\n.img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.login-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  text-align: center;\n}\n\n.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.login-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.login-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 15px 0;\n  color: #333;\n  text-transform: uppercase;\n  font-size: 2.9rem;\n  color: #32be8f;\n}\n\n.form[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  max-width: 380px;\n  padding: 80px 40px 40px;\n  background: rgba(0, 0, 0, 0.7);\n  border-radius: 15px;\n  color: #fff;\n  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);\n}\n\n.form[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.08);\n  transform: skewX(-26deg);\n  transform-origin: bottom left;\n  border-radius: 10px;\n  pointer-events: none;\n}\n\n.form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -50px;\n  left: calc(50% - 50px);\n  width: 100px;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 50%;\n}\n\n.form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 0;\n  font-size: 1rem;\n  letter-spacing: 1px;\n  margin-bottom: 30px;\n  border: none;\n  border-bottom: 1px solid #fff;\n  outline: none;\n  background-color: transparent;\n  color: inherit;\n}\n\n.form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 10px 0;\n  font-size: 1rem;\n  pointer-events: none;\n  transition: 0.3s ease-out;\n}\n\n.form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    + label[_ngcontent-%COMP%] {\n  transform: translateY(-18px);\n  color: #ff652f;\n  font-size: 0.8rem;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 50px;\n  border-radius: 25px;\n  outline: none;\n  border: none;\n  background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);\n  background-size: 200%;\n  font-size: 1.2rem;\n  color: #fff;\n  font-family: \"Poppins\", sans-serif;\n  text-transform: uppercase;\n  margin: 1rem 0;\n  cursor: pointer;\n  transition: 0.5s;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-position: right;\n}\n\n.btn[_ngcontent-%COMP%]:hover   .img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.btn[_ngcontent-%COMP%]:hover   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n@media screen and (max-width: 1050px) {\n  .login-wrapper[_ngcontent-%COMP%] {\n    grid-gap: 5rem;\n  }\n}\n\n@media screen and (max-width: 1000px) {\n  form[_ngcontent-%COMP%] {\n    width: 290px;\n  }\n\n  .login-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2.4rem;\n    margin: 8px 0;\n  }\n\n  .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n}\n\n@media screen and (max-width: 900px) {\n  .login-wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .img[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .wave[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .login-content[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vcmVnaXN0ZXIvRDpcXFJlYWwgVGltZSBDaGF0IEFwcGxpY2F0aW9uXFxDaGF0LUZsb3dcXEZyb250ZW5kL3NyY1xcYXBwXFxhdXRoZW50aWNhdGlvblxccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURDRTtFQUNFLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQ0U7RUFDRCxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0VEOztBRENFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREVFO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNDTjs7QURFRTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDTjs7QURFRTtFQUNJLFlBQUE7QUNDTjs7QURFRTtFQUNJLGFBQUE7QUNDTjs7QURFRTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDTjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0FDQ0o7O0FEQ0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0VKOztBREFFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQ0dKOztBREFFO0VBQ0Usa0JBQUE7QUNHSjs7QURERTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0FDSUo7O0FERkU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDS0o7O0FESEU7O0VBRUUsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNNSjs7QURKRTtFQUNELGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxzRUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNPRDs7QURMQTtFQUNDLDBCQUFBO0FDUUQ7O0FETkU7RUFDRCxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ1FEOztBRExBO0VBQ0MsWUFBQTtBQ09EOztBREhBO0VBQ0M7SUFDQyxjQUFBO0VDTUE7QUFDRjs7QURIQTtFQUNDO0lBQ0MsWUFBQTtFQ0tBOztFREZEO0lBQ08saUJBQUE7SUFDQSxhQUFBO0VDS047O0VERkQ7SUFDQyxZQUFBO0VDS0E7QUFDRjs7QURGQTtFQUNDO0lBQ0MsMEJBQUE7RUNJQTs7RURERDtJQUNDLGFBQUE7RUNJQTs7RURERDtJQUNDLGFBQUE7RUNJQTs7RURERDtJQUNDLHVCQUFBO0VDSUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL3dhdmUucG5nKSA7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAud2F2ZXtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0Ym90dG9tOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHotaW5kZXg6IC0xO1xyXG4gICAgXHJcbn1cclxuICAubG9naW4td3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBncmlkLWdhcCA6N3JlbTtcclxuICAgIHBhZGRpbmc6IDAgMnJlbTtcclxuXHJcbiAgfVxyXG5cclxuICAuaW1ne1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWNvbnRlbnR7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmltZyBpbWcge1xyXG4gICAgICB3aWR0aDogNTAwcHg7XHJcbiAgfVxyXG5cclxuICAubG9naW4tY29udGVudCBpbWcge1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWNvbnRlbnQgaDJ7XHJcbiAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICBjb2xvcjogIzMzMztcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC1zaXplOiAyLjlyZW07XHJcbiAgICAgIGNvbG9yOiAjMzJiZThmO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDM4MHB4O1xyXG4gICAgcGFkZGluZzogODBweCA0MHB4IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDE1cHggMjVweCByZ2JhKDAsMCwwLDAuNSk7IFxyXG4gIH1cclxuICAuZm9ybTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6Jyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsIDAuMDgpO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMjZkZWcpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG4gIC5mb3JtIGltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSA1MHB4KTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsIDAuOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuZm9ybSAuaW5wdXQtZ3JvdXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAuZm9ybSAuaW5wdXQtZ3JvdXAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIC5mb3JtIC5pbnB1dC1ncm91cCBsYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1vdXQ7XHJcbiAgfVxyXG4gIC5mb3JtIC5pbnB1dC1ncm91cCBpbnB1dDpmb2N1cyArIGxhYmVsLFxyXG4gIC5mb3JtIC5pbnB1dC1ncm91cCBpbnB1dDp2YWxpZCArIGxhYmVsIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMThweCk7XHJcbiAgICBjb2xvcjogI2ZmNjUyZjtcclxuICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgfVxyXG4gIC5idG57XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzJiZThmLCAjMzhkMzlmLCAjMzJiZThmKTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IDIwMCU7XHJcblx0Zm9udC1zaXplOiAxLjJyZW07XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Zm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdG1hcmdpbjogMXJlbSAwO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuLmJ0bjpob3ZlcntcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuXHJcbiAgLmltZ3tcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmltZyBpbWd7XHJcblx0d2lkdGg6IDUwMHB4O1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCl7XHJcblx0LmxvZ2luLXdyYXBwZXJ7XHJcblx0XHRncmlkLWdhcDogNXJlbTtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCl7XHJcblx0Zm9ybXtcclxuXHRcdHdpZHRoOiAyOTBweDtcclxuXHR9XHJcblxyXG5cdC5sb2dpbi1jb250ZW50IGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDA7XHJcblx0fVxyXG5cclxuXHQuaW1nIGltZ3tcclxuXHRcdHdpZHRoOiA0MDBweDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KXtcclxuXHQubG9naW4td3JhcHBlcntcclxuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG5cdH1cclxuXHJcblx0LmltZ3tcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cclxuXHQud2F2ZXtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cclxuXHQubG9naW4tY29udGVudHtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxufSIsIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL3dhdmUucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ud2F2ZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ubG9naW4td3JhcHBlciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ3JpZC1nYXA6IDdyZW07XG4gIHBhZGRpbmc6IDAgMnJlbTtcbn1cblxuLmltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWcgaW1nIHtcbiAgd2lkdGg6IDUwMHB4O1xufVxuXG4ubG9naW4tY29udGVudCBpbWcge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubG9naW4tY29udGVudCBoMiB7XG4gIG1hcmdpbjogMTVweCAwO1xuICBjb2xvcjogIzMzMztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyLjlyZW07XG4gIGNvbG9yOiAjMzJiZThmO1xufVxuXG4uZm9ybSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzgwcHg7XG4gIHBhZGRpbmc6IDgwcHggNDBweCA0MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDE1cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5mb3JtOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICB0cmFuc2Zvcm06IHNrZXdYKC0yNmRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmZvcm0gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01MHB4O1xuICBsZWZ0OiBjYWxjKDUwJSAtIDUwcHgpO1xuICB3aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uZm9ybSAuaW5wdXQtZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mb3JtIC5pbnB1dC1ncm91cCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4uZm9ybSAuaW5wdXQtZ3JvdXAgbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xufVxuXG4uZm9ybSAuaW5wdXQtZ3JvdXAgaW5wdXQ6Zm9jdXMgKyBsYWJlbCxcbi5mb3JtIC5pbnB1dC1ncm91cCBpbnB1dDp2YWxpZCArIGxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xOHB4KTtcbiAgY29sb3I6ICNmZjY1MmY7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uYnRuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzJiZThmLCAjMzhkMzlmLCAjMzJiZThmKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xufVxuLmJ0bjpob3ZlciAuaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5idG46aG92ZXIgLmltZyBpbWcge1xuICB3aWR0aDogNTAwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xuICAubG9naW4td3JhcHBlciB7XG4gICAgZ3JpZC1nYXA6IDVyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICBmb3JtIHtcbiAgICB3aWR0aDogMjkwcHg7XG4gIH1cblxuICAubG9naW4tY29udGVudCBoMiB7XG4gICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgfVxuXG4gIC5pbWcgaW1nIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5sb2dpbi13cmFwcGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5pbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAud2F2ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5sb2dpbi1jb250ZW50IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufSJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/authentication/register/register.component.ts": function srcAppAuthenticationRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(_authService, _validateService, router, _flashMessageService) {
        _classCallCheck(this, RegisterComponent);

        this._authService = _authService;
        this._validateService = _validateService;
        this.router = router;
        this._flashMessageService = _flashMessageService;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onRegister",
        value: function onRegister() {
          var _this4 = this;

          var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
          }; // Validate Register

          if (!this._validateService.validateRegister(user)) {
            this._flashMessageService.show('Please fill in all fields!', {
              cssClass: 'alert-danger',
              timeout: 3000
            });

            return false;
          } // Validate Email 


          if (!this._validateService.validateEmail(user.email)) {
            this._flashMessageService.show('Please use a valid email!', {
              cssClass: 'alert-danger',
              timeout: 3000
            });

            return false;
          } // Register User


          this._authService.registerUser(user).subscribe(function (data) {
            if (data) {
              _this4._flashMessageService.show('You are now registered and can now login!', {
                cssClass: 'alert-success',
                timeout: 3000
              });

              _this4.router.navigate(['/login']);
            } else {
              _this4._flashMessageService.show('Something went wrong!', {
                cssClass: 'alert-danger',
                timeout: 3000
              });

              _this4.router.navigate(['/register']);
            }
          });
        }
      }]);

      return RegisterComponent;
    }();
    /***/

  },

  /***/
  "./src/app/chat/chat.component.ngfactory.js": function srcAppChatChatComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ChatComponent", function () {
      return RenderType_ChatComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ChatComponent_0", function () {
      return View_ChatComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ChatComponent_Host_0", function () {
      return View_ChatComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatComponentNgFactory", function () {
      return ChatComponentNgFactory;
    });
    /* harmony import */


    var _chat_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./chat.component.scss.shim.ngstyle */
    "./src/app/chat/chat.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./chat.component */
    "./src/app/chat/chat.component.ts");
    /* harmony import */


    var _service_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../service/chat.service */
    "./src/app/service/chat.service.ts");
    /* harmony import */


    var _service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../service/auth.service */
    "./src/app/service/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var flash_messages_angular_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! flash-messages-angular/module/flash-messages.service */
    "./node_modules/flash-messages-angular/module/flash-messages.service.js");
    /* harmony import */


    var flash_messages_angular_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flash_messages_angular_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_ChatComponent = [_chat_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_ChatComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ChatComponent,
      data: {}
    });

    function View_ChatComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", " : "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.user;

        _ck(_v, 3, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.message;

        _ck(_v, 4, 0, currVal_1);
      });
    }

    function View_ChatComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-success"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.signOut() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Google "]))], null, null);
    }

    function View_ChatComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 63, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h2", [["style", "margin-left: 550px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Real Time Chat Application"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 37, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 9, "div", [["class", "col-sm-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "label", [["for", "username"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Username"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 5, "input", [["class", "form-control"], ["id", "username"], ["placeholder", "Enter username"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.user = $event) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 20, "div", [["class", "col-sm-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "label", [["for", "roomInput"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Choose room"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 17, "select", [["class", "form-control"], ["id", "roomInput"], ["name", "roomInput"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onChange($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_2 = (_co.room = $event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], {
        name: [0, "name"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 3, "option", [["value", "Lobby"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Lobby"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 3, "option", [["value", "Hall"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Hall"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 3, "option", [["value", "Deluxe"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Deluxe"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 5, "div", [["class", "col sm-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 4, "div", [["class", "pull-right"], ["style", "margin-top: 19px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.join() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Join "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "button", [["class", "btn btn-default"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.leave() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Leave "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 2, "div", [["class", "well"], ["style", "height: 200px; padding: 15px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChatComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 16, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 6, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 5, "input", [["class", "form-control"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.messageText = $event) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 2, "div", [["class", "col-sm-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 1, "button", [["class", "btn btn-success pull-right"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.sendMessage() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Send "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 5, "div", [["class", "col-sm-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 1, "button", [["class", "btn btn-success pull-right"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.onLogoutClick() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Logout "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_ChatComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = _co.user;

        _ck(_v, 13, 0, currVal_7);

        var currVal_15 = "roomInput";
        var currVal_16 = _co.room;

        _ck(_v, 22, 0, currVal_15, currVal_16);

        var currVal_17 = "Lobby";

        _ck(_v, 26, 0, currVal_17);

        var currVal_18 = "Lobby";

        _ck(_v, 27, 0, currVal_18);

        var currVal_19 = "Hall";

        _ck(_v, 30, 0, currVal_19);

        var currVal_20 = "Hall";

        _ck(_v, 31, 0, currVal_20);

        var currVal_21 = "Deluxe";

        _ck(_v, 34, 0, currVal_21);

        var currVal_22 = "Deluxe";

        _ck(_v, 35, 0, currVal_22);

        var currVal_23 = _co.messageArray;

        _ck(_v, 46, 0, currVal_23);

        var currVal_31 = _co.messageText;

        _ck(_v, 52, 0, currVal_31);

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 62, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).transform(_co.afAuth.authState));

        _ck(_v, 62, 0, currVal_32);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassUntouched;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassTouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPristine;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassDirty;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassValid;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassInvalid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPending;

        _ck(_v, 10, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassUntouched;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassTouched;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassPristine;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassDirty;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassValid;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassInvalid;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassPending;

        _ck(_v, 19, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassUntouched;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassTouched;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassPristine;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassDirty;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassValid;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassInvalid;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassPending;

        _ck(_v, 49, 0, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30);
      });
    }

    function View_ChatComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chat", [], null, null, null, View_ChatComponent_0, RenderType_ChatComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"], [_service_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], flash_messages_angular_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_8__["FlashMessagesService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuth"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var ChatComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-chat", _chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"], View_ChatComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/chat/chat.component.scss.shim.ngstyle.js": function srcAppChatChatComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = [".container-fluid[_ngcontent-%COMP%] {\n  padding: 50px;\n  font: 14px \"Lucida Grande\", Helvetica, Arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9EOlxcUmVhbCBUaW1lIENoYXQgQXBwbGljYXRpb25cXENoYXQtRmxvd1xcRnJvbnRlbmQvc3JjXFxhcHBcXGNoYXRcXGNoYXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx3REFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgZm9udDogMTRweCBcIkx1Y2lkYSBHcmFuZGVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICB9IiwiLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGZvbnQ6IDE0cHggXCJMdWNpZGEgR3JhbmRlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/chat/chat.component.ts": function srcAppChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
      return ChatComponent;
    });

    var ChatComponent = /*#__PURE__*/function () {
      function ChatComponent(_chatService, _authService, router, _flashMessageService, afAuth) {
        var _this5 = this;

        _classCallCheck(this, ChatComponent);

        this._chatService = _chatService;
        this._authService = _authService;
        this.router = router;
        this._flashMessageService = _flashMessageService;
        this.afAuth = afAuth;
        this.messageArray = []; // For receving messages
        // After all we are using observables, So we'have to subscribe to this particular method of a service

        this._chatService.newUserJoined().subscribe(function (data) {
          return _this5.messageArray.push(data);
        });

        this._chatService.userLeftRoom().subscribe(function (data) {
          return _this5.messageArray.push(data);
        });

        this._chatService.newMessageReceived().subscribe(function (data) {
          return _this5.messageArray.push(data);
        });
      }

      _createClass(ChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "join",
        value: function join() {
          this._chatService.joinRoom({
            user: this.user,
            room: this.room
          });
        }
      }, {
        key: "leave",
        value: function leave() {
          this._chatService.leaveRoom({
            user: this.user,
            room: this.room
          });
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          this._chatService.sendMessage({
            user: this.user,
            room: this.room,
            message: this.messageText
          });
        }
      }, {
        key: "onLogoutClick",
        value: function onLogoutClick() {
          this._authService.logout();

          this._flashMessageService.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
          });

          this.router.navigate(['/login']);
          return false;
        }
      }, {
        key: "signOut",
        value: function signOut() {
          this.afAuth.signOut();
          this.router.navigate(['/login']);
        }
      }]);

      return ChatComponent;
    }();
    /***/

  },

  /***/
  "./src/app/gaurds/auth-gaurd.guard.ts": function srcAppGaurdsAuthGaurdGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGaurdGuard", function () {
      return AuthGaurdGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/auth.service */
    "./src/app/service/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthGaurdGuard = /*#__PURE__*/function () {
      function AuthGaurdGuard(_authService, router) {
        _classCallCheck(this, AuthGaurdGuard);

        this._authService = _authService;
        this.router = router;
      }

      _createClass(AuthGaurdGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this._authService.loggedIn()) {
            return true;
          } else {
            this.router.navigate(['login']);
            return false;
          }
        }
      }]);

      return AuthGaurdGuard;
    }();

    AuthGaurdGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function AuthGaurdGuard_Factory() {
        return new AuthGaurdGuard(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      },
      token: AuthGaurdGuard,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/service/auth.service.ts": function srcAppServiceAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
      } // Register User


      _createClass(AuthService, [{
        key: "registerUser",
        value: function registerUser(user) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
          headers.append('Content-Type', 'application/json');
          return this.http.post('user/register', user, {
            headers: headers
          });
        } // Authenticate User

      }, {
        key: "authenticateUser",
        value: function authenticateUser(user) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
          headers.append('Content-Type', 'application/json');
          return this.http.post('user/authenticate', user, {
            headers: headers
          });
        } // Get User Profile

      }, {
        key: "getProfile",
        value: function getProfile() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
          this.loadToken();
          headers.append('Authorization', this.authToken);
          headers.append('Content-Type', 'application/json');
          return this.http.get('user/profile', {
            headers: headers
          });
        } // Store User Token

      }, {
        key: "storeUserData",
        value: function storeUserData(token, user) {
          localStorage.setItem('id_token', token);
          localStorage.setItem('user', JSON.stringify(user));
          this.authToken = token;
          this.user = user;
        } // Load Token ID

      }, {
        key: "loadToken",
        value: function loadToken() {
          var token = localStorage.getItem('id_token');
          this.authToken = token;
        } // Login Method

      }, {
        key: "loggedIn",
        value: function loggedIn() {
          return !!localStorage.getItem('id_token'); // !!Return either true or false
        } // Logout Method

      }, {
        key: "logout",
        value: function logout() {
          this.authToken = null;
          this.user = null;
          localStorage.clear();
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      factory: function AuthService_Factory() {
        return new AuthService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      },
      token: AuthService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/service/chat.service.ts": function srcAppServiceChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ChatService = /*#__PURE__*/function () {
      function ChatService() {
        _classCallCheck(this, ChatService);

        // Connection establised 
        // io socket is listening on the same socket where hhtp server in runnig on 3000
        // private socket = io('http://localhost:3000');
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__();
      }

      _createClass(ChatService, [{
        key: "joinRoom",
        value: function joinRoom(data) {
          this.socket.emit('join', data);
        }
      }, {
        key: "newUserJoined",
        value: function newUserJoined() {
          var _this6 = this;

          var observable = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            _this6.socket.on('new user joined', function (data) {
              observer.next(data);
            });

            return function () {
              _this6.socket.discconect();
            };
          });
          return observable;
        }
      }, {
        key: "leaveRoom",
        value: function leaveRoom(data) {
          this.socket.emit('leave', data);
        }
      }, {
        key: "userLeftRoom",
        value: function userLeftRoom() {
          var _this7 = this;

          var observable = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            _this7.socket.on('left room', function (data) {
              observer.next(data);
            });

            return function () {
              _this7.socket.disconnect();
            };
          });
          return observable;
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(data) {
          this.socket.emit('message', data);
        }
      }, {
        key: "newMessageReceived",
        value: function newMessageReceived() {
          var _this8 = this;

          var observable = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            _this8.socket.on('new message', function (data) {
              observer.next(data);
            });

            return function () {
              _this8.socket.disconnect();
            };
          });
          return observable;
        }
      }]);

      return ChatService;
    }();

    ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      factory: function ChatService_Factory() {
        return new ChatService();
      },
      token: ChatService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/service/validate.service.ts": function srcAppServiceValidateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidateService", function () {
      return ValidateService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ValidateService = /*#__PURE__*/function () {
      function ValidateService() {
        _classCallCheck(this, ValidateService);
      } // Validate register


      _createClass(ValidateService, [{
        key: "validateRegister",
        value: function validateRegister(user) {
          if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
          } else {
            return true;
          }
        } // Validate email

      }, {
        key: "validateEmail",
        value: function validateEmail(email) {
          var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(String(email).toLowerCase());
        }
      }]);

      return ValidateService;
    }();

    ValidateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function ValidateService_Factory() {
        return new ValidateService();
      },
      token: ValidateService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/environments/environment.ts": function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebaseConfig: {
        apiKey: "AIzaSyA9hFskOR5PZ975xfRmYil60pZtYOqPAMQ",
        authDomain: "chat-flow-325406.firebaseapp.com",
        projectId: "chat-flow-325406",
        storageBucket: "chat-flow-325406.appspot.com",
        messagingSenderId: "800596385766",
        appId: "1:800596385766:web:aba3128e23e57453f58027",
        measurementId: "G-D9JY2NZ5C5"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts": function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module.ngfactory */
    "./src/app/app.module.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0: function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Real Time Chat Application\Chat-Flow\Frontend\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1: function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map