import { TestBed, inject } from '@angular/core/testing';

import { SectionServiceService } from './section-service.service';

describe('SectionServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SectionServiceService]
    });
  });

  it('should be created', inject([SectionServiceService], (service: SectionServiceService) => {
    expect(service).toBeTruthy();
  }));
});
