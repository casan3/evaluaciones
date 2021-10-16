import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { first } from 'rxjs/operators';
import Test from '../../models/tests.model'

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  constructor(private http: HttpClient) { }

  async getTests(): Promise<Test[]> {
    const url = `${environment.apiUrl}tests`;
    return await <Promise<Test[]>> this.http.get(url).pipe(first()).toPromise();
  }
}
