import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { GitHubIssues, State } from '../../interfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'issues-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './issues-item.component.html',
})
export class IssuesItemComponent {
  issue = input.required<GitHubIssues>();

  get isOpen() {
    return this.issue().state === State.Open;
  }

}
