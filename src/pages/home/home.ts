import { Component } from '@angular/core';
import { Http } from '@ramonornela/http';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private http: Http) {

  }

  testGet() {

    const url = 'http://192.168.0.50:3000/test-get';

    const params = {
      id: 1,
      name: 'Ramon'
    };

    this.http.get(url, params).subscribe((t: any) => {
      console.log('success');
    }, (err) => {
    });
  }

  testPost() {
    const url = 'http://192.168.0.50:3000/test-post';
    /* const params = {

    }; */
    this.http.post(url).subscribe((t: any) => {
    }, (err) => {
    });
  }

}
