"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var primeng_1 = require("primeng/primeng");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var forms_2 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var like_component_1 = require("./components/like.component");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
//import { NotFoundComponent } from './Components/not-found.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_2.ReactiveFormsModule, forms_1.FormsModule, http_1.HttpModule, app_routing_1.routing, primeng_1.CalendarModule, primeng_1.AutoCompleteModule, animations_1.BrowserAnimationsModule, primeng_1.CheckboxModule],
        declarations: [app_component_1.AppComponent, like_component_1.LikeComponent],
        providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
//# sourceMappingURL=app.module.js.map