import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PerformanceDashboardComponent } from './performance-dashboard/performance-dashboard/performance-dashboard.component';
import { TestComponent } from './test/test.component';



const routes: Routes =  [
  { path: '', component: HomeComponent },
  {
    path: 'performance-dashboard',
    component: PerformanceDashboardComponent
  },
  {
    path: 'test',
    component: TestComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
