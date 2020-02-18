import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PerformanceDashboardComponent } from './performance-dashboard/performance-dashboard.component';
import { WebsiteComponent } from './website/website.component';



const routes: Routes =  [
  { path: '', component: HomeComponent },
  {
    path: 'website',
    component: WebsiteComponent
  },
  {
    path: 'performance-dashboard',
    component: PerformanceDashboardComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
