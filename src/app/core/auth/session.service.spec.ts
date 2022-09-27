import { TestBed } from '@angular/core/testing';

import { CurrentSessionService } from './current.session.service';

describe('SessionService', () => {
  let service: CurrentSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
