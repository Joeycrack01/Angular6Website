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
  contactForm: FormGroup;
  loading = false;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private contactUsService: ContactUsService,

  ) { }

  ngOnInit() {
    
    this.contactForm = this.formBuilder.group({
      'Name': ['', [Validators.required]],
      'Email': ['', [Validators.required, Validators.email]],
      'Message': ['', [Validators.required]]
    });
  }

  get fields() {
    return this.contactForm.controls;
  }

  contact(formData: NgForm) {

    this.contactUsService.addContact(formData)
    alert("POST Request is successful");
  }  
    
    //this.loading = true;
    //this.contactUsService.addContactUs(this.contactForm.value)
    //  .pipe(first())
  }


