import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./personal-details.component.css'],
  
  
})
export class ContactComponent implements OnInit {
  url = "././assets/js/check.js";
  loadAPI: Promise<unknown>;
  
  constructor(private router: Router) { 
    
  } 
    ngOnInit(){  
      this.loadAPI = new Promise(resolve => {
        console.log("resolving promise...");
        this.loadScript();
      });
      
  }
  public loadScript() {
    console.log("preparing to load...");
    let node = document.createElement("script");
    node.src = this.url;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
}
  
  
 
  @Input() form:FormGroup;
    states=[{"code": "AN","name": "Andaman and Nicobar Islands"},
    {"code": "AP","name": "Andhra Pradesh"},
    {"code": "AR","name": "Arunachal Pradesh"},
    {"code": "AS","name": "Assam"},
    {"code": "BR","name": "Bihar"},
    {"code": "CG","name": "Chandigarh"},
    {"code": "CH","name": "Chhattisgarh"},
    {"code": "DH","name": "Dadra and Nagar Haveli"},
    {"code": "DD","name": "Daman and Diu"},
    {"code": "DL","name": "Delhi"},
    {"code": "GA","name": "Goa"},
    {"code": "GJ","name": "Gujarat"},
    {"code": "HR","name": "Haryana"},
    {"code": "HP","name": "Himachal Pradesh"},
    {"code": "JK","name": "Jammu and Kashmir"},
    {"code": "JH","name": "Jharkhand"},
    {"code": "KA","name": "Karnataka"},
    {"code": "KL","name": "Kerala"},
    {"code": "LD","name": "Lakshadweep"},
    {"code": "MP","name": "Madhya Pradesh"},
    {"code": "MH","name": "Maharashtra"},
    {"code": "MN","name": "Manipur"},
    {"code": "ML","name": "Meghalaya"},
    {"code": "MZ","name": "Mizoram"},
    {"code": "NL","name": "Nagaland"},
    {"code": "OR","name": "Odisha"},
    {"code": "PY","name": "Puducherry"},
    {"code": "PB","name": "Punjab"},
    {"code": "RJ","name": "Rajasthan"},
    {"code": "SK","name": "Sikkim"},
    {"code": "TN","name": "Tamil Nadu"},
    {"code": "TS","name": "Telangana"},
    {"code": "TR","name": "Tripura"},
    {"code": "UK","name": "Uttarakhand"},
    {"code": "UP","name": "Uttar Pradesh"},
    {"code": "WB","name": "West Bengal"}];

     
        
}