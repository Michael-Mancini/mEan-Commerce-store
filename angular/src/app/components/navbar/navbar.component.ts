import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private cartQuantity:number;

  constructor(private ds: DataService) { }

  ngOnInit() {
    this.ds.currentCart.subscribe(cart => this.cartQuantity = cart);
  }

}
