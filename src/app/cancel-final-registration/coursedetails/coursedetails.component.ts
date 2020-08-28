import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  programs = [
      {id:1, name: 'B.ED'},
      {id:2, name: 'B.Tech'},
      {id:3, name: 'B.Sc'},
      {id:4, name: 'Diploma'},
      {id:5, name: 'Law'},
  ];

  sessions= [
    {id:1, name: 2020},
    {id:2, name: 2019},
    {id:3, name: 2018},
    {id:4, name: 2017},
    {id:5, name: 2016},
  ]; 
    
  selected = [];
   
  getSelectedValue(){
    console.log(this.selected);
  }

  ngOnInit()  {}

 

}
