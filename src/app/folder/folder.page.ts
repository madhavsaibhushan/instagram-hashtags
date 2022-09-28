import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tags } from 'src/assets/json/hastag';
import { AdMob } from '@admob-plus/ionic/ngx';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  hashtags = tags
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private admob: AdMob
  ) { }

  ngOnInit() {
    this.setAdmobOptions()
  }

  async setAdmobOptions() {
    const banner = new this.admob.BannerAd({
      adUnitId: 'ca-app-pub-3940256099942544/6300978111',
    });
    console.log(banner)

    await banner.show();
    console.log(banner)
    this.admob.on('admob.banner.impression').subscribe(async () => {
      await banner.hide();
    });
  }
  routeToDisplayHashtags(data) {
    this.router.navigate(['display-hashtags'], { state: { data: data } })
  }
}
