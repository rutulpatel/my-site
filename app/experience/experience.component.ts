import { OnInit, Component } from '@angular/core';
import { AppService } from './../app.service';

@Component({
    selector: 'exp-module',
    templateUrl : `app/experience/experience.component.html`  
})

export class ExpComponent implements OnInit{
    
    expData: any[];
    expDataHeader: string = "Experience";

    constructor(private _appService: AppService){
        
    }
    ngOnInit(): void {
        console.log('EXP_INIT');
        this._appService.getData('experience')
                        .subscribe(data => {
                            this.expData = data;
                            console.log(this.expData);
                        });
    }
}