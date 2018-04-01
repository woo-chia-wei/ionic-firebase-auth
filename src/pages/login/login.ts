import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';
import { HomePage } from '../home/home';
import { UserProfileServiceProvider } from '../../providers/user-profile-service/user-profile-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UserProfileServiceProvider]
})
export class LoginPage {

  private email: string;
  private password: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingController: LoadingController,
              public toastController: ToastController,
              public userProfileServiceProvider: UserProfileServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // submitLogin(){
  //   let that = this;
    
  //   let loader = this.loadingController.create({
  //     content: "Please wait..."
  //   });
    
  //   loader.present();
    
  //   this.userProfileServiceProvider.loginUser(this.email, this.password).then(
  //   authData => {
  //     //successful
  //     loader.dismiss();
  //     that.navCtrl.setRoot(HomePage);
  //   }, 
  //   error => {
  //     loader.dismiss();
  //     // Unable to log in
  //     let toast = this.toastController.create({
  //       message: error,
  //       duration: 3000,
  //       position: 'top'
  //     });
      
  //     toast.present();
  //     that.password = ""//empty the password field
    
  //   });
  // }

  forgotPassword(){

  }

  redirectToSignup(){

  }

}
