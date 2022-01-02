import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Meal } from '../model/meal';
import { MealService } from '../service/meal.service';

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent implements OnInit {

  meal: Meal;

  constructor(private location: Location, private mealService: MealService, private route: ActivatedRoute) {
    this.meal = new Meal();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if(id) {
      this.mealService.getMealById(id).subscribe(data => {
        this.meal = data;
      });
    }
  }

  goBack() {
    this.location.back();
  }

  goSave() {
    this.mealService.save(this.meal).subscribe(() => this.goBack());
  }

}
