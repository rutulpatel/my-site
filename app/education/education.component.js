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
var EduComponent = (function () {
    function EduComponent(_appService) {
        this._appService = _appService;
        this.eduDataType = "Education";
    }
    EduComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('EDU_INIT');
        this._appService.getData("education")
            .subscribe(function (data) {
            _this.eduData = data;
            console.log(_this.eduData);
        });
    };
    EduComponent = __decorate([
        core_1.Component({
            selector: 'edu-module',
            templateUrl: 'app/education/education.component.html'
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService])
    ], EduComponent);
    return EduComponent;
}());
exports.EduComponent = EduComponent;
//# sourceMappingURL=education.component.js.map