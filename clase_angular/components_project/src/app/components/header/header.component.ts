import { Component } from '@angular/core';
import { UlComponent } from './ul/ul.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UlComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
