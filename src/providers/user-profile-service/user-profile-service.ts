import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

/*
  Generated class for the UserProfileServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProfileServiceProvider {

  private data: string;
  private fireAuth: any;
  private userProfile: any;
  public userId: any;
  public userLogin: string;

  constructor(public http: HttpClient) {
    console.log('Hello UserProfileServiceProvider Provider');

    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('users');
    console.log('userProfile', this.userProfile)
  }

  loginUser(email: string, password: string): any{
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  signUpUser(account: {}): any{
    return this.fireAuth.createUserWithEmailAndPassword(account['email'], account['password']).then((newUser) => {
      //sign in the user
      this.fireAuth.signInWithEmailAndPassword(account['email'], account['password']).then((authenticatedUser) => {
        //successful login, create user profile
        this.userProfile.child(authenticatedUser.uid).set(
          account
        );

        this.userId = authenticatedUser.uid;
      });
    });
  }

}
