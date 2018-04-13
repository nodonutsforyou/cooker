import { TestBed, inject } from '@angular/core/testing';

import { RecipiesService } from './recipies.service';

describe('RecipiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipiesService]
    });
  });

  it('should be created', inject([RecipiesService], (service: RecipiesService) => {
    expect(service).toBeTruthy();
  }));
});
