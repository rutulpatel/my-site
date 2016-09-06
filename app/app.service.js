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
var http_1 = require('@angular/http');
var observable_1 = require('rxjs/observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var AppService = (function () {
    function AppService(_http) {
        this._http = _http;
        this._resumeUrl = 'resume.json';
    }
    AppService.prototype.getAllData = function () {
        return this._http.get(this._resumeUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    AppService.prototype.getData = function (mod) {
        return this.getAllData()
            .map(function (res) { return res[mod]; });
    };
    AppService.prototype.handleError = function (error) {
        console.error(error);
        return observable_1.Observable.throw(error.json().error || 'Server error');
    };
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map