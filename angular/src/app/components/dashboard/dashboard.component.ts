import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  itemList:Item[] = [];
  cart=[];
  quantity:number=1;
  addbtn:boolean = true;
  numItems:number;
  dontPush:boolean = false;
  temp:number = 0;

  private cartQuantity:number;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getItems();
    if(localStorage.getItem('cart') != null){
      this.cart = JSON.parse(localStorage.getItem('cart'));
      this.numItems = this.cart.length - 1;
    }
    for(var i = 0; i < this.cart.length; i++){
      this.temp += this.cart[i].quantity;
    }
    this.dataService.changeCart(this.temp);
    this.temp = 0;
  }

  getItems(){
    this.dataService.getItems().subscribe(items => {
      this.itemList = items;
    });
  }

  addToCart(item, form){
    for(var i = 0; i < this.cart.length; i++){
      if(this.cart[i].itemName == item.itemName){
        this.cart[i].quantity += parseInt(form.value.quantity);
        this.dontPush = true;
      }
    }

    if(!this.dontPush){
      this.cart.push({
        id: item._id,
        itemName: item.itemName,
        itemPrice: item.itemPrice,
        quantity: parseInt(form.value.quantity)
      });
    }

    for(var i = 0; i < this.cart.length; i++){
      this.temp += this.cart[i].quantity;
    }
    this.dataService.changeCart(this.temp);
    this.temp = 0;

    this.dontPush = false;
    this.addbtn = !this.addbtn;
    console.log(this.cart);
    this.numItems += 1;
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

}
