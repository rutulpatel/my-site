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
var SkillsComponent = (function () {
    function SkillsComponent(_appService) {
        this._appService = _appService;
        this.skillsDataHeader = "SKILLS";
    }
    SkillsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('SKILLS_INIT');
        this._appService.getData("skills")
            .subscribe(function (data) {
            _this.skillsData = data;
            console.log(_this.skillsData);
        });
    };
    SkillsComponent = __decorate([
        core_1.Component({
            selector: 'skills-module',
            templateUrl: 'app/skills/skills.component.html'
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService])
    ], SkillsComponent);
    return SkillsComponent;
}());
exports.SkillsComponent = SkillsComponent;
//# sourceMappingURL=skills.component.js.map