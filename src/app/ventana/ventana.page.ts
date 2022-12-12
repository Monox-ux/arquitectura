import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventana',
  templateUrl: './ventana.page.html',
  styleUrls: ['./ventana.page.scss'],
})
export class VentanaPage implements OnInit {
@Input() marker: any;
garage: any ;
  constructor() {     this.garage = [
    {
      id: 'Juan',
      foto  : 'https://i.pinimg.com/564x/5e/65/bc/5e65bc980bb053f01aad23f610771aad.jpg'
    }
  ];
}

  ngOnInit() {
  }

}
