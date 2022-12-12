import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../apirest.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  getdata: any []=[];
users: any = [];
searchdUser: any;

  constructor(
    private http: HttpClient,
    public _services: ApirestService)

  {
    this._services.getdata<any[]>("").subscribe(data =>
      {
      this.getdata = data
      console.log(this.getdata)
      }

      )

   }

  ngOnInit() {
  }

}
