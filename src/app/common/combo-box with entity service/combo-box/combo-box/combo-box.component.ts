// import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
// import {BrowserModule} from '@angular/platform-browser'
// import {FormsModule} from '@angular/forms'
// import { ComboBoxPipe } from '../combo-box.pipe';
// // import { entityListBean } from './bean/entityListBean';


// export enum KEY_CODE {
//   UP_ARROW = 38,
//   DOWN_ARROW = 40,
//   TAB_KEY = 9
//   }

// @Component({
//   selector: 'app-combo-box',
//   templateUrl: './combo-box.component.html',
//   styleUrls: ['./combo-box.component.css'],
//   providers: [ComboBoxPipe]
// })


// export class ComboBoxComponent implements OnInit {
//   @Input() dataList: [];
//   @Input() columnName1: string;
//   @Input() columnName2: string;
//   @Input() vHeight: number;
//   @Input() vWidth: number;

//   @Output() public valueChange: EventEmitter<string>= new EventEmitter();

//   textToSort: any;
//   dummyDataList: [];
//   showDropDown: boolean;
//   counter:number;
  
//   onFocusEventAction():void {
//   this.counter = -1;
//   }
  
//   onBlurEventAction(): void{
//   this.showDropDown = false;
//   }
  
//   onKeyDownAction(event: KeyboardEvent):void
//   {
//     this.showDropDown = true;
//     //console.log(this.dataList);
//     if (event.keyCode === KEY_CODE.UP_ARROW) 
//     {
//       this.counter = (this.counter === 0)?this.counter:--this.counter;
//       this.checkHighlight(this.counter);
//       this.textToSort = this.dummyDataList[this.counter][this.columnName1];
//       this.valueChange.emit(this.dummyDataList[this.counter][this.columnName2]);
//     }
//     if (event.keyCode === KEY_CODE.DOWN_ARROW) 
//     {
//       this.counter = (this.counter === this.dummyDataList.length-1)?this.counter:++this.counter;
//       this.checkHighlight(this.counter);
//       this.textToSort = this.dummyDataList[this.counter][this.columnName1];
//       this.valueChange.emit(this.dummyDataList[this.counter][this.columnName2]);
//     }
//   }
  
//   checkHighlight(currentItem):boolean
//   {
//     if(this.counter === currentItem) return true;
//     else return false;
//   }

//   constructor(private ComboBoxPipe: ComboBoxPipe) {
//       this.reset();
//   }
  
//   ngOnInit(){
//       this.reset();
//       this.textToSort = "";
//   }
  
//   toogleDropDown():void {
//       this.showDropDown = !this.showDropDown;
//       this.dummyDataList = this.dataList;
//   }

//   reset(): void{

//     this.showDropDown = false;
//     this.dummyDataList = this.dataList;
//   }
  
//   textChange(value){
//      this.dummyDataList = [];
//      if(value.length >0){
//       this.dummyDataList = this.ComboBoxPipe.transform(this.dataList,         
//                            this.columnName1, value);
//      if(this.dummyDataList){this.showDropDown = true;}
//      } else {
//        this.reset();
//      }
//   }
    
//   updateTextBox(valueSelected){
//        this.textToSort = valueSelected;
//        this.showDropDown = false;
//   }
  
//    setSelectedid(idselected)
//    {
//      this.valueChange.emit(idselected);
//    }
//   }

