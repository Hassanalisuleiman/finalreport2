import { TestBed } from '@angular/core/testing';

import { ConflictRecordService } from './conflict-record.service';

describe('ConflictRecordService', () => {
  let service: ConflictRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConflictRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
