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

  // getById(id: number): Observable<Beacon> {
  //   const url = `${this.apiPath}/${id}`;

  //   return this.http.get(url).pipe(
  //     catchError(this.handleError),
  //     map(this.jsonDataToBeacon)
  //   );
  // }

  // create(beacon: Beacon): Observable<Beacon> {
  //   return this.http.post(this.apiPath, beacon).pipe(
  //     catchError(this.handleError),
  //     map(this.jsonDataToBeacon)
  //   );
  // }

  // update(beacon: Beacon): Observable<Beacon> {
  //   return this.http.put(this.apiPath, beacon).pipe(
  //     catchError(this.handleError),
  //     map(() => beacon)
  //   );
  // }

  // delete(id: number): Observable<any> {
  //   const url = `${this.apiPath}/${id}`;

  //   return this.http.delete(url).pipe(
  //     catchError(this.handleError),
  //     map(() => null)
  //   );
  // }

  // PRIVATE METHODS

  // private jsonDataToBeacons(jsonData: any[]): Beacon[] {
  //   const beacons: Beacon[] = [];

  //   jsonData.forEach(element => beacons.push(element as Beacon));

  //   return beacons;
  // }

  // private jsonDataToBeacon(jsonData: any): Beacon {
  //   return jsonData as Beacon;
  // }

  private handleError(error: any): Observable<any> {
    console.log('ERROR IN REQUEST => ', error);

    return throwError(error);
  }
}
