
export interface User1{
    nombre: string;
    edad: number;
    correo: string;
    uid: string;
    password: string;
    perfil: 'visitante'| 'admin'
}

export interface auto{
   auto1:{
    modelo: string;
    patente: string;
    marca: string;
    id:string;
    uid:string;
   }
  
}

export interface estacionamiento{
    estacionamiento1:{
     capacidad: string;
     ubicacion: string;
     precio: string;
     id:string;
     uid: string;
    }
   
 }
 
