import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {
  @Input() selectedRows: any;
  arrCase: object[];
  data: any;
  gridApi: any;
  gridColumnApi: any;

  constructor() { }

  

  ngOnInit(): void {
   /* this.httpService.get('./assets/data.json').subscribe(
      data => {
      this.arrCase = data as object [];  // FILL THE ARRAY WITH DATA.
      console.log(this.arrCase);
      this.rowData = this.selectedRows["evaluate"];
    console.log(this.rowData);
      
      }
      );
      
    */
  }
  columnDefs = [
    {headerName: 'Program',field: 'program', sortable: true, filter: true, checkboxSelection: true },
    {headerName: 'Branch',field: 'branch', sortable: true, filter: true },
    {headerName: 'Specialisation',field: 'specialisation', sortable: true, filter: true},
    {headerName: 'Semester',field: 'semester', sortable: true, filter: true },
    {headerName: 'Course',field: 'course', sortable: true, filter: true}
];

    onGridReady(params: { api: any; columnApi: any; }) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
    }
}
