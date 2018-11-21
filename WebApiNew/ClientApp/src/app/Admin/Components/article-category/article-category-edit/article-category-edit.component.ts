import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryModel } from '../../../../Model/CategoryModel';
import { CategoryServiceService } from '../../../../Services/category-service.service';

@Component({
  selector: 'app-article-category-edit',
  templateUrl: './article-category-edit.component.html',
  styleUrls: ['./article-category-edit.component.css']
})
export class ArticleCategoryEditComponent implements OnInit {
  pageTitle = 'Edit Category';
  editForm: FormGroup;
  formError: { [id: string]: string };
  private validationMessages: { [id: string]: { [id: string]: string } };

  public category: CategoryModel = {

    'id': 0,
    'categoryName': ''
  };
  errorMessage: string;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private _categoryService: CategoryServiceService) {

    // With FormBuilder
    this.editForm = this.fb.group({
      Category: ['category.CategoryName', [Validators.required]],
      
    });
    // Watch one control on the form.
    this.editForm.get('Category').valueChanges
      .subscribe(value => console.log(`Category Changed to: ${value}`));

    this.formError = {
      'category': '',
    }

    this.validationMessages = {
      'category': {
        'required': 'Category Name is required.'
      }
    }

  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const id = +params['id'];
        this.getCategory(id);
      }
    );

  }

  getCategory(id: number): void {
    this._categoryService.getCategory(id).subscribe(
      result => this.onArticleRetrieved(result),
      error => this.errorMessage = <any>error
    );
  }

  onArticleRetrieved(category: CategoryModel): void {
    if (this.editForm) {
      this.editForm.reset();
    }
    this.category.categoryName = category.categoryName;
    this.category.id = category.id
   


    if (this.category.id === 0) {
      this.pageTitle = 'Add Category';
    } else {
      this.pageTitle = 'Edit Category';
    }

    // Update the data on the form
    this.editForm.patchValue({
      Category: this.category.categoryName
    });
  }

  saveCategory() {
    if (this.editForm.dirty && this.editForm.valid) {
      // Copy the form values over the object values
      const m = Object.assign({}, this.category, this.editForm.value);
      m.categoryName = m.Category;

      const cat: CategoryModel = {
        'categoryName': m.category,
        'id': m.id
      };

      let body = { "id": m.id, "categoryName": m.categoryName };

      this._categoryService.saveCategory(body).subscribe(
        () => this.onSaveComplete(),
        (error: any) => this.errorMessage = <any>error
      );
    } else if (!this.editForm.dirty) {
      this.onSaveComplete();
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.editForm.reset();
    if (this.category.id !== 0) {
      this.getCategory(this.category.id);
    }
    else {
      this.router.navigate(['/Admin/ArticleCategories'])
    }
    //this.router.navigate(['/Admin/ArticleCategories/CategoryEdit']);
  }

}
