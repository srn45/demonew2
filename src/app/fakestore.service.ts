import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FakestoreService {
  constructor(private http: HttpClient) { }
  GetCategories(): Observable<string[]> {
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories');
  }
  GetProducts(): Observable<any[]> {
    return this.http.get<any[]>('http://fakestoreapi.com/products');
  }

  IsLoggedIn() {
    return localStorage.getItem("username") != null;
  }
  HaveRoleAccess(menuname: any) {
    const role = localStorage.getItem("role");
    if (role == 'admin') {
      return true;
    } else {
      if (menuname == 'contact') {
        return true;
      } else {
        return false;
      }
    }
  }
}

