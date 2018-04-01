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

  constructor(public http: HttpClient) {
    console.log('Hello UserProfileServiceProvider Provider');

    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('users');
    console.log('userProfile', this.userProfile)
  }

  loginUser(email: string, password: string): any{
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

}
