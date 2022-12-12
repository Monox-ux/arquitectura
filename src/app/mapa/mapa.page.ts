import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import { GoogleMap,Marker } from '@capacitor/google-maps';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { VentanaPage } from '../ventana/ventana.page';


@Component({
  selector: 'app-mapa',
  templateUrl: 'mapa.page.html',
  styleUrls: ['mapa.page.scss'],
})
export class MapaPage implements OnInit {
@ViewChild('map')mapRef: ElementRef;
map: GoogleMap;

  constructor(private modalCtrl : ModalController   ){ }

  ionViewDidEnter(){
    this.createMap();
  }
   async createMap(){
    this.map =  await GoogleMap.create({

      id: 'my-app',
      apiKey: environment.mapsKey,
      element: this.mapRef.nativeElement,
      forceCreate: true,
      config: {
        center: {
          lat: -33.515438671841586, 
          lng: -70.71839599960909,
        },
        zoom: 8,
      },
    });
    await this.addMarkers();
  }

  async addMarkers(){
    const markers: Marker[] = [
      {
        coordinate: {
          lat: -33.51438064078939,    
          lng: -70.72241423105083,
          
        },
        title: 'Parque Simón Bolivar',
        snippet: 'best place on earth',
        iconUrl: '',
        
      },
      {
        coordinate: {
          lat: -33.511350832545716,           
          lng: -70.72016864714914,
        },
        title: 'Jardín Botánico'
      },
      {
        coordinate: {
          lat: -33.507716502125184, 
          lng: -70.70594440896606,
        },
        title: 'Parque la 93'
      },
      {
        coordinate: {
          lat: 4.6554284,
          lng: -74.1094989,
        },
        title: 'Maloka'
      },
    ];
    
    const result = await this.map.addMarkers(markers);

    this.map.setOnMarkerClickListener(async (marker ) =>{
      const modal = await this.modalCtrl.create({
        component: VentanaPage,
        componentProps: {
          marker,
        },
        breakpoints: [0, 0.3],
        initialBreakpoint: 0.3,
      });
      modal.present();
    });

    

  }



  ngOnInit() {}

}