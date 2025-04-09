import { Component } from '@angular/core';
import {ButtonComponent} from "../../components/button/button.component";
import {CvButtonComponent} from "../../components/cv-button/cv-button.component";

@Component({
  selector: 'app-leftcolumn',
  standalone: true,
    imports: [
        ButtonComponent,
        CvButtonComponent
    ],
  templateUrl: './leftcolumn.component.html',
  styleUrl: './leftcolumn.component.scss'
})
export class LeftcolumnComponent {

}
