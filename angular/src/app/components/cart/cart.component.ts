import { Component, OnInit } from '@angular/core';
import { LocaleDataIndex } from '@angular/common/src/i18n/locale_data';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart=[];
  emptyMsg:boolean = false;
  total:number = 0;

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('cart') != null){
      this.cart = JSON.parse(localStorage.getItem('cart'));
      for(var i = 0; i < this.cart.length; i++){
        var temp = this.cart[i].itemPrice * parseInt(this.cart[i].quantity);
        this.total += temp;
        console.log(this.total);
      }
    } else{
      this.emptyMsg = true;
    }
  }

  clearCart(){
    localStorage.removeItem('cart');
    this.cart = [];
    this.emptyMsg = true;
    console.log(this.cart);
  }

  checkout(){
    for(var i = 0; i < this.cart.length; i++){
      /*
        subtract itemQuantity from itemStock via put request for each array index
        -create put route in data service
        --
      */
    }
  }

}
