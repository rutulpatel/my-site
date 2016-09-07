import { OnInit, Component } from '@angular/core';
import { AppService } from './../app.service';

@Component({
    selector: 'skills-module',
    templateUrl: 'app/skills/skills.component.html'
})
export class SkillsComponent implements OnInit {
    
    skillsData: any[];
    skillsDataHeader: string = "SKILLS";
    constructor(private _appService: AppService){
        
    }

    ngOnInit(): void {
        console.log('SKILLS_INIT');
        this._appService.getData("skills")
                        .subscribe(data=> {
                            this.skillsData = data;
                            console.log(this.skillsData);
                        });
    }
}