import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http:Http) { }

  getItems(){
    return this.http.get('http://localhost:3000/admin/items').map(res => res.json());
  }

  addItem(newItem){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/admin/item', newItem, {headers:headers})
      .map(res => res.json());
  }

  deleteItem(id){
    return this.http.delete('http://localhost:3000/admin/item/'+id)
      .map(res => res.json());
  }

  updateItem(newItem){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/admin/item/'+newItem._id, newItem, {headers:headers}).map(res => res.json());
  }

  addToCart(){}

}
