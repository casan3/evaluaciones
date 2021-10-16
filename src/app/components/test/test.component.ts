import { Component, OnInit } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import Answer from 'src/app/models/answers.models';
import Question from 'src/app/models/questions.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  questions$: Observable<Question[]> = of();
  selectedAnswer: Answer = {}

  constructor(private firestore: Firestore) { }

  ngOnInit(): void {
    this.questions$ = <Observable<Question[]>> collectionData(collection(this.firestore, 'tests/JyAHebIzTwqm5KuVKA8V/questions'));
  }

  getQuestions() {

  }

  saveAnswer(idQuestion: string | undefined) {
    console.log(idQuestion, this.selectedAnswer)
  }

}
