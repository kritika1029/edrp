import { StemplateComponent } from './stemplate/stemplate.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { EntityComponent } from './entity/entity.component';
import { SecondComponent } from './first/second.component';
import { RouterModule } from '@angular/router';
import { EnrollmentComponent } from './student-setup/enrollment.component';
import { ContactComponent } from './personal-details/contact.component';
import { Setup2Component } from './student-setup/setup2.component';
import { TwoComponent } from './two.component';
import { OneComponent } from './one.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentSetupComponent } from './student-setup/student-setup.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { FirstComponent } from './first/first.component';
import { AwardBlankComponent } from './award-blank/award-blank.component';
import { ThirdComponent } from './third/third.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    StudentSetupComponent,
    Setup2Component,
    PersonalDetailsComponent,
    ContactComponent,
    EnrollmentComponent,
    FirstComponent,
    SecondComponent,
    AwardBlankComponent,
    ThirdComponent,
    EntityComponent,
    EvaluationComponent,
    StemplateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot([
      {
        path:'', redirectTo:'/home', pathMatch:'full'
      },
      {
        path:'first',
        component:FirstComponent,
        children:[
          {
            path:'form',
            component:StudentSetupComponent
          }
        ]
      },
      {
        path:'home',
        component:SecondComponent
      },
      {
        path:'second',
        component:AwardBlankComponent
      },
      {
        path:'third',
        component:ThirdComponent,
        children:[
          {
            path:'select-template',
            component:StemplateComponent
          },
          {
            path:'entity',
            component:EntityComponent
          }          
        ]
      }

       
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
