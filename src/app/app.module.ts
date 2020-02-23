import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PerformanceDashboardComponent } from './performance-dashboard/performance-dashboard.component';
import { WebsiteComponent } from './website/website.component';
import { StatusCockpitComponent } from './status-cockpit/status-cockpit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerformanceDashboardComponent,
    WebsiteComponent,
    StatusCockpitComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
