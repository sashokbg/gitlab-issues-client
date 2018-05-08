import {Component, OnInit} from '@angular/core';
import {IssuesService} from '../../service/issues.service';
import {Issue} from '../../model/issue';

@Component({
  selector: 'app-issues-list',
  templateUrl: 'issues-list.component.html',
  styleUrls: ['issues-list.component.css'],
})
export class IssuesListComponent implements OnInit {
  issues: Issue[];

  constructor(private issuesService: IssuesService) {

  }

  ngOnInit(): void {
    this.issuesService.findIssues()
      .subscribe(issues => this.issues = issues);
  }
}
