import { Component, Inject, OnInit } from '@angular/core';
import { AboutService } from './../Services/about.service';
import { ArticleModel } from './../Model/ArticleModel';
import { error } from 'protractor';
//import { AboutService } from '../Services/';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  

  public aboutUs = {
    'articleContent': '',
    'title': '',
    'ID': 0,
    'Author': '',
    'SectionID': 0,
    'CaptionImageUrl': '',
    'ArticleCategoryID': 0
  };

  public errorMsg
  public about: ArticleModel


  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.getArticle(1);
  }

  getArticle(Id: number) {
    let about: ArticleModel;
    this.aboutService.getArticle(1)
      .subscribe(d => {
        this.aboutUs = d
        this.aboutUs.articleContent = d.articleContent;
        this.aboutUs.title = d.title;
        console.log(this.aboutUs);

      }),
      error => this.errorMsg = error;
  };
}
