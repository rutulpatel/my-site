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
var EduComponent = (function () {
    function EduComponent() {
        this.education_data = [{
                "education": [{
                        id: 1,
                        schoolName: "DeVry University",
                        fieldOfStudy: "Computer Engineering Technology",
                        startDate: "06-01-2011",
                        endDate: "07-28-2014",
                        degree: "Bachelor's Degree",
                        activities: "Developed OneZ project in senior year.",
                        notes: "Pursued Computer Engineering Technology at DeVry University. Learnt a lot about the field and other relevant academic courses.",
                        gpa: "3.95"
                    }]
            }];
    }
    EduComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/education/education.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], EduComponent);
    return EduComponent;
}());
exports.EduComponent = EduComponent;
//# sourceMappingURL=education.component.js.map