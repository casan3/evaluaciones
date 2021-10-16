import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Test from 'src/app/models/tests.model';
import { TestsService } from './tests.service';
@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {
  test: Test = {};
  tests$: Promise<Test[]> | null = null;

  constructor(private router: Router, private service: TestsService) { }

  ngOnInit(): void {
    this.tests$ = <Promise<Test[]>> this.service.getTests();
  }

  goToTest() {
    this.router.navigateByUrl(`/test/${this.test.id}`);
  }

}
