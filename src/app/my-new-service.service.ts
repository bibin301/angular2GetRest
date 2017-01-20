import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
// import { Observable } from 'rxjs/observable';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MyNewServiceService {



  constructor(private http:Http) { 
    

  }
getData(){

  return this.http.get('http://time.jsontest.com/').map(res=>res.json())

 


}



}
