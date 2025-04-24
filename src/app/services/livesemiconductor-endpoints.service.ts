import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Test } from '../models/livesemiconductor-endpoints/test';
import { Process } from '../models/livesemiconductor-endpoints/process';
import { Semiconductor } from '../models/livesemiconductor-endpoints/semiconductor';
import { Outcome } from '../models/livesemiconductor-endpoints/outcome';
import { ErrorHandlerService } from './error-handler.service';

const API_ENDPOINT = 'https://localhost:7173';

@Injectable({
  providedIn: 'root'
})
export class LIVESemiconductorEndpointsService {
  constructor(
    private http: HttpClient
  ) { }

  public getSemiconductorList(): Observable<Semiconductor[]> {
    return this.http.get<Semiconductor[]>(`${API_ENDPOINT}/Semiconductors`)
      .pipe(catchError(ErrorHandlerService.handleError<Semiconductor[]>('getSemiconductorList', [])));
  }

  public getProcessList(semiconductorId: number): Observable<Process[]> {
    if (!semiconductorId) {
      return of([]);
    }
    return this.http.get<Process[]>(`${API_ENDPOINT}/Processes/semiconductor/${semiconductorId}`)
      .pipe(catchError(ErrorHandlerService.handleError<Process[]>('getProcessList', [])));
  }

  public getTestList(semiconductorId: number): Observable<Test[]> {
    if (!semiconductorId) {
      return of([]);
    }
    return this.http.get<Test[]>(`${API_ENDPOINT}/Tests/semiconductor/${semiconductorId}`)
      .pipe(catchError(ErrorHandlerService.handleError<Test[]>('getTestList', [])));
  }

  public getOutcomeList(testId: number): Observable<Outcome[]> {
    if (!testId) {
      return of([]);
    }
    return this.http.get<Outcome[]>(`${API_ENDPOINT}/Outcomes/test/${testId}`)
      .pipe(catchError(ErrorHandlerService.handleError<Outcome[]>('getOutcomeList', [])));
  }
}
