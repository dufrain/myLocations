import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from '../category/category.service';
import { Category } from '../models/category';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  form: FormGroup;
  nameToEdit: string = null;

  get f() {
    return this.form.controls;
  }

  get categoryName(){
    return (<FormControl>this.f.categoryName).value;
  }

  constructor( private fb: FormBuilder,
               private categoryService: CategoryService,
               private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      categoryName: [null] // TOTO: REQUIRED validation
    })

    if (this.categoryService.activeName != null){
      let category = this.categoryService.getByName(this.categoryService.activeName);
      this.f.categoryName.setValue(category.name);
    }
    this.nameToEdit = this.categoryService.activeName;
    this.categoryService.activeName = null;
  }

  onSave(){
    if (!this.categoryName)
      return;

    // TODO: warn if the name already exists
    if (this.nameToEdit)
      this.categoryService.update(this.categoryName, this.nameToEdit);
    else
      this.categoryService.add(this.categoryName);

    this.router.navigate(["category/list"]);
  }

}
