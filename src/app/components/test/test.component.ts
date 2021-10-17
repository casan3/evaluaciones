import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import Answer from 'src/app/models/answers.model';
import Question from 'src/app/models/questions.model';
import { TestService } from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  questions$: Promise<Question[]> | null = null;
  idTest: string | null = null;
  saving: boolean = false;

  constructor(private service: TestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  async getQuestions() {
    const params = await this.route.params.pipe(first()).toPromise();
    this.idTest = params['id'];
    this.questions$ = this.service.getQuestions(this.idTest);
  }

  saveAnswer(question: Question) {
    this.service.saveAnswer(question);
  }

  async saveTest() {
    this.saving = true;
    const resp = await this.service.saveTest(this.idTest);
    this.saving = false;
    this.router.navigateByUrl(`/results/${this.idTest}`);
  }

}
