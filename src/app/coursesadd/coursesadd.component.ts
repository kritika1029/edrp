import { Component, Input  } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { OnlyNumbersValidators } from 'src/app/common/only-numbers.validators';

@Component({
  selector: 'app-coursesadd',
  templateUrl: './coursesadd.component.html',
  styleUrls: ['./coursesadd.component.css']
})
export class CoursesaddComponent {

  formenroll=new FormGroup({
    enrollment:new FormControl('',[Validators.required,
                                  OnlyNumbersValidators.onlyNumber]),
 });
  
 get enrollment()
 {
   return this.formenroll.get('enrollment');
 }

  }

  


