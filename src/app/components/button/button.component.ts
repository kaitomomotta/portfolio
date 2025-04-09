import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({ required: true }) src: string | undefined;
  @Input({ required: true }) href: string | undefined;
  @Input() borderColor: string = '#1e1e1e';

  async onClick() {
    if (this.href == null) return;
    await new Promise(resolve => setTimeout(resolve, 100));
    window.open(this.href, '_blank');
  }
}
