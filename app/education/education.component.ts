import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';

@Component({
    selector: 'edu-module',
    templateUrl: 'app/education/education.component.html'
    
})

export class EduComponent implements OnInit {
    eduData :any[];
    eduDataHeader : string = "Education";

    constructor(private _appService: AppService) {
        
    }

    ngOnInit(): void {
        console.log('EDU_INIT');
        this._appService.getData("education")
                        .subscribe(data => {
                            this.eduData = data;
                            console.log(this.eduData);
                        });
        
    }
}