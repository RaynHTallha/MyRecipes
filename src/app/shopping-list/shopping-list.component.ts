import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: ingredient[] = [
    new ingredient('Tomatos', 10),
    new ingredient('Pepper', 2)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
