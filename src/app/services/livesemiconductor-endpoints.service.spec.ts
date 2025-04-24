import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { LIVESemiconductorEndpointsService } from './livesemiconductor-endpoints.service';

describe('LIVESemiconductorEndpointsService', () => {
  let service: LIVESemiconductorEndpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(LIVESemiconductorEndpointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
