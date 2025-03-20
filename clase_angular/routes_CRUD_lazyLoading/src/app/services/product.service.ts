import { HttpClient } from '@angular/common/http';
import { EventEmitter, inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //constructor() { }

  http: HttpClient = inject(HttpClient);
  updateList: boolean = false;
  orderToUpdate: EventEmitter<boolean> = new EventEmitter();

  getAllProducts(){
    return this.http.get('http://localhost:3000/products');
  }

  getProductById(id: string){

    return this.http.get('http://localhost:3000/products/' + id);
  }

  deleteProductById(id: string){
    return this.http.delete('http://localhost:3000/products/' + id);
    
  }


  postProduct(product: any){
    return this.http.post('http://localhost:3000/products', product);
  }

  

}
