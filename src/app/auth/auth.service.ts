import { Injectable } from '@angular/core';
import { IAuthData } from './auth-data.interface';
import { IUser } from './user.interface';
import { Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import {
  Auth,
  User,
  UserCredential,
  authState,
  createUserWithEmailAndPassword,
  signInAnonymously,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authChange$ = new Subject<boolean>();
  authStateSubscription!: Subscription;
  private isAuthenticated: boolean = false;

  constructor(private router: Router, private ngAuth: Auth) {}

  initAuthListerner(): void {
    this.authStateSubscription = authState(this.ngAuth).subscribe((aUser) => {
      if (aUser) {
        this.isAuthenticated = true;
        this.authChange$.next(true);
        this.router.navigate(['/join/welcome']);
      } else {
        this.authChange$.next(false);
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
      }
    });
  }

  registerUser(authData: IAuthData) {
    // start loadingspinner
    createUserWithEmailAndPassword(
      this.ngAuth,
      authData.email,
      authData.password
    )
      .then((result: UserCredential) => {
        // hide loadingspinner
      })
      .catch((error) => {
        console.warn(error.message);
      });
  }

  login(authData: IAuthData) {
    // start loadingspinner
    signInWithEmailAndPassword(this.ngAuth, authData.email, authData.password)
      .then((result: UserCredential) => {
        // stop loadingspinner
      })
      .catch((error) => {
        console.warn(error.message);
      });
  }

  guestLogin() {
    signInAnonymously(this.ngAuth);
  }

  /**
   * Change state to logout User
   */
  logout() {
    signOut(this.ngAuth);
  }

  isAuth(): boolean {
    return this.isAuthenticated;
  }

  ngOnDestroy(): void {
    this.authStateSubscription.unsubscribe();
  }
}
