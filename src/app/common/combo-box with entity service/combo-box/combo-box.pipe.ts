
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'combo-box-filter'
})
export class ComboBoxPipe implements PipeTransform{
  transform(dataToFilter: [], columnNameToFilter:string, stringToSearch: string){
    let filteredData:[];
    filteredData = [];
    let searchStr:String = "";
    stringToSearch = stringToSearch.toLowerCase();
    //console.log(dataToFilter.length + "columnNameToFilter= " + columnNameToFilter + " stringToSearch=" + stringToSearch);
    for(var i =0; i<dataToFilter.length; ++i){
      searchStr=String(dataToFilter[i][columnNameToFilter]);
      searchStr = searchStr.toLowerCase();
      if(searchStr.search(stringToSearch)>-1) 
          filteredData.push(dataToFilter[i]);
    }

    return filteredData; 
  }
}