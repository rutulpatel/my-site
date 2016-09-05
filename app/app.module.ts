import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { appRoutingProviders, routing } from './app.routing';
import { EduComponent } from './education/education.component';

@NgModule({
    imports: [ BrowserModule, routing ],
    declarations: [ AppComponent, HomeComponent, EduComponent ],
    providers: [ appRoutingProviders ],
    bootstrap: [ AppComponent ]
})

export class AppModule {

}