"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var home_component_1 = require('./home/home.component');
var education_component_1 = require('./education/education.component');
var app_service_1 = require('./app.service');
var reverse_filter_pipe_1 = require('./reverse-filter.pipe');
var skills_component_1 = require('./skills/skills.component');
var projects_component_1 = require('./projects/projects.component');
var experience_component_1 = require('./experience/experience.component');
var contact_component_1 = require('./contact/contact.component');
var core_2 = require('@angular/core');
core_2.enableProdMode();
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, http_1.JsonpModule],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                education_component_1.EduComponent,
                reverse_filter_pipe_1.ReversePipe,
                skills_component_1.SkillsComponent,
                projects_component_1.ProjectComponent,
                experience_component_1.ExpComponent,
                contact_component_1.ContactComponent
            ],
            providers: [
                app_service_1.AppService
            ],
            bootstrap: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                education_component_1.EduComponent,
                skills_component_1.SkillsComponent,
                projects_component_1.ProjectComponent,
                experience_component_1.ExpComponent,
                contact_component_1.ContactComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map