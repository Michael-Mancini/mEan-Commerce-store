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

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getItems();
    if(localStorage.getItem('cart') != null){
      this.cart = JSON.parse(localStorage.getItem('cart'));
    }
  }

  getItems(){
    this.dataService.getItems().subscribe(items => {
      this.itemList = items;
    });
  }

  addToCart(item, form){
    this.cart.push({
      id: item._id,
      itemName: item.itemName,
      itemPrice: item.itemPrice,
      quantity: parseInt(form.value.quantity)
    });
    this.addbtn = !this.addbtn;
    console.log(this.cart);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

}
