import { Component } from '@angular/core';
import { GoogleAuthProvider, Auth, signInWithPopup, User } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user: User | null = null;
  constructor(public auth: Auth) {
    this.checkUserAuthState();
  }
  checkUserAuthState() {
    this.auth.onAuthStateChanged((user) => {
      this.user = user;
    });
  }
  async login() {
    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    const result = await signInWithPopup(this.auth, provider);

    // The signed-in user info.
    this.user = result.user;
    console.log(this.user);
  }
  logout() {
    this.auth.signOut();
  }
}
