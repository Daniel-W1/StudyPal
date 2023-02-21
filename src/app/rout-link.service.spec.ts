import { TestBed } from '@angular/core/testing';

import { RoutLinkService } from './rout-link.service';

describe('RoutLinkService', () => {
  let service: RoutLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
