import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  public program: Object[];
  public session: Object[];
  // constructor() { }

  ngOnInit()  {

    this.program= [
      {id:1, name: 'B.ED.'},
      {id:2, name: ''},
      {id:3, name: ''},
      {id:4, name: ''},
      {id:5, name: ''},
       ];

    this.session= [
        {id:1, name: 2020},
        {id:2, name: 2019},
        {id:3, name: 2018},
        {id:4, name: 2017},
        {id:5, name: 2016},
      ]; 
  }

 

}
