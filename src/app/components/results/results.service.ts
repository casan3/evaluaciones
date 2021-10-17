import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';
import {Results} from 'src/app/models/results.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private auth: AuthService, private http: HttpClient) { }

  async getResults(idTest: string | null): Promise<Results> {
    const idUser = this.auth.getCurrentUser()?.uid
    const url = `${environment.apiUrl}results/${idUser}/${idTest}`;
    return await <Promise<Results>> this.http.get(url).pipe(first()).toPromise();
  }
}
