import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupLayout } from './setup-layout/setup-layout.component';
import { StudentSetupComponent } from './student-setup/student-setup.component';
import { HomeComponent } from './home/home.component';
import { AwardBlankComponent } from './award-blank/award-blank.component';
import { CourseEvaluationLayoutComponent } from './course-evaluation-layout/course-evaluation-layout.component';
import { StemplateComponent } from './stemplate/stemplate.component';
import { EntityComponent } from './entity/entity.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { MarkUfmComponent } from './mark-ufm/mark-ufm/mark-ufm.component';
import { EditNameInHindiComponent } from './edit-name-in-hindi (master)/edit-name-in-hindi/edit-name-in-hindi.component';
import { EditNameDataGridComponent } from './editname-datagrid/edit-name-data-grid/edit-name-data-grid.component';
import { RollnumberComponent } from './cancel-final-registration/rollnumber/rollnumber.component';
import { CoursedetailsComponent } from './cancel-final-registration/coursedetails/coursedetails.component';
import { StudentdetailsComponent } from './cancel-final-registration/studentdetails/studentdetails.component';
import { ImageuploadComponent } from './imageupload/imageupload.component';
import { FinalregistrationComponent } from './finalregistration/finalregistration.component';
import { Finalreg2Component } from './finalreg2/finalreg2.component';
import { GriddataComponent } from './griddata/griddata.component';
import { CoursesaddComponent } from './coursesadd/coursesadd.component';
import { GridssComponent } from './gridss/gridss.component';
import { DropComponent } from './drop/drop.component';
import { AddComponent } from './add/add.component';
import { DropadddetailComponent } from './dropadddetail/dropadddetail.component';


const routes: Routes = [
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
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
