import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cv-button',
  standalone: true,
  imports: [],
  templateUrl: './cv-button.component.html',
  styleUrl: './cv-button.component.scss'
})
export class CvButtonComponent {
  @Input({ required: true }) text: string | undefined;
  @Input({ required: true }) href: string | undefined;
  @Input() borderColor: string = '#1e1e1e';

  async onClick() {
    if (this.href == null) return;
    await new Promise(resolve => setTimeout(resolve, 100));
    window.open(this.href, '_blank');
  }
}
