import { NgSelectModule } from '@ng-select/ng-select';
import { StemplateComponent } from './stemplate/stemplate.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { EntityComponent } from './entity/entity.component';
import { RouterModule } from '@angular/router';
import { EnrollmentComponent } from './student-setup/enrollment.component';
import { ContactComponent } from './personal-details/contact.component';
import { Setup2Component } from './student-setup/setup2.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentSetupComponent } from './student-setup/student-setup.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { AwardBlankComponent } from './award-blank/award-blank.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { SetupLayout } from './setup-layout/setup-layout.component';
import { HomeComponent } from 'src/app/home/home.component';
import { CourseEvaluationLayoutComponent } from './course-evaluation-layout/course-evaluation-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    StudentSetupComponent,
    Setup2Component,
    PersonalDetailsComponent,
    ContactComponent,
    EnrollmentComponent,
    SetupLayout,
    HomeComponent,
    AwardBlankComponent,
    CourseEvaluationLayoutComponent,
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
    NgSelectModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot([
      {
        path:'', redirectTo:'/home', pathMatch:'full'
      },
      {
        path:'first',
        component:SetupLayout,
        children:[
          {
            path:'form',
            component:StudentSetupComponent
          }
        ]
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'second',
        component:AwardBlankComponent
      },
      {
        path:'third',
        component:CourseEvaluationLayoutComponent,
        children:[
          {
            path:'select-template',
            component:StemplateComponent
          },
          {
            path:'entity',
            component:EntityComponent,
            children:[
              {
                path:'evaluation',
                component:EvaluationComponent
              }
            ]
          }          
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
