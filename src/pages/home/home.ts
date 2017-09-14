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
    const params = {
      name: 'Ramon'
    };
    this.http.post(url, {}, {body: params}).subscribe((t: any) => {
      console.log('success');
    }, (err) => {
    });
  }

  testPut() {
    const url = 'http://192.168.0.50:3000/test-put';
    const params = {
      name: 'Henrique'
    };

    this.http.put(url, {}, {body: params}).subscribe((t: any) => {
      console.log('success');
    }, (err) => {
    });
  }

  testDelete() {
    const url = 'http://192.168.0.50:3000/test-delete';
    const params = {
      id: 1
    };
    this.http.delete(url, params).subscribe((t: any) => {
      console.log('success');
    }, (err) => {
    });
  }
}
