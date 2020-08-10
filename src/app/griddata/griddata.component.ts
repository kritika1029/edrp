import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-griddata',
  templateUrl: './griddata.component.html',
  styleUrls: ['./griddata.component.css']
})
export class GriddataComponent implements OnInit {
  columnDefs = [
    {headerName: 'Program Name', field: 'programName', resizable: true ,filter: true },
    {headerName: 'Branch Name', field: 'branchName',resizable: true ,filter: true },
    {headerName: 'Specialization Name', field: 'specializationName',resizable: true ,filter: true},
    {headerName: 'Semester', field: 'sem',resizable: true ,filter: true},
    {headerName: 'Semester Start', field: 'sems',resizable: true ,filter: true},
    {headerName: 'Semester End', field: 'seme',resizable: true ,filter: true},
    {headerName: '  ', field:'ic',resizable:true, editable: true, icons: {
      menu: '<i class="fa fa-bars"/>'}}
   
  
  ];
  
  rowData: any;
  
  constructor(private httpService: HttpClient) {}
  
  ngOnInit() {
  this.rowData = this.httpService.get('./assets/dataa.json')
  
  }
}