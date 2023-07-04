import { Injectable, OnDestroy } from '@angular/core';
import { authState, Auth, User } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements OnDestroy {
  // private auth: Auth = inject(Auth);
  authState$ = authState(this.auth);
  authStateSubscription: Subscription;

  constructor(private auth: Auth) {
    this.authStateSubscription = this.authState$.subscribe(
      (aUser: User | null) => {
        //handle auth state changes here. Note, that user will be null if there is no currently logged in user.
        console.log(aUser);
      }
    );
  }

  ngOnDestroy() {
    this.authStateSubscription.unsubscribe();
  }
}
