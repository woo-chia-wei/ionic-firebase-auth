import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { UserProfileServiceProvider } from '../../providers/user-profile-service/user-profile-service';

import { HomePage } from '../home/home';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
  providers: [UserProfileServiceProvider]
})
export class SignUpPage {

  private email: string;
  private password: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public userProfileServiceProvider: UserProfileServiceProvider,
              public toastController: ToastController,
              public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  doSignup(){

    let account = {
      email: this.email,
      password: this.password
    }

    var that = this;

    var loader = this.loadingController.create({
      content: "Please wait...",  
      duration: 3000
    });

    loader.present();
    
    this.userProfileServiceProvider.signUpUser(account).then(
      authData => {
        //successful
        loader.dismiss();
        that.navCtrl.setRoot(HomePage);
      }, 
      error => {
        loader.dismiss();
        // Unable to log in
        let toast = this.toastController.create({
          message: error,
          duration: 3000,
          position: 'top'
        });
        toast.present();

        that.password = ""//empty the password field
      });
  }

}
