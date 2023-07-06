import { Injectable } from '@angular/core';
import { IAuthData } from './auth-data.interface';
import { IUser } from './user.interface';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: IUser | null = null;
  authChange = new Subject<boolean>();

  constructor(private router: Router) {}

  /**
   * Create a Dummy User
   * @param authData
   */
  registerUser(authData: IAuthData) {
    this.user = {
      email: authData.email,
      userId: this.generateRandomUid(10), // später durch firestore uid ersetzen.
    };
    this.authChange.next(true);
    this.router.navigate(['/join/welcome']);
  }

  /**
   * Login Dummy User
   * @param authData
   */
  login(authData: IAuthData) {
    this.user = {
      email: authData.email,
      userId: this.generateRandomUid(10), // später durch firestore uid ersetzen.
    };
    this.authChange.next(true);
    this.router.navigate(['/join/welcome']);
  }
  guestLogin() {
    this.user = {
      email: 'guest@join.de',
      userId: this.generateRandomUid(10), // später durch firestore uid ersetzen.
    };
    this.authChange.next(true);
    this.router.navigate(['/join/welcome']);
  }

  /**
   * Change state to logout User
   */
  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  /**
   *
   * @returns
   */
  getUser() {
    return { ...this.user };
  }

  /**
   * AuthState
   * @returns
   */
  isAuth(): boolean {
    return this.user != null;
  }

  /**
   * Dummy UID als firebase ersatz
   */
  generateRandomUid(length: number = 10): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
    const charactersLength: number = characters.length;
    let uid: string = '';
    for (let i = 0; i < length; i++) {
      uid += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return uid;
  }
}
