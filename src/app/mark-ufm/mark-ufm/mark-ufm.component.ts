import { Component,Input} from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { OnlyNumbersValidators } from 'src/app/common/only-numbers.validators';
import { Cancel }    from '../cancel';
import {  NgForm } from '@angular/forms';
import { SelectorFlags } from '@angular/compiler/src/core';
import { SelectorListContext } from '@angular/compiler';

@Component({
  selector: 'app-mark-ufm',
  templateUrl: './mark-ufm.component.html',
  styleUrls: ['./mark-ufm.component.css']
})
export class MarkUfmComponent {
  @Input() roll:FormGroup;
  clicked = false;

   formroll=new FormGroup({
    rollNumber:new FormControl('',[Validators.required,
                                    OnlyNumbersValidators.onlyNumber]),
   });
    get rollNumber()
      {
        return this.formroll.get('rollNumber');
      }

  
  dates = ['2019-07-01/2020-06-30',
           '2018-07-01/2019-06-30',
           '2017-07-01/2018-06-30',
           '2016-07-01/2017-06-30',
           '2015-07-01/2016-06-30'];
  

  semesters = ['1',
               '2',
               '3',
               '4',
               '5',
               '6',
               '7',
               '8',
               '9',
               '10'];

 issues = ['Revision',
           'Unfair Means',
           'Scrutiny',
           'Incomplete',
           'Discontinued'];


model = new Cancel(this.dates[0],this.semesters[0], this.issues[0],12345);

submitted = false;


onSubmit(cancelForm: NgForm) : void {
  console.log(cancelForm.value)
 
}


}



