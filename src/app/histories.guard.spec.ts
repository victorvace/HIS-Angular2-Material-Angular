import { TestBed, async, inject } from '@angular/core/testing';

import { HistoriesGuard } from './histories.guard';

describe('HistoriesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistoriesGuard]
    });
  });

  it('should ...', inject([HistoriesGuard], (guard: HistoriesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
