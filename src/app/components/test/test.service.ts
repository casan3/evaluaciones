import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';
import Answer from 'src/app/models/answers.model';
import Question from 'src/app/models/questions.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  testAnswers: Array<any> = [];

  constructor(private http: HttpClient, private auth: AuthService) { }

  async getQuestions(idTest: string | null): Promise<Question[]> {
    const url = `${environment.apiUrl}questions/${idTest}`;
    return await <Promise<Question[]>> this.http.get(url).pipe(first()).toPromise();
  }

  async saveAnswer(question: Question) {
    const index = this.testAnswers.findIndex(answer => answer.question.id === question.id);
    if(index > -1) {
      this.testAnswers[index].answer = question.selectedAnswer,
      this.testAnswers[index].correct = question.correctAnswer === question.selectedAnswer?.id ? true : false
    }
    else {
      this.testAnswers.push({
        question: question,
        answer: question.selectedAnswer,
        correct: question.correctAnswer === question.selectedAnswer?.id ? true : false
      });
    }
    console.log(this.testAnswers);
  }

  async saveTest(idTest: string | null) {
    const url = `${environment.apiUrl}saveTest`;
    return await <Promise<object>> this.http.post(url, {
      idUser: this.auth.getCurrentUser()?.uid,
      test: {id: idTest,  answers: this.testAnswers}
    }).pipe(first()).toPromise();
  }
}
