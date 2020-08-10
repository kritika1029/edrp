import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'bootstrap-finalregistration',
  templateUrl: './finalregistration.component.html',
  styleUrls: ['./finalregistration.component.css']
})
export class FinalregistrationComponent  {

  ccontactMethod = [
    {id:1, name: '2017-2018'},
    {id:2, name: '2018-2019'},
    {id:3, name: '2019-2020'},
    {id:4, name: '2020-2021'}
  ];

}
