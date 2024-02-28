import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  
  loginInvalid:number=0;
  import=[RouterLink];
  constructor(private _loginService: LoginService, private router: Router) { }
  route = '';
  ngOnInit(){
    this.route = this._loginService.getRoute();
  }
  onSubmit(f: NgForm) {
    if (this._loginService.getUser().name === f.value.name && this._loginService.getUser().password === f.value.password) {
      this.loginInvalid = 1;
      this._loginService.setLogged(true);
      this.router.navigate([this.route]);
    } else {
      this.loginInvalid = -1;
    }
  }
}
