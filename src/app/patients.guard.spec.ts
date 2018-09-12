import { TestBed, async, inject } from '@angular/core/testing';

import { PatientsGuard } from './patients.guard';

describe('PatientsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientsGuard]
    });
  });

  it('should ...', inject([PatientsGuard], (guard: PatientsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
