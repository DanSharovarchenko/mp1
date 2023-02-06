import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private products?: Product[] = [];

  getProducts() {
    return this.products;
  }
  addProduct(product: Product) {
    this.products?.push(product);
  }
  clear() {
    this.products = [];

  }
}



interface Product {
  img: string;
  name: string;
  price: number;
}
