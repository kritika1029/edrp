import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'award-blank',
  templateUrl: './award-blank.component.html',
  styleUrls: ['./award-blank.component.css']
})
export class AwardBlankComponent implements OnInit{

  selectedValue = 'yes';
  form: FormGroup;
  constructor(fb:FormBuilder)
  {
    this.form=fb.group({
      sessionAndEntity:fb.group({
        session:['',Validators.required],
        searchentity:['',Validators.required]
      }),
      column1:fb.group({
        entity:['',Validators.required],
        branch:['',Validators.required],
        semester:['',Validators.required]
      }),
      column2:fb.group({
        program:['',Validators.required],
        specialisation:['',Validators.required],
        coursecode:['',Validators.required],
        awardtype:['',Validators.required]
      }),
      fathername:[]
    })

  }
  ngOnInit(){
  }

  entities=[
    {"code":"foe","name":"Faculty of Engineering"},
    {"code":"foe","name":"Faculty of Education"},
    {"code":"foe","name":"Faculty of Science"},
    {"code":"foe","name":"Faculty of Social Science"}
  ];
  semester=["1","2","3","4","5","6","7","8","9","10","11","12"];

 selected=[];
  
  submit(form1: { value: any; })
  {
    console.log(form1.value);
  }


  
  
}
