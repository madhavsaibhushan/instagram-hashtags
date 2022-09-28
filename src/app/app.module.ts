import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import { CommonModule } from '@angular/common';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AdMob } from 
'@admob-plus/ionic/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { Toast } from '@awesome-cordova-plugins/toast/ngx';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CommonModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SplashScreen,StatusBar,AdMob,Clipboard,Toast],
  bootstrap: [AppComponent],
}) 
export class AppModule { }
