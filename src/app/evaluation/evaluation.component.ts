import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {
  rowData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.rowData = this.http.get('');
  }
  columnDefs = [
        {headerName: 'Component Name',field: 'cname', sortable: true, filter: true},
        {headerName: 'Short Name',field: 'sname', sortable: true, filter: true },
        {headerName: 'Rule',field: 'rule', sortable: true, filter: true},
        {headerName: 'Maximum Marks',field: 'mm', sortable: true, filter: true },
        {headerName: 'Total Component Marks',field: 'tcmarks', sortable: true, filter: true},
        {headerName: 'Order in Marks',field: 'order', sortable: true, filter: true}
    ];


}
