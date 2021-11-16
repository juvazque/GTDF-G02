import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class CategoriesListComponent implements OnInit {

  constructor(private _categoryService: CategoryService) { }

  categoriesList: any = [];

  ngOnInit(): void {

    this.refreshList();
  }

  deleteCategory(category: Category) {
    this._categoryService.deleteCategory(category.id).subscribe();
    this.refreshList();
    window.location.reload();

  }

  refreshList() {

    this._categoryService.getCategories().subscribe(data => this.categoriesList = data);
  }

}
