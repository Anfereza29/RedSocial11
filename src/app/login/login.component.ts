import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  viewModel = {
    user: '',
    password: ''
  };

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/home'])
  }

  canGoToHome(): Boolean {
    return this.viewModel.user !== '' && this.viewModel.password !== '';
  }
}
