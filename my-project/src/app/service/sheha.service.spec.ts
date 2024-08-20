import { TestBed } from '@angular/core/testing';

import { ShehaService } from './sheha.service';

describe('ShehaService', () => {
  let service: ShehaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShehaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
