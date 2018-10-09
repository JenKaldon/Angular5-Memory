import { TestBed } from '@angular/core/testing';

import { MemoryBoardService } from './memory-board.service';

describe('MemoryBoardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemoryBoardService = TestBed.get(MemoryBoardService);
    expect(service).toBeTruthy();
  });
});
