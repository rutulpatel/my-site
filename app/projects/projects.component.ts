import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';

@Component({
    selector: 'projects-module',
    templateUrl: 'app/projects/projects.component.html'
})

export class ProjectComponent implements OnInit{

    projectsData: any[];
    projectsDataHeader: string = "PROJECTS";
    
    constructor(private _appService: AppService) {
        
    }

    ngOnInit(): void {
        console.log('PROJECTS_INIT');
        this._appService.getData("projects")
                        .subscribe(data => {
                            this.projectsData = data;
                            console.log(this.projectsData);
                        });
    }

}