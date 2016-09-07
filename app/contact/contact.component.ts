import { Component } from '@angular/core';
import { AppService } from './../app.service';


@Component({
    selector: 'contact-module',
    templateUrl: 'app/contact/contact.component.html'
})

export class ContactComponent {
    contactDataHeader: string = "Contact";
    email: string;
    overviewData: any[];

    constructor(private _appService: AppService) {
    }

    ngOnInit(): void {
        console.log('APP_INIT');
        this._appService.getData("overview")
                        .subscribe(data => {
                            this.overviewData = data[0];
                            this.email = this.overviewData["email"];
                            console.log(this.overviewData);
                        });
    }
}

