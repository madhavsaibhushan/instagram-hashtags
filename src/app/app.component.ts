import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AdMob } from '@admob-plus/ionic/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private primengConfig: PrimeNGConfig,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private admob: AdMob
  ) {
    this.primengConfig.ripple = true;
    this.initializeApp();

  }

  async setAdmobOptions() {
    const banner = new this.admob.BannerAd({
      adUnitId: 'ca-app-pub-3940256099942544/6300978111',
    });
    await banner.show();

    this.admob.on('admob.banner.impression').subscribe(async () => {
      await banner.hide();
    });
  }



  initializeApp() {
    this.platform.ready().then(async () => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      await this.admob.start();
      this.setAdmobOptions()
    });
  }
}
