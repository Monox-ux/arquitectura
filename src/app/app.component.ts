import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { BasededatosService } from './services/basededatos.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  items: Observable<any[]>;
  constructor(
    private firestore:BasededatosService) {
    ;
  }
  getItems(){
		this.firestore.getDocument()
	}
}
