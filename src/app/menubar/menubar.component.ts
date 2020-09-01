import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
 
   
  
  constructor() { }


  ngOnInit(): void {
  }
  @Input() menus=[
    {
      name: 'Dashboard',
      url: '/dashboard',
      writeble: true,
    },
    {
      name: 'Dashboard',
      url: '/dashboard',
      writeble: true,
    },
    {
      name: 'Menu1',
      url: '/menu1',
      children: [
        {
          name: 'Item1.1',
          url: '/item/item1.1',
          writeble: true,
          children: [
            {
              name: 'Item1.1',
              url: '/item/item1.1',
              writeble: true,
            },
            {
              name: 'Item1.2',
              url: '/item/item1.2',
              writeble: true,
              children: [
                {
                  name: 'Item1.1',
                  url: '/item/item1.1',
                  writeble: true,
                },
                {
                  name: 'Item1.2',
                  url: '/item/item1.2',
                  writeble: true,
                }
              ]
            }
          ]
        },
        {
          name: 'Item1.2',
          url: '/item/item1.2',
          writeble: true,
        }
      ]
    },
    {
      name: 'Dashboard',
      url: '/dashboard',
      writeble: true,
    }
  ];

}
