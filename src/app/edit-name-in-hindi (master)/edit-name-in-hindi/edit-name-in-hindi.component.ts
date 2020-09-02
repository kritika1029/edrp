import { Component, EventEmitter } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { entityListBean } from 'src/app/bean/entityListBean';
import { programListBean } from 'src/app/bean/programListBean';
import { ServiceService } from 'src/app/service/service.service';
// import {TranslateService} from '@ngx-translate/core';



@Component({
  selector: 'app-edit-name-in-hindi',
  templateUrl: './edit-name-in-hindi.component.html',
  styleUrls: ['./edit-name-in-hindi.component.css']
})
export class EditNameInHindiComponent {

  public session: Object[];
  public program: Object[];
  public specialization: Object[];
  public entity: Object[];
  public branch: Object[];
  public semester: Object[];
//   textToSort: any;
  // public entity: entityListBean[];
  public dataList: entityListBean[];
//   semList: any;
//   sessionList: any;
//   dummyDataList: any;
//   showDropDown: boolean;
//   selectedEntity: string= "";
  selectedEntityId: string= "";
  selectedProgramId: string= "";
//   selectedBrId: string="";
//   selectedSpId: string="";
//   selectedSemCode: string= "";
//   selectedSessionYr: string = "";
  prgBrSpList: programListBean[] =[];
  prgList: programListBean[] = [];
  brList: programListBean[] = [];
  spList: programListBean[] = [];
//   courseObject: any;
  valA="";
  valB="";

specializations= [
  {id:1, name: 'None'},
  {id:2, name: 'CS'},
  {id:3, name: 'Electronics'},
  {id:4, name: 'Core'},
  {id:5, name: 'Designs'},
  ];

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

entities= [
  {id:1, name: 'FACULTY OF ARTS'},
  {id:2, name: 'FACULTY OF ENGINEERING'},
  {id:3, name: 'FACULTY OF EDUCATION'},
  {id:4, name: 'FACULTY OF SCIENCE'},
  {id:5, name: 'FACULTY OF SOCIAL SCIENCE'},
];

branches= [
  {id:1, name: 'Civil'},
  {id:2, name: 'Electrical'},
  {id:3, name: 'Footwear'},
  {id:4, name: 'Mechanical'},
  {id:5, name: 'None'},
];

semesters= [
  {id:1, name: 'SM1'},
  {id:2, name: 'SM2'},
  {id:3, name: 'SM3'},
  {id:4, name: 'SM4'},
  {id:5, name: 'SM5'},
];
  
selected=[];
  
  
constructor(private myService:ServiceService) {

    // this.dataList = [
    //   { "entity_name": "FACULTY OF ARTS", "entity_id": "00010001" },
    //   { "entity_name": "FACULTY OF EDUCATION", "entity_id": "00010003" },
    //   { "entity_name": "FACULTY OF SCIENCE", "entity_id": "00010018" },
    // ]; 
//     this.sessionList = [
//       { "sessionYr": "2020-2021", "sessionfrom": "2020"},
//       { "sessionYr": "2019-2020", "sessionfrom": "2019"},
//     ];

//     this.semList = [
//       { "semester": "SM1", "sem_code": "SM1"},
//       { "semester": "SM2", "sem_code": "SM2"},
//       { "semester": "SM3", "sem_code": "SM3"},
//       { "semester": "SM4", "sem_code": "SM4"},
//       { "semester": "SM5", "sem_code": "SM5"},
//       { "semester": "SM6", "sem_code": "SM6"},
//       { "semester": "SM7", "sem_code": "SM7"},
//       { "semester": "SM8", "sem_code": "SM8"},
//       { "semester": "SM9", "sem_code": "SM9"},
//       { "semester": "SM10", "sem_code": "SM10"},
//       { "semester": "SM11", "sem_code": "SM11"},
//       { "semester": "SM12", "sem_code": "SM12"},
//     ];


    this.myService.getEntities().subscribe
      ( response => 
        {
          this.entity =Array.from(Object.keys(response), k=>response[k]);
          console.log(1);
          console.log(this.entity);
          
          
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

      this.entity=this.dataList;
      console.log("this.entitylist"+ this.entity);
  
  }   

  getSelectedEntityId(valueSelected){
    this.selectedEntityId = valueSelected;
    // console.log('selectedId=' + valueSelected);
    this.loadProgramCombo(this.selectedEntityId);
  }

//   getSelectedSem(valueSelected){
//     this.selectedSemCode = valueSelected;
//    // console.log('selectedSem=' + valueSelected);
//   }
  
//   getSelectedSession(valueSelected){
//     this.selectedSessionYr = valueSelected;
//     //console.log('selectedSession=' + valueSelected);
//   }

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
      console.log(this.prgBrSpList);
    
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
   console.log('selectedId=' + valueSelected);
    // this.loadBranchCombo(this.selectedProgramId);
  }
  
  // loadBranchCombo(programId)
  // {
  //   this.brList=[];
  //   for(var i =0; i<this.prgBrSpList.length; ++i)
  //     { 
  //       if (programId == this.prgBrSpList[i]["program_id"])
  //       {
  //         this.brList.push(this.prgBrSpList[i]);
  //       }
  //     }
  // }

//   getSelectedBranch(valueSelected){
//     this.selectedBrId = valueSelected;
//     this.loadSplCombo(this.selectedProgramId, this.selectedBrId);
//   }
  
//   loadSplCombo(programId, branchId)
//   {
//     this.spList=[];
//     for(var i =0; i<this.prgBrSpList.length; ++i)
//       { 
//         if (programId == this.prgBrSpList[i]["program_id"]
//         && branchId == this.prgBrSpList[i]["branch_id"])
//         {
//           this.spList.push(this.prgBrSpList[i]);
//         }
//       }
//   }

//   getSelectedSp(valueSelected){
//     this.selectedSpId = valueSelected;
//   }
// }





  
  // public session: Object[];
  // public program: Object[];
  // public specialization: Object[];
  // public entity: Object[];
  // public branch: Object[];
  // public semester: Object[];
  

  ngOnInit() {

    
        this.session= [
          {id:1, name: 2020},
          {id:2, name: 2019},
          {id:3, name: 2018},
          {id:4, name: 2017},
          {id:5, name: 2016},
        ];

        this.program= [
          {id:1, name: 'B.ED.'},
          {id:2, name: 'B.Tech'},
          {id:3, name: 'B.Sc'},
          {id:4, name: 'Diploma'},
          {id:5, name: 'Law'},
        ];

        // this.specialization= [
        //   {id:1, name: 'None'},
        //   {id:2, name: 'CS'},
        //   {id:3, name: 'Electronics'},
        //   {id:4, name: 'Core'},
        //   {id:5, name: 'Designs'},
        // ];

        // 
        // console.log( " 2 nginit");
        // this.entity= this.dataList;
        // console.log("this.entity"+ this.entity);
       

        // this.entity= [
        //   {id:1, name: 'FACULTY OF ARTS'},
        //   {id:2, name: 'FACULTY OF ENGINEERING'},
        //   {id:3, name: 'FACULTY OF EDUCATION'},
        //   {id:4, name: 'FACULTY OF SCIENCE'},
        //   {id:5, name: 'FACULTY OF SOCIAL SCIENCE'},
        // ];

        this.branch= [
          {id:1, name: 'Civil'},
          {id:2, name: 'Electrical'},
          {id:3, name: 'Footwear'},
          {id:4, name: 'Mechanical'},
          {id:5, name: 'None'},
        ];

        this.semester= [
          {id:1, name: 'SM1'},
          {id:2, name: 'SM2'},
          {id:3, name: 'SM3'},
          {id:4, name: 'SM4'},
          {id:5, name: 'SM5'},
        ];
      }
    onSubmit(detailsForm: NgForm) : void {
      console.log(detailsForm.value)
     
     }
 
     }


  

