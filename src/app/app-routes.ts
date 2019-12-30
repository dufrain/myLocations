import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryFormComponent } from './category-form/category-form.component';

export const AppRoutes: Routes = [
        { path: '', redirectTo: 'category/list', pathMatch: 'full' },
        { path: 'category', component: CategoryComponent},
        { path: 'category/list', component: CategoriesComponent}, 
        { path: 'category/add', component: CategoryFormComponent}, 
        { path: 'category/edit', component: CategoryFormComponent} 
   ];
    
   export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes,{onSameUrlNavigation: 'reload'});
   