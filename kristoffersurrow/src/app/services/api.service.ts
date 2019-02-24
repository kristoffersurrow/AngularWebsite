import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Grocery} from '../models/grocery'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL:string = 'http://localhost:12407/api/grocery';


  public getGroceries(url?:string){
    return this.httpClient.get(this.apiURL)
  }

  //Typescripts string concatinering kan også bruges:
  // `${this.apiURL}/${id}`
  public getGroceriesById(id:number){
    return this.httpClient.get(this.apiURL + '/' + id.toString());
  }

  public postGrocery(grocery:Grocery){
    return this.httpClient.post(this.apiURL,grocery)
  }

  public putGrocery(id:number, grocery:Grocery){
    return this.httpClient.put(this.apiURL + '/' + grocery.id.toString(),grocery)
  }

  public deleteGrocery(id:number){
    return this.httpClient.delete(this.apiURL + '/' + id.toString())
  }

  constructor(private httpClient:HttpClient) { }
}
