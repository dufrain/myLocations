import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app-routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryService } from './category/category.service';
import { CategoryFormComponent } from './category-form/category-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    CategoriesComponent,
    CategoryFormComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule.forRoot(AppRoutes, { useHash: true })
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
