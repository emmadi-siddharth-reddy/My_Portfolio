import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';

@Component({
  selector: 'app-root',
  imports: [AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myPortfolio';
}
