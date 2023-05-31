import { Component } from '@angular/core';
import { Estudiante } from "../interfaces/Estudiante";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 //atributos
 public estudiantes:Estudiante[]=[]
 
 
 //quemando 5 estudiantes
public estudiante1:Estudiante={
  id:1,
  nombre: "jose llanes",
  correo:"josellanes@gmail.com",
  documento:"14526",
  acudiente:{
    id:1,
    nombres:"Jose Barros",
    telefono:"125463"
  }

 }
 
  public constructor(){
    //llamamos al servicio y cargamos los estudiantes
    this.estudiantes.push(this.estudiante1)
    console.log(this.estudiantes)
  }

}
