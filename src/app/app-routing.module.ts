import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import{
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';
import { AjustesComponent } from './compon/ajustes/ajustes.component';
import { MenuComponent } from './compon/menu/menu.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
		loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule),
		...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'home',
		loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
		...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'ajustes',component:AjustesComponent,
    ...canActivate(redirectUnauthorizedToLogin)

  },

  {
    path: 'autos',
    loadChildren: () => import('./autos/autos.module').then( m => m.AutosPageModule),
    ...canActivate(redirectUnauthorizedToLogin)

  },


  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule),

  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'ventana',
    loadChildren: () => import('./ventana/ventana.module').then( m => m.VentanaPageModule)
  },
  {
    path: 'estacionamiento',
    loadChildren: () => import('./estacionamiento/estacionamiento.module').then( m => m.EstacionamientoPageModule)
  },
  {
    path: 'camara',
    loadChildren: () => import('./camara/camara.module').then( m => m.CamaraPageModule)
  },
  {
    path: 'asignatura',
    loadChildren: () => import('./asignatura/asignatura.module').then( m => m.AsignaturaPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'fecha',
    loadChildren: () => import('./fecha/fecha.module').then( m => m.FechaPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
