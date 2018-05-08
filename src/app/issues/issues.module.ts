import {NgModule} from '@angular/core';
import {IssuesService} from './service/issues.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {CreateIssueComponent} from './components/create-issue/create-issue.component';
import {IssuesListComponent} from './components/issues-list/issues-list.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    IssuesListComponent,
    CreateIssueComponent
  ],
  providers: [
    IssuesService
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ]
})
export class IssuesModule {

}
