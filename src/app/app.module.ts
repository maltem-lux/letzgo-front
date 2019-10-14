import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material';
import 'hammerjs';
import {HomeComponent} from './components/home/home.component';
import {CharacterBasicInformationComponent} from './components/character-basic-information/character-basic-information.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard/:charId', component: DashboardComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    CharacterBasicInformationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
    HttpClientModule,
    BrowserAnimationsModule,
    MatTooltipModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
