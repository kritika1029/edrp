import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-edit-name-data-grid',
  templateUrl: './edit-name-data-grid.component.html',
  styleUrls: ['./edit-name-data-grid.component.css']
})
export class EditNameDataGridComponent implements OnInit {

  rowData:any;
  constructor(private http:HttpClient) { }
  

  ngOnInit(): void {
    this.rowData = this.http.get('./assets/editnameGridData.json');
  }

  columnDefs = [
    {headerName: 'Enrollment Number', field: 'emrollmentnumber',sortable:true,filter:true,editable:true },
    {headerName: 'Student Name in English', field: 'studentNameinEnglish',sortable:true,filter:true,editable:true }, 
    {headerName: 'Father Name in English', field: 'fatherNameinEnglish',sortable:true,filter:true,editable:true },
    {headerName: 'Mother Name in English', field: 'motherNameinEnglish',sortable:true,filter:true,editable:true },
    {headerName: 'Student Name in Hindi', field: 'studentNameinHindi',sortable:true,filter:true,editable:true },
    {headerName: 'Father Name in Hindi', field: 'fatherNameinHindi',sortable:true,filter:true,editable:true },
    {headerName: 'Mother Name in Hindi', field: 'motherNameinHindi',sortable:true,filter:true,editable:true },
];



}
