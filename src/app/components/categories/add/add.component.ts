import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class CategoriesAddComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl('')
  });

  constructor(private router: Router, private _categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  createCategory() {
    var category: Category;
    category = { id: 1 };
    category.name = this.profileForm.controls['name'].value;
    this._categoryService.postCategory(category).subscribe();
    this.router.navigate(['/categories/list'])
  }

}
