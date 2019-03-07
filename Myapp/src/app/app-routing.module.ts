import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {ThretreDetailsComponent} from './thretre-details/thretre-details.component';
import { SelectSeatsComponent } from './select-seats/select-seats.component';

const routes: Routes = [
  {path: 'home', component : HomepageComponent},
  {path: 'login', component : LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'moviedetails', component: MovieDetailsComponent},
  {path: 'selectseats', component: SelectSeatsComponent},
  {path: 'theatredetails', component: ThretreDetailsComponent},
  {path: '', redirectTo : '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

