import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}

  @ViewChild('name', { static: true })
  nameRef?: ElementRef<HTMLInputElement>;

  @ViewChild('amount', { static: true })
  amountRef?: ElementRef<HTMLInputElement>;

  ngOnInit() {}

  onAddIngredient = () => {
    if (this.nameRef && this.amountRef) {
      this.shoppingListService.addIngredients({
        name: this.nameRef.nativeElement.value,
        amount: Number(this.amountRef.nativeElement.value),
      });
      this.nameRef.nativeElement.value = '';
      this.amountRef.nativeElement.value = '';
    }
  };
}
