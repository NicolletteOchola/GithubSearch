import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RepositoryComponent } from './repository/repository.component';


const routes: Routes = [
  { path: 'repository', component: RepositoryComponent },
  { path: 'users', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
