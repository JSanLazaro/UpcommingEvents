import { TestBed } from '@angular/core/testing';

import { OnlineEventService } from './online-event.service';

describe('OnlineEventService', () => {
  let service: OnlineEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
