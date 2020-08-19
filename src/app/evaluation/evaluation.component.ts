import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {
  @Input() selectedRows: any;
  rowData : object [];
  httpService: any;
  arrCase: object[];
  data: any;

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
   this.rowData=history.state.selectedRows;
   
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
