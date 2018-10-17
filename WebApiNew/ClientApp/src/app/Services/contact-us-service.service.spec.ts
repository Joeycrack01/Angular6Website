import { TestBed, inject } from '@angular/core/testing';

import { ContactUsServiceService } from './contact-us-service.service';

describe('ContactUsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactUsServiceService]
    });
  });

  it('should be created', inject([ContactUsServiceService], (service: ContactUsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
