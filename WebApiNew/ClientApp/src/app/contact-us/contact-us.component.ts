import { Component, OnInit } from '@angular/core';
import { ContactUs, AddressModel } from './../Model/ContactUsModel';
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

  public address = {
    'officeLocation': '',
    'officeContacNo': '',
    'Id': 0,
    'email': '',
    'website': '',
    
  };
  public errorMsg;

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
    this.getAddress(1);
  }

  get fields() {
    return this.contactForm.controls;
  }

  contact(formData: NgForm) {

    this.contactUsService.addContact(formData)
    alert("POST Request is successful");
  }

  getAddress(Id: number) {
    let about: AddressModel;
    this.contactUsService.getAddress(1)
      .subscribe(d => {
        this.address = d
        this.address.email = d.email;
        this.address.officeContacNo = d.officeContacNo;
        this.address.officeLocation = d.officeLocation;
        this.address.website = d.website;
        console.log(this.address)
      }),
      error => this.errorMsg = error;
  };
}


