import { TestBed } from '@angular/core/testing';

import { WordListGeneratorService } from './word-list-generator.service';

describe('WordListGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordListGeneratorService = TestBed.get(WordListGeneratorService);
    expect(service).toBeTruthy();
  });
});
