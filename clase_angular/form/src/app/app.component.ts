import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClassicFormComponent } from './classic-form/classic-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClassicFormComponent, ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  userList: any = [];
  title = 'form';

  userService: UserService = inject(UserService);

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) =>{
      this.userList = data;
    });
  }


}
