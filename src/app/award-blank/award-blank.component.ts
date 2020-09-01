import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { programListBean } from '../bean/programListBean';
import { entityListBean } from '../bean/entityListBean';

@Component({
  selector: 'award-blank',
  templateUrl: './award-blank.component.html',
  styleUrls: ['./award-blank.component.css']
})
export class AwardBlankComponent implements OnInit{

  selectedValue = 'yes';
  form: FormGroup;
  constructor(fb:FormBuilder,private myService:ServiceService)
  {
    this.form=fb.group({
      
        session:['',Validators.required],
        entity:[null,Validators.required],
        branch:[null,Validators.required],
        semester:['',Validators.required],      
        program:[null,Validators.required],
        specialisation:[null,Validators.required],
        coursecode:[null,Validators.required],
        awardtype:[null,Validators.required],      
        fathername:[]
    })

    this.myService.getEntities().subscribe
       ( response => 
         {
           this.dataList =Array.from(Object.keys(response), k=>response[k]);
           //console.log(this.dataList);
         },
         (error:Response) =>   
         {
               if(error.status===404)
               {
                    alert ('No data found.');
               }
               else
               {
                   alert ('An unexpected error occured.');
                   console.log(error);
               }
          }
       )
  }
  ngOnInit(){
  }
  textToSort: any;
  dataList: entityListBean[];
  semList: any;
  sessionList: any;
  showDropDown: boolean;
  selectedEntity: string= "";
  selectedEntityId: string= "";
  selectedProgramId: string= "";
  selectedBrId: string="";
  selectedSpId: string="";
  selectedSemCode: string= "";
  selectedSessionYr: string = "";
  prgBrSpList: programListBean[] =[];
  prgList: programListBean[] = [];
  brList: programListBean[] = [];
  spList: programListBean[] = [];
  courseObject: any;
  valA="";
  valB="";

  entities=[
    {"code":"foe","name":"Faculty of Engineering"},
    {"code":"foe","name":"Faculty of Education"},
    {"code":"foe","name":"Faculty of Science"},
    {"code":"foe","name":"Faculty of Social Science"}
  ];
  semester=["1","2","3","4","5","6","7","8","9","10","11","12"];

 entity=[];

  
  submit(form1: { value: any; })
  {
    console.log(form1.value);
  }
  
    
   getSelectedEntityId(valueSelected){
     this.selectedEntityId = valueSelected;
     //console.log('selectedId=' + valueSelected);
     this.loadProgramCombo(this.selectedEntityId);
   }
 
   getSelectedSem(valueSelected){
     this.selectedSemCode = valueSelected;
    // console.log('selectedSem=' + valueSelected);
   }
   
   getSelectedSession(valueSelected){
     this.selectedSessionYr = valueSelected;
     //console.log('selectedSession=' + valueSelected);
   }
 
   loadProgramCombo(entity)
   {
     this.selectedProgramId ="";
     var prgid: string = "";
     var brid: String ="";
     var spid: String="";
     this.prgList = [];
     this.brList = [];
     this.spList = [];
     sessionStorage.setItem('entity_id', entity);
     this.valA=entity;
     this.myService.getProgramBrSp(entity).subscribe
     (
       (data) => {
       this.prgBrSpList = Array.from(Object.keys(data), k=>data[k]);
       //console.log(this.prgBrSpList);
     
       for(var i =0; i<this.prgBrSpList.length; ++i)
       { 
         if (prgid != this.prgBrSpList[i]["program_id"])
         {
           this.prgList.push(this.prgBrSpList[i]);
         }
         prgid=String(this.prgBrSpList[i]["program_id"]);
       } 
     
      });
   }
   
   getSelectedProgramId(valueSelected){
     this.selectedProgramId = valueSelected;
    // console.log('selectedId=' + valueSelected);
     this.loadBranchCombo(this.selectedProgramId);
   }
   
   loadBranchCombo(programId)
   {
     this.brList=[];
     for(var i =0; i<this.prgBrSpList.length; ++i)
       { 
         if (programId == this.prgBrSpList[i]["program_id"])
         {
           this.brList.push(this.prgBrSpList[i]);
         }
       }
   }
 
   getSelectedBranch(valueSelected){
     this.selectedBrId = valueSelected;
     this.loadSplCombo(this.selectedProgramId, this.selectedBrId);
   }
   
   loadSplCombo(programId, branchId)
   {
     this.spList=[];
     for(var i =0; i<this.prgBrSpList.length; ++i)
       { 
         if (programId == this.prgBrSpList[i]["program_id"]
         && branchId == this.prgBrSpList[i]["branch_id"])
         {
           this.spList.push(this.prgBrSpList[i]);
         }
       }
   }
 
   getSelectedSp(valueSelected){
     this.selectedSpId = valueSelected;
   }
}
