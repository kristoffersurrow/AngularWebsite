import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularFontAwesomeModule} from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ProjectsComponent } from './projects/projects.component';
import { IndkoebComponent } from './indkoeb/indkoeb.component';
import { AngularComponent } from './angular/angular.component';
import { SmartpizzaComponent } from './smartpizza/smartpizza.component';
import { NettopComponent } from './nettop/nettop.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { SkillslistComponent } from './skillslist/skillslist.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { MyprojectsComponent } from './myprojects/myprojects.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { FrontComponent } from './front/front.component';
import { WorkwithmeComponent } from './workwithme/workwithme.component'


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    ProjectsComponent,
    IndkoebComponent,
    AngularComponent,
    SmartpizzaComponent,
    NettopComponent,
    ShoppingcartComponent,
    SkillslistComponent,
    AboutComponent,
    SkillsComponent,
    MyprojectsComponent,
    FooterComponent,
    ContactComponent,
    FrontComponent,
    WorkwithmeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    AngularFontAwesomeModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
