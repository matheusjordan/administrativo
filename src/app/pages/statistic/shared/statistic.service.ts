import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// import Beacon from './beacon.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  private userApiPath = 'api/users';
  private beaconApiPath = 'api/beacons';
  private visitorsApiPath = 'api/visitors';

  constructor(
    private http: HttpClient
  ) { }

  getTotalUsers(): Observable<any[]> {
    return this.http.get(this.userApiPath).pipe(
      catchError(this.handleError)
    );
  }

  getTotalBeacons(): Observable<any[]> {
    return this.http.get(this.beaconApiPath).pipe(
      catchError(this.handleError)
    );
  }

  getTotalVisitors(): Observable<any[]> {
    return this.http.get(this.visitorsApiPath).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<any> {
    console.log('ERROR IN REQUEST => ', error);

    return throwError(error);
  }
}
