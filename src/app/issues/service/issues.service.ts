import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Issue} from '../model/issue';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class IssuesService {

  constructor(
    private http: HttpClient
  ) {}


  findIssues(): Observable<Issue[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'PRIVATE-TOKEN': environment.API_KEY}
      )};

    return this.http.get<Issue[]>('https://gitlab.com/api/v4/issues', httpOptions);
  }

  createIssue(issue: Issue): void {


    const httpOptions = {
      headers: new HttpHeaders({
        'PRIVATE-TOKEN': environment.API_KEY}
      ),
      params: new HttpParams().set('title', issue.title)
    };

    const url = `https://gitlab.com/api/v4/projects/${issue.project}/issues`;

    console.log(url);
    this.http.post(url, null, httpOptions)
      .subscribe(result => console.log(JSON.stringify(result)));
  }
}
