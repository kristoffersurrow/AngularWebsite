import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { UserComponent } from './user/user.component';
import { ProjectsComponent } from './projects/projects.component';
import { IndkoebComponent } from './indkoeb/indkoeb.component';
import { AngularComponent } from './angular/angular.component';
import { SmartpizzaComponent } from './smartpizza/smartpizza.component';
import { NettopComponent } from './nettop/nettop.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { SkillslistComponent } from './skillslist/skillslist.component';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  { path: 'projects', component: ProjectsComponent, canActivate:[AuthGuard], children: [
    { path: 'indkoeb', component: IndkoebComponent },
    { path: 'angular', component: AngularComponent },
    { path: 'smartpizza', component: SmartpizzaComponent },
    { path: 'nettop', component: NettopComponent },
    { path: 'shoppingcart', component: ShoppingcartComponent },
    { path: 'skillslist', component: SkillslistComponent }
  ]},
  { path: 'user', component: UserComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
