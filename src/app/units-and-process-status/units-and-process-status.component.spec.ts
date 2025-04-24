import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_LIST_DIRECTIVES, IgxIconComponent, IGX_GRID_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IgxButtonDirective, IgxRippleDirective } from '@infragistics/igniteui-angular';
import { UnitsAndProcessStatusComponent } from './units-and-process-status.component';

describe('UnitsAndProcessStatusComponent', () => {
  let component: UnitsAndProcessStatusComponent;
  let fixture: ComponentFixture<UnitsAndProcessStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitsAndProcessStatusComponent, NoopAnimationsModule, FormsModule, HttpClientTestingModule, IGX_LIST_DIRECTIVES, IgxIconComponent, IGX_GRID_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IgxButtonDirective, IgxRippleDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitsAndProcessStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
