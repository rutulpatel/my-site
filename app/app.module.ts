import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EduComponent } from './education/education.component';
import { AppService } from './app.service';
import { ReversePipe } from './reverse-filter.pipe';

@NgModule({
    imports: [ BrowserModule, HttpModule, JsonpModule ],
    declarations: [ AppComponent, HomeComponent, EduComponent, ReversePipe ],
    providers: [    AppService ],
    bootstrap: [ AppComponent, HomeComponent, EduComponent ]
})

export class AppModule {

}