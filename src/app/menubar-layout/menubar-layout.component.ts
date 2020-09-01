import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menubar-layout',
  templateUrl: './menubar-layout.component.html',
  styleUrls: ['./menubar-layout.component.css']
})
export class MenubarLayoutComponent implements OnInit {

  isCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

}
