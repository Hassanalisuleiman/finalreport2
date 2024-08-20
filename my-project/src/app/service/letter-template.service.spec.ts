import { TestBed } from '@angular/core/testing';

import { LetterTemplateService } from './letter-template.service';

describe('LetterTemplateService', () => {
  let service: LetterTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LetterTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
