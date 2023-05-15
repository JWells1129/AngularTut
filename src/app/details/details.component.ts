import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works!
      this is more information
      lets add a little more stuff right here
    </p>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
}
