import { Component } from '@angular/core';
import { AppService } from './../app.service';

@Component ({
    selector: 'home-module',
    templateUrl: 'app/home/home.component.html'
})

export class HomeComponent {
    firstName: string;
    lastName: string;
    tagLine: string;
    overviewData: any[];

    constructor(private _appService: AppService) {
        
    }

    ngOnInit(): void {
        console.log('APP_INIT');
        this._appService.getData("overview")
                        .subscribe(data => {
                            this.overviewData = data[0];
                            this.firstName = this.overviewData["firstName"];
                            this.lastName = this.overviewData["lastName"];
                            this.tagLine = this.overviewData["tagLine"];
                            console.log(this.overviewData);
                        });
    }

}