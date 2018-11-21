import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCategoryEditComponent } from './article-category-edit.component';

describe('ArticleCategoryEditComponent', () => {
  let component: ArticleCategoryEditComponent;
  let fixture: ComponentFixture<ArticleCategoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCategoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
