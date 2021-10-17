import { Injectable } from '@angular/core';
import { GoogleAuthProvider, Auth, signInWithPopup, User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  async login(): Promise<User> {
    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    const result = await signInWithPopup(this.auth, provider);

    // The signed-in user info.
    return result.user;
  }

  signOut() {
    this.auth.signOut();
  }

  getCurrentUser() {
    return this.auth.currentUser;
  }
}
