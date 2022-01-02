import { Component, OnInit } from '@angular/core';
import { Meal } from '../model/meal';
import { MealService } from '../service/meal.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {

  meals: Meal[] = [];

  constructor(private mealService: MealService) { }

  ngOnInit(): void {
    this.mealService.findAll().subscribe(data => {
      this.meals = data;
    });
  }

  goDelete(id: string) {
    this.meals = this.meals.filter(meal => meal.id !== id);
    this.mealService.deleteMeal(id).subscribe();
  }

}
