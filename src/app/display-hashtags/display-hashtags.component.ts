import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Toast } from '@awesome-cordova-plugins/toast/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
@Component({
  selector: 'app-display-hashtags',
  templateUrl: './display-hashtags.component.html',
  styleUrls: ['./display-hashtags.component.scss'],
})
export class DisplayHashtagsComponent implements OnInit {
  data: any = []
  pasted: any;
  constructor(private activatedRoute: Router,
    private toastr: Toast,
    private clipBoard: Clipboard) { }

  ngOnInit() {
    this.clipBoard.copy('hello world')

    this.data = JSON.parse(JSON.stringify(this.activatedRoute.getCurrentNavigation().extras.state?.data))
    if (!this.data.title) {
      this.activatedRoute.navigate(['/'])
    }
    this.data.text = this.data.text.split('#')
    this.data.text = this.data.text.map((tag) => {
      const a: any = {}
      a.tagName = "#" + tag,
        a.isChecked = false
      return a
    })

  }

  handleChange(ev, data) {
    data.isChecked = ev.checked
  }

  copyAll(hashtags) {
    hashtags.map((hashtag) => {
      hashtag.isChecked = true;
      return hashtag
    })
    this.copyToClipBoard()
  }

  copyToClipBoard() {
    this.toastr.show('Yayy!!Copied Successfully', '5000', 'center')

    let listOfHashtags = this.data.text.filter((hashtag) => {
      return hashtag.isChecked
    })
    listOfHashtags = JSON.parse(JSON.stringify(listOfHashtags))
    console.log(listOfHashtags)

    var hashtags = listOfHashtags.map(function (el) {
      return el.tagName;
    });

    console.log(hashtags); // array
    console.log(hashtags.join(' '))
    this.clipBoard.copy(hashtags.join(' ')).then((res) => {
      this.toastr.show('Yayy!!Copied Successfully', '5000', 'center')
    })
  }
}
