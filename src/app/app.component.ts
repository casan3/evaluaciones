import { Component } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user: User | null = null;
  constructor(private auth: AuthService, private firebaseAuth: Auth) {
    this.checkUserAuthState();
  }
  checkUserAuthState() {
    this.firebaseAuth.onAuthStateChanged((user) => {
      this.user = user;
    });
  }

  async login() {
    this.user = await this.auth.login();
  }
  logout() {
    this.auth.signOut();
  }
}
