import { TestBed } from '@angular/core/testing';

import { PrintedLetterService } from './printed-letter.service';

describe('PrintedLetterService', () => {
  let service: PrintedLetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrintedLetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
