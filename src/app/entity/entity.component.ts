import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {
  rowData: any;
  gridApi: any;
  rowSelection = 'single';
  gridColumnApi: any;
  selectedRows: string | any[];
  
  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.rowData = this.http.get('./assets/data.json');
  }
  columnDefs = [
        {headerName: 'Program',field: 'program', sortable: true, filter: true, checkboxSelection: true },
        {headerName: 'Branch',field: 'branch', sortable: true, filter: true },
        {headerName: 'Specialisation',field: 'specialisation', sortable: true, filter: true},
        {headerName: 'Semester',field: 'semester', sortable: true, filter: true },
        {headerName: 'Course',field: 'course', sortable: true, filter: true}
    ];

    

    onSelectionChanged(__event: any) {
      this.selectedRows = this.gridApi.getSelectedRows();
      document.querySelector('#selectedRows').innerHTML =
      this.selectedRows.length === 1 ? this.selectedRows[0].evaluate : '';
      let navigationExtras: NavigationExtras= {
    };
        this.router.navigate(['/third/entity/evaluation']); 
  }

    onGridReady(params: { api: any; columnApi: any; }) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
    }
  

}
