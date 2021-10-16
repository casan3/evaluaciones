import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { collection } from '@firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { Observable, of } from 'rxjs';

interface Test {
  level?: string,
  name?: string,
  id?: string
}

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {
  test: Test = {};
  tests$: Observable<Test[]> = of();

  constructor(private firestore: Firestore, private router: Router) { }

  ngOnInit(): void {
    this.tests$ = <Observable<Test[]>> collectionData(collection(this.firestore, 'tests'));
  }

  goToTest() {
    this.router.navigateByUrl(`/test/${this.test.id}`);
  }

}
