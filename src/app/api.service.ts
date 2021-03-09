import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {KindergartenResponse} from './model/Kindergarten';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public getData(): Observable<KindergartenResponse> {
    return this.httpClient.get<KindergartenResponse>(
      'https://czysciochowo.pl/api/kindergarten/applications?limit=1000&order=votes&orderDir=desc'
    );
  }
}
