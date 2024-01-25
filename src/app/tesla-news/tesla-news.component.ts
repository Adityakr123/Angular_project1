import { Component } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';
@Component({
  selector: 'app-tesla-news',
  templateUrl: './tesla-news.component.html',
  styleUrls: ['./tesla-news.component.css']
})
export class TeslaNewsComponent {
  constructor(private _services:NewsapiservicesService){}
  topheadingDisplay:any=[];
  ngOnInit(): void {
      this._services.teslanews().subscribe((result)=>{
        console.log(result);  
        this.topheadingDisplay=result.articles;
      })
  }
}
