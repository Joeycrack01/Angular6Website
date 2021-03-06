import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEditComponent } from './article-section-edit.component';

describe('ArticleSectionEditComponent', () => {
  let component: SectionEditComponent;
  let fixture: ComponentFixture<SectionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
