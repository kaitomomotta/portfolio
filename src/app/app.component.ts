import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LeftcolumnComponent} from "./columns/leftcolumn/leftcolumn.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LeftcolumnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
