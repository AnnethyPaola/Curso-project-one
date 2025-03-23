import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IssuesService } from '../../services/issues.service';
import { LabelsSelectorComponent } from '../../components/labels-selector/labels-selector.component';
import { IssuesItemComponent } from '../../components/issues-item/issues-item.component';

@Component({
  selector: 'app-issues-list-page',
  standalone: true,
  imports: [CommonModule, LabelsSelectorComponent, IssuesItemComponent],
  templateUrl: './issues-list-page.component.html',
})
export default class IssuesListPageComponent {

  public issuesService = inject(IssuesService);

  get labelQuery() {
    return this.issuesService.labelsQuery;
  }

  get issuesQuery() {
    return this.issuesService.issuesQuery;
  }

}
