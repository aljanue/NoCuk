import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Input() user: {name: string, password: string} = {name: 'aljanue', password: '1234'};
  loginInvalid:number=0;

  onSubmit(f: NgForm) {
    if (this.user.name === f.value.name && this.user.password === f.value.password) {
      this.loginInvalid = 1;
    } else {
      this.loginInvalid = -1;
    }
  }
}
