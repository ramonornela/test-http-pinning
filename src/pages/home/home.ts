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

  ngOnInit() {
    this.http.get('http://www.google.com').subscribe((t: any) => {
      console.log('tt');
    }, (err) => {
      console.log(err);
      console.log('x');
    });
  }

}
