import {Component, OnInit} from '@angular/core';
import {Issue} from '../../model/issue';
import {IssuesService} from '../../service/issues.service';


@Component({
  selector: 'app-create-issue',
  templateUrl: 'create-issue.component.html',
  styleUrls: ['create-issue.component.css']

})
export class CreateIssueComponent implements OnInit{

  issue = new Issue();

  constructor(private issueService: IssuesService) {}

  onSubmit() {
    console.log(`Submitting ${JSON.stringify(this.issue)}`);
    this.issueService.createIssue(this.issue);
  }

  ngOnInit(): void {
    this.issue.project = '6278944';
  }
}
