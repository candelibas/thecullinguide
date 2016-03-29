import {Modal, Page, NavController, ViewController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/dashboard/aboutmodal.html'
})

export class AboutModal {
  constructor(private viewCtrl: ViewController) {
    this.viewCtrl = viewCtrl;
  }
  
  close() {
    this.viewCtrl.dismiss();
  }
}