import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  stock;

  constructor(private inventory: InventoryService) { }

  ngOnInit(): void {
  }

  getInStock() {
    this.inventory.getItems().subscribe((res) => {
      console.log("Items from server", res);
      this.stock = res;
    })
  }

}
