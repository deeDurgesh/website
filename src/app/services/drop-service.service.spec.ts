import { TestBed } from '@angular/core/testing';

import { DropServiceService } from './drop-service.service';

describe('DropServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DropServiceService = TestBed.get(DropServiceService);
    expect(service).toBeTruthy();
  });
});
