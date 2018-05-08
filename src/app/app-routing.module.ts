import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IssuesListComponent} from './issues/components/issues-list/issues-list.component';
import {CreateIssueComponent} from './issues/components/create-issue/create-issue.component';

const routes: Routes = [
  {path: '', component: IssuesListComponent},
  {path: 'create', component: CreateIssueComponent},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
