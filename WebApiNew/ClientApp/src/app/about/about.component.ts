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

  public aboutUs = {};
  public errorMsg

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.getArticle();
  }

  getArticle() {
    let about: ArticleModel;
    this.aboutService.getArticle(1)
      .subscribe(result => this.aboutUs = result,
        error => this.errorMsg = error);
  }

}
