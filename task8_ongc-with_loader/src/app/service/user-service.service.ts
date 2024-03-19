import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  firstUrl = "https://dev-api.newage.market/platform/api/usercategories";
  secondUrl = "https://dev-api.newage.market/platform/api/usersubcategories/";
  constructor(private http: HttpClient) { }

  category() {
    return this.http.post(this.firstUrl, {});
  }
  SubCat(data:any) {
    return this.http.post(this.secondUrl,data);
  }
}
