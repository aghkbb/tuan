import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meal } from '../model/meal';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private mealUrl: string;

  constructor(private http: HttpClient) {
    this.mealUrl = "http://localhost:8080/meal";
  }

  public findAll(): Observable<Meal[]> {
    return this.http.get<Meal[]>(this.mealUrl+"/all");
  }

  public save(meal: Meal) {
    return this.http.post<Meal>(this.mealUrl+"/add", meal);
  }

  public deleteMeal(id: string) {
    return this.http.delete<Meal>(this.mealUrl+"/delete/"+id);
  }

  public getMealById(id: string) {
    return this.http.get<Meal>(this.mealUrl+"/meal/"+id);
  }

}
