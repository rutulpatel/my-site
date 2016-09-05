import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/education/education.component.html'
})

export class EduComponent {
    education_data: any[] = [{
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