import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stemplate',
  templateUrl: './stemplate.component.html',
  styleUrls: ['./stemplate.component.css']
})
export class StemplateComponent implements OnInit {
  gridApi: any;
  gridColumnApi: any;

  constructor() { }


  ngOnInit(): void {
  }
 
columnDefs = [
  {headerName: 'Component Name',field: 'component-name', sortable: true, filter: true},
  {headerName: 'Full Name',field: 'fullname', sortable: true, filter: true },
  {headerName: 'Group',field: 'group', sortable: true, filter: true},
  {headerName: 'Maximum Marks',field: 'mmarks', sortable: true, filter: true },
  {headerName: 'Rule',field: 'rule', sortable: true, filter: true}
];
rowData=[];
onGridReady(params: { api: any; columnApi: any; }) {
  this.gridApi = params.api;
  this.gridColumnApi = params.columnApi;
}

}
