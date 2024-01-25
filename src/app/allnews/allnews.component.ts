import { Component } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';
@Component({
  selector: 'app-allnews',
  templateUrl: './allnews.component.html',
  styleUrls: ['./allnews.component.css']
})
export class AllnewsComponent {
  constructor(private _services:NewsapiservicesService){}
  topheadingDisplay:any=[];
  ngOnInit(): void {
      this._services.topHeading().subscribe((result)=>{
        console.log(result);  
        this.topheadingDisplay=result.articles;
      })
  }
}
