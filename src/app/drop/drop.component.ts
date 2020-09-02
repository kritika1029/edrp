import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css']
})
export class DropComponent implements OnInit {

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


 onRowSelected(event) {
  window.alert(
    'row ' + event.node.data.cname + ' selected = ' + event.node.selected
  );
}

onSelectionChanged(event) {
  var rowCount = event.api.getSelectedNodes().length;
  window.alert('selection changed, ' + rowCount + ' rows selected');
}


 ngOnInit (){
   this.rowData=this.HttpService.get('./assets/drop.json')
 }

 onSelect(){}

}
