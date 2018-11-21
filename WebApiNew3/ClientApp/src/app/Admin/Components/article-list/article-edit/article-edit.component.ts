import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleModel } from '../../../../Model/ArticleModel';
import { ArticleServiceService } from '../../../../Services/article-service.service';
import { CategoryModel } from '../../../../Model/CategoryModel';
import { SectionModel } from '../../../../Model/SectionModel';
import { CategoryServiceService } from '../../../../Services/category-service.service';
import { SectionServiceService } from '../../../../Services/section-service.service';
import { error } from 'util';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {
  pageTitle = 'Edit Article';
  editForm: FormGroup;
  formError: { [id: string]: string };
  private validationMessages: { [id: string]: { [id: string]: string } };

  public article: ArticleModel = {

    'id': 0,
    'title': '',
    'author': '',
    'categoryName': '',
    'articleCategoryID': 0,
    'CaptionImageUrl': '',
    'sectionID': 0,
    'sectionName': '',
    'articleContent': ''
  };

 public categories: CategoryModel[]

 public sections: SectionModel[];
 
  errorMessage: string;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private _articleService: ArticleServiceService, private _categoryService: CategoryServiceService, private _sectionService: SectionServiceService) {
    // With FormBuilder
    this.editForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      author: ['', [Validators.required, Validators.maxLength(50)]],
      SectionName: [''],
      Category: ['', [Validators.required]], 
      articleContent: ['', [Validators.required, Validators.minLength(5)]]
    });

    //// Watch all of the controls on the form
    //this.editForm.valueChanges
    //  .subscribe(data => this.onValueChanged(data));

    // Watch one control on the form.
    this.editForm.get('title').valueChanges
      .subscribe(value => console.log(`Title Changed to: ${value}`));

    this.editForm.get('author').valueChanges
      .subscribe(value => console.log(`Author Changed to: ${value}`));

    this.editForm.get('Category').valueChanges
      .subscribe(value => console.log(`Category Changed to: ${value}`));

    this.editForm.get('SectionName').valueChanges
      .subscribe(value => console.log(`Section Name Changed to: ${value}`));

    this.editForm.get('articleContent').valueChanges
      .subscribe(value => console.log(`Article Content Changed to: ${value}`));

    this.formError = {
      'title': '',
      'Author': '',
      'category': '',
      'section': '',
      'content': '',
    }

    this.validationMessages = {
      'title': {
        'required': 'Article title is required',
        'minlength': 'Article title must be at least three characters.',
        'maxlength': 'Article title cannot exceed 100 characters.'
      },
      'author': {
        'required': 'Author is required',
        'maxlength': 'Author Name cannot exceed 50 characters.'
      },
      'category': {
        'required': 'Article Category is required',
      },
      'section': {
      },
      'content': {
        'requiired': 'Article Content is required.',
        'minlength': 'Article title must be at least three characters.',
      }
    };
  }

  ngOnInit() {

    this.route.params.subscribe(
      params => {
        const id = +params['id'];
        this.getArticle(id);
        this.loadCategories();
        this.loadSections();
      }
    );
    
    console.log(this.editForm);
  }


  loadCategories() {
    this._categoryService.getCategories()
      .subscribe(result => {
        this.categories = result
      });
  };

  loadSections() {
    this._sectionService.getSections()
      .subscribe(result => {
        this.sections = result
       
      });
  };

  getArticle(id: number): void {
    this._articleService.getArticle(id).subscribe(
      result => this.onArticleRetrieved(result),
      error => this.errorMessage = <any>error
    );
  }

  onArticleRetrieved(article: ArticleModel): void {
    if (this.editForm) {
      this.editForm.reset();
    }
    this.article.id = article.id;
    this.article.articleContent = article.articleContent;
    this.article.title = article.title;
    this.article.sectionName = article.sectionName;
    this.article.categoryName = article.categoryName;
    this.article.author = article.author;
    this.article.articleCategoryID = article.articleCategoryID;
    this.article.sectionID = article.sectionID;
    this.article.CaptionImageUrl = article.CaptionImageUrl;


    if (this.article.id === 0) {
      this.pageTitle = 'Add Article';
    } else {
      this.pageTitle = `Edit Article: ${this.article.title}`;
    }

    // Update the data on the form
    this.editForm.patchValue({
      title: this.article.title,
      author: this.article.author,
      Category: this.article.articleCategoryID,
      SectionName: this.article.sectionID,
      articleContent: this.article.articleContent
    });
  }

  // Start of a generic validator
  //onValueChanged(data: any): void {
  //  Object.keys(this.formError).forEach(field => {
  //    const hasError = this.editForm.get(field).dirty &&
  //      !this.editForm.get(field).valid;
  //    this.formError[field] = '';
  //    if (hasError) {
  //      Object.keys(this.editForm.get(field).errors).forEach(rule =>
  //        this.formError[field] += this.validationMessages[field][rule] + ' '
  //      );
  //    }
  //  });
  //}

  saveArticle(): void {
    console.log(this.editForm);
    if (this.editForm.dirty && this.editForm.valid) {
      // Copy the form values over the object values
      const m = Object.assign({}, this.article, this.editForm.value);

      this._articleService.saveArticle(m).subscribe(
        () => this.onSaveComplete(),
      );
    } else if (!this.editForm.dirty) {
      //this.onSaveComplete();
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.editForm.reset();
    if (this.article.id !== 0) {
      this.getArticle(this.article.id);
    }
    else {
      this.router.navigate(['/Admin/ArticleList'])
    }
    
  }
}


