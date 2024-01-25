import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }
  newsApiUrl="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=daeb3011f2d74b5bb78103f70b7192a1";
  teslaApiUrl="https://newsapi.org/v2/everything?q=tesla&from=2023-12-24&sortBy=publishedAt&apiKey=daeb3011f2d74b5bb78103f70b7192a1";
  appleApiUrl="https://newsapi.org/v2/everything?q=apple&from=2024-01-23&to=2024-01-23&sortBy=popularity&apiKey=daeb3011f2d74b5bb78103f70b7192a1"
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }
  teslanews():Observable<any>
  {
    return this._http.get(this.teslaApiUrl);
  }
  applenews():Observable<any>
  {
    return this._http.get(this.appleApiUrl);
  }

}
