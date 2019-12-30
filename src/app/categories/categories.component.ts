import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category/category.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.activeName = null;
    this.categories = this.categoryService.getAll();

  }

  onClick(category) {
    this.categoryService.activeName = category.name;
  }

}
