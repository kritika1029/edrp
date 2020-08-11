import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
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
import { FinalregistrationComponent } from './finalregistration/finalregistration.component';
import { Finalreg2Component } from './finalreg2/finalreg2.component';
import { GriddataComponent } from './griddata/griddata.component';
import { AddComponent } from './add/add.component';
import { DropComponent } from './drop/drop.component';
import { CoursesaddComponent } from './coursesadd/coursesadd.component';
import { GridssComponent } from './gridss/gridss.component';
import { ImageuploadComponent } from './imageupload/imageupload.component';
import { DropadddetailComponent } from './dropadddetail/dropadddetail.component';
import { CommonModule } from "@angular/common";

import { SetupLayout } from './setup-layout/setup-layout.component';
import { HomeComponent } from 'src/app/home/home.component';
import { CourseEvaluationLayoutComponent } from './course-evaluation-layout/course-evaluation-layout.component';
<<<<<<< HEAD
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
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> bb3b28984be269182752496caffde5ea807fe576

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
<<<<<<< HEAD
    MarkUfmComponent,
    EditNameInHindiComponent,
    EditNameDataGridComponent,
    RollnumberComponent,
    CoursedetailsComponent,
    StudentdetailsComponent,
    AcademicDetailsComponent,
    SemesterDetailsComponent,
    ComboBoxComponent
=======
    ImageuploadComponent,
    FinalregistrationComponent,
    Finalreg2Component,
    GriddataComponent,
     CoursesaddComponent,
    GridssComponent,
    AddComponent,
    DropComponent,
    DropadddetailComponent,
    

>>>>>>> bb3b28984be269182752496caffde5ea807fe576
    
  ],
  imports: [
    BrowserModule,
    CommonModule ,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule,
    BrowserAnimationsModule,
    UploaderModule,
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
<<<<<<< HEAD
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
         
           
=======
      },         
          {
            path:'upload1',
            component:ImageuploadComponent
          },
          {
            path:'fregister',
            component:FinalregistrationComponent,
            children:[
          {path: 'registration', component: Finalreg2Component},
          {path: 'registration', component: GriddataComponent}
        
        ]
      },
      {
        path:'mastercourseadd',
        component:CoursesaddComponent,
        children:[
      {path: 'data' ,component: GridssComponent  },
      {path: 'add/drop' ,component: DropComponent  },
      {path: 'add/drop' ,component: AddComponent  },
      {path: 'selected' ,component: DropadddetailComponent  }

        ]}
>>>>>>> bb3b28984be269182752496caffde5ea807fe576
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
