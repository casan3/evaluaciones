import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './components/results/results.component';
import { TestComponent } from './components/test/test.component';
import { TestsComponent } from './components/tests/tests.component';

const routes: Routes = [
  {path: '', component: TestsComponent},
  {path: 'test/:id', component: TestComponent},
  {path: 'results/:id', component: ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
