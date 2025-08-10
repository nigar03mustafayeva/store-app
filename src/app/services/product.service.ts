import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<any[]> {
    const url='https://fakestoreapi.com/products';
    return this.http.get<any[]>(url);
  }

  getProductById(id: string){
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
  
}
