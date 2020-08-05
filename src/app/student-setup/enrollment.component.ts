import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { OnlyNumbersValidators } from 'src/app/common/only-numbers.validators';

@Component({
  selector: 'enrollmentff',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./student-setup.component.css']
})
export class EnrollmentComponent{
  @Input() enroll:FormGroup;
  clicked = false;

   formenroll=new FormGroup({
      enrollment:new FormControl('',[Validators.required,
                                    OnlyNumbersValidators.onlyNumber]),
   });
    get enrollment()
      {
        return this.formenroll.get('enrollment');
      }

}
