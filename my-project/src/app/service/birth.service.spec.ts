import { TestBed } from '@angular/core/testing';

import { BirthService } from './birth.service';

describe('BirthService', () => {
  let service: BirthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BirthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
