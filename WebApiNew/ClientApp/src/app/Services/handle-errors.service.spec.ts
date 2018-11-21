import { TestBed, inject } from '@angular/core/testing';

import { HandleErrorsService } from './handle-errors.service';

describe('HandleErrorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandleErrorsService]
    });
  });

  it('should be created', inject([HandleErrorsService], (service: HandleErrorsService) => {
    expect(service).toBeTruthy();
  }));
});
