import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule, AngularFireDatabase } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyDNB6kMSegWGaLeJhd9A-jfhc13tvD5VdE",
  authDomain: "liftlog-85f43.firebaseapp.com",
  databaseURL: "https://liftlog-85f43.firebaseio.com",
  storageBucket: "liftlog-85f43.appspot.com",
  messagingSenderId: "401385670505"
};

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ AngularFireDatabase ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
