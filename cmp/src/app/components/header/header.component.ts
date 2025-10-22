import { Component } from '@angular/core';
import { ButtomComponent } from "../../shared/components/buttom/buttom.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtomComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
