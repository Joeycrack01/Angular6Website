import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})


export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    (<any>$)(document).ready(function () {

      (function ($) {

        "use strict";



        // RESIZABLE IMAGES
        if (isExists('.responsive-img-bg')) {

          $('.responsive-img-bg .p-item').each(function () {

            var $this = $(this),
              imgSrc = $this.find('img').attr('src');

            $this.css({ 'background-image': 'url(' + imgSrc + ')' });
          });
        }


        // ISOTOPE

        $(window).on('load', function () {



        });

        // DROPDOWN MENU

        var winWidth = $(window).width();
        dropdownMenu(winWidth);

        $(window).on('resize', function () {
          winWidth = $(window).width();
          dropdownMenu(winWidth);

        });

        $('[data-menu]').on('click', function () {

          var mainMenu = $(this).data('menu');

          $(mainMenu).toggleClass('visible-menu');

          return false;
        });




      })($);

      function dropdownMenu(winWidth) {

        if(winWidth > 767) {

      (<any>$)('.main-menu li.drop-down').on('mouseover', function () {
        var $this = (<any>$)(this),
          menuAnchor = $this.children('a');

        menuAnchor.addClass('mouseover');

      }).on('mouseleave', function () {
        var $this = (<any>$)(this),
          menuAnchor = $this.children('a');

        menuAnchor.removeClass('mouseover');
      });

    } else {

          (<any>$)('.main-menu li.drop-down > a').on('click', function () {

        if ((<any>$)(this).attr('href') == '#') return false;
        if ((<any>$)(this).hasClass('mouseover')) { (<any>$)(this).removeClass('mouseover'); }
        else { (<any>$)(this).addClass('mouseover'); }
        return false;
      });
    }

      }

      function isExists(elem) {
        if ($(elem).length > 0) {
          return true;
        }
        return false;
      }

    });


  }
}
