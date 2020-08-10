import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gridss',
  templateUrl: './gridss.component.html',
  styleUrls: ['./gridss.component.css']
})
export class GridssComponent implements OnInit { 
  columnDefs = [
    {headerName: " ",checkboxSelection: true , resizable: true},
    {headerName: 'Faculty/Department', field: 'fd',resizable: true,  filter: true },
    {headerName: 'Program', field: 'pro' , resizable: true, filter: true },
    {headerName: 'Branch', field: 'br', resizable: true, filter: true },
    {headerName: 'Specialization', field: 'sp', resizable: true, filter: true },
    {headerName: 'Semester', field: 'sem', resizable: true, filter: true },
    {headerName: 'Session', field: 'se', resizable: true, filter: true },
    {headerName: 'Status', field: 'stat', resizable: true, filter: true },
    {headerName: 'Allowed Add/Drop', field: 'ad', resizable: true, filter: true }
];
rowData: any;
 constructor(private HttpService: HttpClient) {}

 ngOnInit (){
   this.rowData=this.HttpService.get('./assets/details.json')
 }

}
