import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  itemDetails: Item={
    itemId:'',
    itemName: '',
    itemvalue:10,
    itemcolor:'',
    itemSize:0
  };
  
  constructor(private route: ActivatedRoute, private itemService:ItemsService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id');

        if(id){
          this.itemService.getItem(id).subscribe({
            next:(response)=>{
              this.itemDetails=response;

            }
          });
        }
      }
    })

  }

  updateItem()
  {
    this.itemService.updateItem(this.itemDetails.itemId, this.itemDetails)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['items']);
      }
    });
  }

  deleteItem(id:string)
  {
    this.itemService.deleteItem(id)
    .subscribe
    ({
      next:(response)=>{
        this.router.navigate(['items']);
      }
    });
  }


  

}
