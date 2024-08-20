import { TestBed } from '@angular/core/testing';

import { GovernmentOrderService } from './government-order.service';

describe('GovernmentOrderService', () => {
  let service: GovernmentOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GovernmentOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
