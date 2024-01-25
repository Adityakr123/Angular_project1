import { Component } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';
@Component({
  selector: 'app-apple-news',
  templateUrl: './apple-news.component.html',
  styleUrls: ['./apple-news.component.css']
})
export class AppleNewsComponent {
  constructor(private _services:NewsapiservicesService){}
  topheadingDisplay:any=[];
  ngOnInit(): void {
      this._services.applenews().subscribe((result)=>{
        console.log(result);  
        this.topheadingDisplay=result.articles;
      })
  }
}
