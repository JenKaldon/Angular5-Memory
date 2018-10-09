import { TestBed } from '@angular/core/testing';

import { BoardGeneratorService } from './board-generator.service';

describe('BoardGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoardGeneratorService = TestBed.get(BoardGeneratorService);
    expect(service).toBeTruthy();
  });
});
