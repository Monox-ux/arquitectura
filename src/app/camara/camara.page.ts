import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {
code: any;

  constructor(private barcodeScanner: BarcodeScanner) { }


 scan(){
  this.barcodeScanner.scan().then(barcodeData => {
    console.log('Barcode data', this.code);
    this.code = barcodeData.text;

   }).catch(err => {
       console.log('Error', err);
   });
 };

  ngOnInit() {
  }

}
