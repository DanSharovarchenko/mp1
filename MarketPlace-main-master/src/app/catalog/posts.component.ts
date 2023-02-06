import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  buy(id: number) {

    console.log(this.cartService.getProducts());

    switch(id) {
      case 1:
        this.cartService.addProduct({name: "Люстра", img: "../../assets/pngimg.com - chandelier_PNG71.png", price: 10999});
        break;
      case 2:
        this.cartService.addProduct({name: "Часы", img: "../../assets/pngimg.com - watches_PNG101444.png", price: 5999});
        break;
      case 3:
        this.cartService.addProduct({name: "Iphone 4", img: "../../assets/pngimg.com - iphone_12_PNG23.png", price: 128999} );
        break;
      case 4:
        this.cartService.addProduct({name: "Стиральная машина", img: "../../assets/pngimg.com - washing_machine_PNG101461.png", price: 12000 });
        break;
    }
  }

}
