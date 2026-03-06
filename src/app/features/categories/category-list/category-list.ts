import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../category';


@Component({
  selector: 'app-category-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css',
})
export class CategoryList {
  categories: any[] = [];
  searchText: string = '';

  constructor(private categoryService: CategoryService) {
    }
     ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(){
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
        console.log('Categories loaded successfully', this.categories);
    });
  }  
}
