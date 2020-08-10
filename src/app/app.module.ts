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
import { UploaderModule  } from '@syncfusion/ej2-angular-inputs';
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
    StemplateComponent,
    ImageuploadComponent,
    FinalregistrationComponent,
    Finalreg2Component,
    GriddataComponent,
     CoursesaddComponent,
    GridssComponent,
    AddComponent,
    DropComponent,
    DropadddetailComponent,
    

    
  ],
  imports: [
    BrowserModule,
    CommonModule ,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UploaderModule,
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
          }    ]},
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
       
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
