import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {Results} from 'src/app/models/results.model';
import { ResultsService } from './results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  idTest: string | null = null;
  results$: Promise<Results> | null = null;
  constructor(private route: ActivatedRoute, private service: ResultsService) {}

  ngOnInit(): void {
    this.getResults();
  }

  async getResults() {
    const params = await this.route.params.pipe(first()).toPromise();
    this.idTest = params['id'];
    this.results$ = this.service.getResults(this.idTest);
  }
}
