import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/Item';
import { DataService } from '../../services/data.service';
//import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  itemList:Item[] = [];
  selectedItem:Item;
  toggleEdit:Boolean = false;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(){
    this.dataService.getItems().subscribe(items => {
      this.itemList = items;
    });
  }

  addItem(form){
    let newItem: Item = {
      itemName: form.value.itemName,
      itemPrice: form.value.itemPrice,
      itemStock: form.value.itemStock
    };
    form.resetForm();
    this.dataService.addItem(newItem).subscribe(item => {
      console.log(item);
      this.getItems();
    });
  }

  deleteItem(id){
    this.dataService.deleteItem(id).subscribe(data => {
      if(data.n == 1){
        for(var i = 0; i < this.itemList.length; i++){
          if(id == this.itemList[i]._id){
            this.itemList.splice(i, 1);
          }
        }
      }
    });
  }

  updateItem(form){
    let newItem: Item = {
      _id: this.selectedItem._id,
      itemName: form.value.itemName,
      itemPrice: form.value.itemPrice,
      itemStock: form.value.itemStock
    };
    this.dataService.updateItem(newItem).subscribe(result => {
      this.getItems();
    });
    this.toggleEdit = false;
  }

  showEditForm(item){
    this.selectedItem = item;
    this.toggleEdit = true;
  }

}
