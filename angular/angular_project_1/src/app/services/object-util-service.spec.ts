import { TestBed } from '@angular/core/testing';

import { ObjectUtilService } from './object-util-service';

describe('ObjectUtilService', () => {
  let service: ObjectUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
