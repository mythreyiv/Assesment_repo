import { TestBed } from '@angular/core/testing';

import { StudservService } from './studserv.service';

describe('StudservService', () => {
  let service: StudservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
