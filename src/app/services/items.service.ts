import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  
  baseApiUrl: string =environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  
  getAllItems(): Observable<Item[]>
  {
    return this.http.get<Item[]>( this.baseApiUrl + '/api/items');

  }
  addItem(addItemRequest:Item): Observable<Item>
  {
    addItemRequest.itemId='00000000-0000-0000-0000-000000000000';
    return this.http.post<Item>(this.baseApiUrl + '/api/items',addItemRequest);
  }
  getItem(id:string):Observable<Item>
  {
    return this.http.get<Item>(this.baseApiUrl + '/api/items/' + id);
  }
  updateItem(id:string, updateItemRequest: Item):Observable<Item>
  {
    return this.http.put<Item> (this.baseApiUrl + '/api/items/' + id, updateItemRequest);
  }
  deleteItem(id: string):Observable<Item>{
    return this.http.delete<Item>(this.baseApiUrl+ '/api/items/' + id);
  }
}
