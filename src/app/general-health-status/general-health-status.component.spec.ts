import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralHealthStatusComponent } from './general-health-status.component';

describe('GeneralHealthStatusComponent', () => {
  let component: GeneralHealthStatusComponent;
  let fixture: ComponentFixture<GeneralHealthStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralHealthStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralHealthStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
