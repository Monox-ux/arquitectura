import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApirestService {
listado = [];
item: any;

  constructor(public _http: HttpClient ) { }


  getdata<T>(url: string)
  {
   url = 'http://localhost:3000/post'
    return this._http.get<T[]>(url);
  }



}

