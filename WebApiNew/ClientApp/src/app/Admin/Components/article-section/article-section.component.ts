import { Component, OnInit } from '@angular/core';
import { SectionModel } from '../../../Model/SectionModel';
import { SectionServiceService } from '../../../Services/section-service.service';

@Component({
  selector: 'app-article-section',
  templateUrl: './article-section.component.html',
  styleUrls: ['./article-section.component.css']
})
export class ArticleSectionComponent implements OnInit {
  pageTitle = 'Article Sections';
  sections = [];

  constructor(private _sectionService: SectionServiceService) {
    for (let i = 1; i <= 100; i++) {
      this.sections.push(`section ${i}`);
    }
  }

  ngOnInit() {
    this.loadSections();
  }

  loadSections() {
    this._sectionService.getSections()
      .subscribe(result => {
        this.sections = result
      });
  };
}
