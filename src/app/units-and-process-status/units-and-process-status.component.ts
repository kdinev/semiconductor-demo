import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxDialogComponent, IgxIconComponent, IgxRippleDirective, IRowSelectionEventArgs } from '@infragistics/igniteui-angular';
import { Subject, take, takeUntil } from 'rxjs';
import { Test } from '../models/livesemiconductor-endpoints/test';
import { Process } from '../models/livesemiconductor-endpoints/process';
import { Semiconductor } from '../models/livesemiconductor-endpoints/semiconductor';
import { Outcome } from '../models/livesemiconductor-endpoints/outcome';
import { LIVESemiconductorEndpointsService } from '../services/livesemiconductor-endpoints.service';

@Component({
  selector: 'app-units-and-process-status',
  imports: [IGX_DIALOG_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxIconComponent, IgxButtonDirective, IgxRippleDirective],
  templateUrl: './units-and-process-status.component.html',
  styleUrls: ['./units-and-process-status.component.scss']
})
export class UnitsAndProcessStatusComponent implements OnInit, OnDestroy {
  @ViewChild('dialog', { static: true, read: IgxDialogComponent})
  private dialog?: IgxDialogComponent;

  private destroy$: Subject<void> = new Subject<void>();

  private _selectedSemiconductor?: Semiconductor;
  public get selectedSemiconductor(): Semiconductor | undefined {
    return this._selectedSemiconductor;
  }
  public set selectedSemiconductor(value: Semiconductor | undefined) {
    this._selectedSemiconductor = value;
    this.lIVESemiconductorEndpointsProcess$.next();
    this.lIVESemiconductorEndpointsTest$.next();
  }

  private _selectedTest?: Test;
  public get selectedTest(): Test | undefined {
    return this._selectedTest;
  }
  public set selectedTest(value: Test | undefined) {
    this._selectedTest = value;
    this.lIVESemiconductorEndpointsOutcome$.next();
  }
  public lIVESemiconductorEndpointsSemiconductor: Semiconductor[] = [];
  public lIVESemiconductorEndpointsProcess: Process[] = [];
  public lIVESemiconductorEndpointsProcess$: Subject<void> = new Subject<void>();

  public lIVESemiconductorEndpointsTest: Test[] = [];
  public lIVESemiconductorEndpointsTest$: Subject<void> = new Subject<void>();

  public lIVESemiconductorEndpointsOutcome: Outcome[] = [];
  public lIVESemiconductorEndpointsOutcome$: Subject<void> = new Subject<void>();

  constructor(
    private lIVESemiconductorEndpointsService: LIVESemiconductorEndpointsService,
  ) {}


  ngOnInit() {
    this.lIVESemiconductorEndpointsService.getSemiconductorList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.lIVESemiconductorEndpointsSemiconductor = data
    );
    this.lIVESemiconductorEndpointsService.getProcessList(this.selectedSemiconductor?.id as any).pipe(takeUntil(this.destroy$)).subscribe(
      data => this.lIVESemiconductorEndpointsProcess = data
    );
    this.lIVESemiconductorEndpointsProcess$.pipe(takeUntil(this.destroy$)).subscribe(
      () => { this.lIVESemiconductorEndpointsService.getProcessList(this.selectedSemiconductor?.id as any).pipe(take(1)).subscribe(
        data => this.lIVESemiconductorEndpointsProcess = data
    )});
    this.lIVESemiconductorEndpointsService.getTestList(this.selectedSemiconductor?.id as any).pipe(takeUntil(this.destroy$)).subscribe(
      data => this.lIVESemiconductorEndpointsTest = data
    );
    this.lIVESemiconductorEndpointsTest$.pipe(takeUntil(this.destroy$)).subscribe(
      () => { this.lIVESemiconductorEndpointsService.getTestList(this.selectedSemiconductor?.id as any).pipe(take(1)).subscribe(
        data => this.lIVESemiconductorEndpointsTest = data
    )});
    this.lIVESemiconductorEndpointsService.getOutcomeList(this.selectedTest?.id as any).pipe(takeUntil(this.destroy$)).subscribe(
      data => this.lIVESemiconductorEndpointsOutcome = data
    );
    this.lIVESemiconductorEndpointsOutcome$.pipe(takeUntil(this.destroy$)).subscribe(
      () => { this.lIVESemiconductorEndpointsService.getOutcomeList(this.selectedTest?.id as any).pipe(take(1)).subscribe(
        data => this.lIVESemiconductorEndpointsOutcome = data
    )});
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.lIVESemiconductorEndpointsProcess$.complete();
    this.lIVESemiconductorEndpointsTest$.complete();
    this.lIVESemiconductorEndpointsOutcome$.complete();
  }

  public rowSelectionChangingGrid(e: IRowSelectionEventArgs): void {
    this.selectedTest = e.newSelection;
    this.dialog?.toggle();
  }
}
