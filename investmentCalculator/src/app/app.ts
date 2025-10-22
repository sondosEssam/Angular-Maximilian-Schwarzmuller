import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./features/investment-calculator/components/header/header";

@Component({
  selector: 'app-root',
  imports: [ Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('investmentCalculator');
}
