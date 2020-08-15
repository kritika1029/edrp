
import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { entityListBean } from '../bean/entityListBean';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  httpOption= { headers:{ 'content':"application/json", 'content-type':"application/x-www-form-urlencoded" } };
  urlName="http://localhost:8080/";
  private getEntityUrl=this.urlName+"Admission_Panel/login/loadEntity.htm";
  private getprogram = this.urlName+"Admission_Panel/login/loadProgram.htm";

  constructor(private http: HttpClient) { }
  /*getEntities() : Observable<entityListBean[]>
  {
    return this.http.get<entityListBean[]>(this.url,this.httpOption);
  } */

  getEntities() 
  {
    let param=JSON.stringify
    ({
      employee_code:sessionStorage.getItem('employeeCode'),
      panel_authority:sessionStorage.getItem('panel_authority'),
    });
  
    let para = new HttpParams({fromObject:{courseObject:param}});
  
    return this.http.post(this.getEntityUrl,para,this.httpOption);
  }
  
  getProgramBrSp(val)
  {
    let param=JSON.stringify
    ({
      entity_id:val,
      employee_code:sessionStorage.getItem('employeeCode'),
      panel_authority:sessionStorage.getItem('panel_authority'),
      user_id:sessionStorage.getItem('userId')
    });
  
    let para = new HttpParams({fromObject:{courseObject:param}});
  
    return this.http.post
    (
    this.getprogram,para,this.httpOption
    )
  }

}