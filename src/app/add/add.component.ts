import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  columnDefs = [
    {headerName: " ",checkboxSelection: true},
    {headerName: 'Course Code', field: 'ccode',resizable: true,  filter: true },
    {headerName: 'Course Name', field: 'cname' , resizable: true, filter: true },
    {headerName: 'Credits', field: 'cred', resizable: true, filter: true },
    {headerName: 'Classification', field: 'classi', resizable: true, filter: true },
    {headerName: 'Course Type', field: 'typ', resizable: true, filter: true },
    {headerName: 'Course Category', field: 'cat', resizable: true, filter: true }
    
];
rowData: any;
 constructor(private HttpService: HttpClient) {}

 ngOnInit (){
   this.rowData=this.HttpService.get('./assets/addcourse.json')
 }


}
