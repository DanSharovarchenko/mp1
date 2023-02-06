import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartServcice: CartService) { }

  cart = this.cartServcice.getProducts();

  totalCost = this.cart?.map(x => x.price).reduce((partialSum, a) => partialSum + a, 0);
  ngOnInit(): void {
  }

}
