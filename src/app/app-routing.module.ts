import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealFormComponent } from './meal-form/meal-form.component';
import { MealListComponent } from './meal-list/meal-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/meals', pathMatch: 'full'},
  { path: 'meals', component: MealListComponent},
  { path: 'meal-form', component: MealFormComponent},
  { path: 'meal-form/:id', component: MealFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
