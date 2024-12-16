import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
@Input() title: string = '';

isDark: boolean = false;

@Output() isDarkFromChild: EventEmitter<boolean> = new EventEmitter();

toggleTheme(){
this.isDark = !this.isDark;
this.isDarkFromChild.emit(this.isDark);
}

}
