import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Input , OnInit} from '@angular/core';

@Component({
  selector: 'setup2',
  templateUrl: './setup2.component.html',
  styleUrls: ['./student-setup.component.css']
})
export class Setup2Component implements OnInit{
  @Input() formsetup:FormGroup;
  
  ngOnInit()
  {
    
  }
  session=['2012-13',
            '2013-14',
            '2014-15',
            '2015-16',
            '2016-17',
            '2017-18',
            '2018-19',
            '2019-20',
            '2020-21'];  
  entity=['DEI REI INTERN']               

}