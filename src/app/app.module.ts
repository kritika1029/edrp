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
import { MarkUfmComponent } from './mark-ufm/mark-ufm/mark-ufm.component';
import { EditNameInHindiComponent } from './edit-name-in-hindi (master)/edit-name-in-hindi/edit-name-in-hindi.component';
import { EditNameDataGridComponent } from './editname-datagrid/edit-name-data-grid/edit-name-data-grid.component';
import { RollnumberComponent } from './cancel-final-registration/rollnumber/rollnumber.component';
import { CoursedetailsComponent } from './cancel-final-registration/coursedetails/coursedetails.component';
import { StudentdetailsComponent } from './cancel-final-registration/studentdetails/studentdetails.component';
import { AcademicDetailsComponent } from './cancel-final-registration/studentdetails/academic-details/academic-details.component';
import { SemesterDetailsComponent } from './cancel-final-registration/studentdetails/semester-details/semester-details.component';
import { ComboBoxComponent } from './common/combo-box with entity service/combo-box/combo-box/combo-box.component';
// import { ServiceService } from './service/service.service';

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
    StemplateComponent,
    MarkUfmComponent,
    EditNameInHindiComponent,
    EditNameDataGridComponent,
    RollnumberComponent,
    CoursedetailsComponent,
    StudentdetailsComponent,
    AcademicDetailsComponent,
    SemesterDetailsComponent,
    ComboBoxComponent
    
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
            component:EntityComponent
          }          
        ]
      },
      {
        path:'forth',
        component:MarkUfmComponent
      },
      {
        path:'fivth',
        component:EditNameInHindiComponent,
        children:[
          {
            path:'editname-datagrid',
            component:EditNameDataGridComponent
          }
        ]
      },
      // {
      //       path:'editname-datagrid',
      //       component:EditNameDataGridComponent
      //     },

          {
            path:'sixth',
            component:RollnumberComponent,
            children:[
              {
                path:'coursedetails',
                component:CoursedetailsComponent,
                children:[
                  {
                    path:'studentdetails',
                    component:StudentdetailsComponent
                  }
                ]
              },
              
            ]
          },
         
           
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
