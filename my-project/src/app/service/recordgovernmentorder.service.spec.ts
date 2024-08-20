import { TestBed } from '@angular/core/testing';

import { RecordgovernmentorderService } from './recordgovernmentorder.service';

describe('RecordgovernmentorderService', () => {
  let service: RecordgovernmentorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordgovernmentorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
