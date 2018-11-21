import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SectionModel } from '../../../../Model/SectionModel';
import { SectionServiceService } from '../../../../Services/section-service.service';

@Component({
  selector: 'app-article-section-edit',
  templateUrl: './article-section-edit.component.html',
  styleUrls: ['./article-section-edit.component.css']
})
export class SectionEditComponent implements OnInit {
  pageTitle = 'Edit Section';
  editForm: FormGroup;
  formError: { [id: string]: string };
  private validationMessages: { [id: string]: { [id: string]: string } };

  public section: SectionModel = {

    'id': 0,
    'sectionName': ''
  };
  errorMessage: string;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private _SectionService: SectionServiceService) {

    // With FormBuilder
    this.editForm = this.fb.group({
      Section: ['section.sectionName', [Validators.required]],

    });
    // Watch one control on the form.
    this.editForm.get('Section').valueChanges
      .subscribe(value => console.log(`Section Changed to: ${value}`));

    this.formError = {
      'section': '',
    }

    this.validationMessages = {
      'section': {
        'required': 'section Name is required.'
      }
    }

  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const id = +params['id'];
        this.getSection(id);
      }
    );

  }

  getSection(id: number): void {
    this._SectionService.getSection(id).subscribe(
      result => this.onArticleRetrieved(result),
      error => this.errorMessage = <any>error
    );
  }

  onArticleRetrieved(section: SectionModel): void {
    if (this.editForm) {
      this.editForm.reset();
    }
    this.section.sectionName = section.sectionName;
    this.section.id = section.id

    if (this.section.id === 0) {
      this.pageTitle = 'Add Section';
    } else {
      this.pageTitle = 'Edit Section';
    }

    // Update the data on the form
    this.editForm.patchValue({
      Section: this.section.sectionName
    });
  }

  saveSection() {
    if (this.editForm.dirty && this.editForm.valid) {
      // Copy the form values over the object values
      const m = Object.assign({}, this.section, this.editForm.value);
      m.sectionName = m.Section;

      const cat: SectionModel = {
        'sectionName': m.section,
        'id': m.id
      };

      let body = { "id": m.id, "sectionName": m.sectionName };

      this._SectionService.saveSection(body).subscribe(
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
    if (this.section.id !== 0) {
      this.getSection(this.section.id);
    }
    else {
      this.router.navigate(['/Admin/ArticleSections'])
    }
  }

}
