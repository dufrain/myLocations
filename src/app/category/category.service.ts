import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  activeName: string;

  constructor() { }

  getAll():Category[]{
    return JSON.parse(localStorage.getItem("categories")) || [];
  }

  getByName(name: string){
    let categories = this.getAll(); 
    return categories.find( value=> value.name == name )
  } 

  saveAll(categories:Category[]){
    localStorage.setItem("categories", JSON.stringify(categories));
  }

  remove(category?:Category){
    if (category === undefined)
      category = new Category(this.activeName)

    let categories = this.getAll(); 
    categories = categories.filter(value => value.name != category.name);
    this.saveAll(categories);
  };

  add(name:string){
    let categories = this.getAll(); 
    let category = new Category(name);
    categories.push(category);
    this.saveAll(categories);
  }

  update(newName:string, oldName: string){
    this.remove(new Category(oldName));
    this.add(newName)
  }
}
