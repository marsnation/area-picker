import { TestBed } from '@angular/core/testing';

import { MarsNationService } from './mars-nation.service';

describe('MarsNationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarsNationService = TestBed.get(MarsNationService);
    expect(service).toBeTruthy();
  });
});
