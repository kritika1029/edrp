import { Component, OnInit, ViewChild} from '@angular/core';





@Component({
  selector: 'app-finalreg2',
  templateUrl: './finalreg2.component.html',
  styleUrls: ['./finalreg2.component.css']
})
export class Finalreg2Component  {

   
  ccontactMethod = [
    {id:1, name: '2017-2018'},
    {id:2, name: '2018-2019'},
    {id:3, name: '2019-2020'},
    {id:4, name: '2020-2021'}
  ];

  entitynames = [
    {id:1, name: 'Faculty of Education'},
    {id:2, name: 'Amlapuram Dec'},
    {id:3, name: 'Madurai Dec'},
    {id:4, name: 'D.E.I Prem Vidyalaya'}
  ];

 
 entities=[];




  goBack() {
   window.history.back();
 }
  
}
