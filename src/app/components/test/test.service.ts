import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';
import Question from 'src/app/models/questions.model';
import {Result} from 'src/app/models/results.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  testAnswers: Array<Result> = [];

  constructor(private http: HttpClient, private auth: AuthService) { }

  async getQuestions(idTest: string | null): Promise<Question[]> {
    const url = `${environment.apiUrl}questions/${idTest}`;
    return await <Promise<Question[]>> this.http.get(url).pipe(first()).toPromise();
  }

  async saveAnswer(question: Question) {
    const index = this.testAnswers.findIndex(answer => answer.idQuestion === question.id);
    if(index > -1) {
      this.testAnswers[index].answer = question.selectedAnswer,
      this.testAnswers[index].correct = question.correctAnswer === question.selectedAnswer?.id ? true : false
    }
    else {
      this.testAnswers.push({
        idQuestion: question.id,
        question: question.question,
        answer: question.selectedAnswer,
        correct: question.correctAnswer === question.selectedAnswer?.id ? true : false
      });
    }
  }

  async saveTest(idTest: string | null) {
    const url = `${environment.apiUrl}saveTest`;
    const resp = await <Promise<object>> this.http.post(url, {
      idUser: this.auth.getCurrentUser()?.uid,
      test: {id: idTest,  answers: this.testAnswers}
    }).pipe(first()).toPromise();
    this.testAnswers = [];
    return resp;
  }
}
