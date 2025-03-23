import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop'
import { map, tap } from 'rxjs';
import { IssueService } from '../../services/issue.service';
import { IssueCommentComponent } from '../../components/issue-comment/issue-comment.component';

@Component({
  selector: 'app-issues-page',
  standalone: true,
  imports: [CommonModule, RouterLink, IssueCommentComponent],
  templateUrl: './issues-page.component.html',
})
export default class IssuesPageComponent {

  route = inject(ActivatedRoute);
  issueSerivce = inject(IssueService)


  issueNumber = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('number') ?? ''),
      tap((number) => this.issueSerivce.setIssueNumber(number))
    ),
  )

  issueQuery = this.issueSerivce.issueQuery;
  issueCommentsQuery = this.issueSerivce.issueCommentsQuery;

}
