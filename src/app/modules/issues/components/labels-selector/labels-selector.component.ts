import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { GitHubLabel } from '../../interfaces';

@Component({
  selector: 'issues-labels-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labels-selector.component.html',
})
export class LabelsSelectorComponent {

  public labels = input.required<GitHubLabel[]>();

}
