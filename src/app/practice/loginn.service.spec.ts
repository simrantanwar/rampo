import { TestBed } from '@angular/core/testing';

import { LoginnService } from './loginn.service';

describe('LoginnService', () => {
  let service: LoginnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
