import { TestBed } from '@angular/core/testing';

import { PatrolService } from './patrol.service';

describe('PatrolService', () => {
  let service: PatrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
