import { Component, OnInit } from '@angular/core';
import { ContactUs } from './../Model/ContactUsModel';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { ContactUsService } from '../Services/contact-us-service.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm = new FormGroup({
    Name: new FormControl (''),
    Email: new FormControl(''),
    Message: new FormControl(''),

  });
  loading = false;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private contactUsService: ContactUsService,

  ) { }

  ngOnInit() {
    
    this.contactForm = this.formBuilder.group({
      'Name': [null, [Validators.required]],
      'Email': [null, [Validators.required, Validators.email]],
      'Message': [null, Validators.required]
    });
  }

  get fields() {
    return this.contactForm.controls;
  }

  onSubmit(formData: NgForm) {
    this.contactUsService.addContactUs(formData)
    //if (this.contactForm.invalid) {
    //  return;
    } 
    //this.loading = true;
    //this.contactUsService.addContactUs(this.contactForm.value)
    //  .pipe(first())
  }


