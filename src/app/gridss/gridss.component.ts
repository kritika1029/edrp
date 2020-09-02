import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gridss',
  templateUrl: './gridss.component.html',
  styleUrls: ['./gridss.component.css']
})
export class GridssComponent implements OnInit { 

  gridApi: any;
  rowSelection = 'single';
  gridColumnApi: any;
  selectedRows: string | any[];



  columnDefs = [
    {headerName: " ",checkboxSelection: true, resizable: true},
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
 constructor(private router: Router, private HttpService: HttpClient) {}

 ngOnInit (){
   this.rowData=this.HttpService.get('./assets/details.json')
 }


 onSelectionChanged($event) {
  var selectedRows = this.gridApi.getSelectedRows();
  document.querySelector('#selectedRows').innerHTML =
    selectedRows.length === 1 ? selectedRows[0].program : ' ';
    this.router.navigate(['mastercourseadd/data/adddrop'])
}

 onGridReady(params: { api: any; columnApi: any; }) {
   this.gridApi = params.api;
   this.gridColumnApi = params.columnApi;
 }


} 
   

