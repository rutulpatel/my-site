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
var app_service_1 = require('./../app.service');
var ProjectComponent = (function () {
    function ProjectComponent(_appService) {
        this._appService = _appService;
        this.projectsDataHeader = "PROJECTS";
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('PROJECTS_INIT');
        this._appService.getData("projects")
            .subscribe(function (data) {
            _this.projectsData = data;
            console.log(_this.projectsData);
        });
    };
    ProjectComponent = __decorate([
        core_1.Component({
            selector: 'projects-module',
            templateUrl: 'app/projects/projects.component.html'
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService])
    ], ProjectComponent);
    return ProjectComponent;
}());
exports.ProjectComponent = ProjectComponent;
//# sourceMappingURL=projects.component.js.map