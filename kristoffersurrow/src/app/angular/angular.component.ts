import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Grocery } from '../models/grocery';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  constructor(private api: ApiService) {
  }
  
  ngOnInit() {
    this.updateItems();
    
    this.newGrocery = new Grocery(); 
  }

  noText:boolean = false;

  groceries: Object;

  newGrocery:Grocery;

  checkInput(){
    if(this.newGrocery.name == ""){
      this.noText = true;
    }
    else{
      this.noText = false;
    }
  }
  
  addItem(){
    let grocery = this.newGrocery;

    if(grocery.name == null){
      this.noText = true;
      console.log('Grocery name is null')
      return;
    }
    else{
      this.api.postGrocery(grocery).subscribe(()=>{
        this.updateItems();
        console.log('Added a grocery');
      })

    }


    this.newGrocery = new Grocery();
  }


  updateItem(id:number, grocery:Grocery){
    this.api.putGrocery(id,grocery).subscribe(()=>{
      //this.updateItems(); der behøves ikke at opdateres
      console.log('Updated a grocery')
    })
  }

  deleteItem(id:number){
    this.api.deleteGrocery(id).subscribe(() => {
      this.updateItems();
      console.log('Deleted a grocery')
    });
  }

  updateItems(){
    this.api.getGroceries().subscribe(data => {
        this.groceries = data;
        console.log('Loaded all groceries');
    }) 
  }

}
