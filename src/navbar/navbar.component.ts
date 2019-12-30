import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category/category.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title: string;
  isNavbarCollapsed: any;
  route: string;
  hideListButton: boolean = false;
  hideNewButton: boolean = false;

  constructor(private categoryService: CategoryService, location: Location, private router: Router){
    
    console.log("location.path()=",location.path());
    
    router.events.subscribe(val => {
      if (location.path() == "/category/list"){
        this.title = "View Categories List"
        this.hideListButton = true;
      }
      else
        this.hideListButton = false;

      if (location.path() == "/category/add"){
        this.title = "Add New Category"
        this.hideNewButton = true;
        return;
      }
      else
        this.hideNewButton = false;

      if (location.path() == "/category/edit"){
        this.title = "Edit Category"
        return;
      }

      if (location.path() == "/category"){
        this.title = "Category details"
        return;
      }
    });
  }

  ngOnInit() {
  }

  newCategory(){
    this.categoryService.activeName = null;
    this.router.navigate(["/category/add/"]);
  }

  deleteCategory(){
    this.categoryService.remove();
    window.location.reload(); //TODO: categories list as an observable
  }
  
}
