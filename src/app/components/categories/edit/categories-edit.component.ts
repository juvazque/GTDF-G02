import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit',
  templateUrl: './categories-edit.component.html',
  styleUrls: ['./categories-edit.component.css']
})
export class CategoriesEditComponent implements OnInit {
  private id: number = 0;

  profileForm = new FormGroup({
    name: new FormControl('')
  });

  constructor(private router: Router, private route: ActivatedRoute, private _categoryService: CategoryService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
  }

  updateCategory() {
    var category: Category;
    category = { id: 1 };
    this._categoryService.getCategory(this.id).subscribe(apiData => (category = apiData));
    category.name = this.profileForm.controls['name'].value;
    this._categoryService.putCategory(this.id, category).subscribe();
    this.router.navigate(['/categories/list'])
  }

}
