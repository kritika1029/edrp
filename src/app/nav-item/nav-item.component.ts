import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {
  isCollapsed = true;
  
  menus=[
    {
      name: 'Dashboard',
      url: '/dashboard',
      writeble: true,
      icon: 'icon-speedometer'
    },
    {
      name: 'Menu1',
      url: '/menu1',
      writeble: true,
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Item1.1',
          url: '/item/item1.1',
          writeble: true,
          icon: 'icon-puzzle'
        },
        {
          name: 'Item1.2',
          url: '/item/item1.2',
          writeble: true,
          icon: 'icon-puzzle'
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
