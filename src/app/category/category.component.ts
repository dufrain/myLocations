import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryName: string;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryName = this.categoryService.activeName;
    this.categoryService.activeName = null;
  }

}
