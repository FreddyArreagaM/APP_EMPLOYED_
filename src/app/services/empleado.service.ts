import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listEmpleado: Empleado[] = [
    { 
      nombreCompleto: 'Lucas Martinez',
      correo: 'lmartinez@gmail.com', 
      telefono: 24844848, 
      sexo: 'M',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero(a)' 
    },

    { nombreCompleto: 'Miranda Cohen',
      correo: 'mirandacohen@gmail.com', 
      telefono: 41444151, 
      sexo: 'F',
      fechaIngreso: new Date('1995-05-27'),
      estadoCivil: 'Soltero(a)' 
    },

    { 
      nombreCompleto: 'Christhian Bumster',
      correo: 'cbum23@gmail.com', 
      telefono: 23459217, 
      sexo: 'M',
      fechaIngreso: new Date('1996-10-20'),
      estadoCivil: 'Soltero(a)' 
    },
   
    {
      nombreCompleto: 'Juan Pérez',
      correo: 'jperez@gmail.com',
      telefono: 12345678,
      sexo: 'M',
      fechaIngreso: new Date('1990-01-01'),
      estadoCivil: 'Casado(a)'
    },
    
    {
      nombreCompleto: 'María García',
      correo: 'mgarcia@gmail.com',
      telefono: 987654321,
      sexo: 'F',
      fechaIngreso: new Date('1995-02-02'),
      estadoCivil: 'Soltero(a)'
    },
    
    {
      nombreCompleto: 'Pedro López',
      correo: 'plopez@gmail.com',
      telefono: 3210987654,
      sexo: 'M',
      fechaIngreso: new Date('1997-03-03'),
      estadoCivil: 'Divorciado(a)'
    },
    
    {
      nombreCompleto: 'Ana Sánchez',
      correo: 'asanchez@gmail.com',
      telefono: 5432109876,
      sexo: 'F',
      fechaIngreso: new Date('1999-04-04'),
      estadoCivil: 'Viudo(a)'
    },
    
    {
      nombreCompleto: 'José Romero',
      correo: 'jromero@gmail.com',
      telefono: 7654321098,
      sexo: 'M',
      fechaIngreso: new Date('2001-05-05'),
      estadoCivil: 'Casado(a)'
    },
    
    {
      nombreCompleto: 'Susana Martínez',
      correo: 'smartinez@gmail.com',
      telefono: 9876543210,
      sexo: 'F',
      fechaIngreso: new Date('2003-06-06'),
      estadoCivil: 'Soltero(a)'
    },
    
    {
      nombreCompleto: 'Carlos González',
      correo: 'cgonzalez@gmail.com',
      telefono: 1234567890,
      sexo: 'M',
      fechaIngreso: new Date('2005-07-07'),
      estadoCivil: 'Divorciado(a)'
    },
    
    {
      nombreCompleto: 'Laura Fernández',
      correo: 'lfernandez@gmail.com',
      telefono: 98765432109,
      sexo: 'F',
      fechaIngreso: new Date('2007-08-08'),
      estadoCivil: 'Viudo(a)'
    },
    
    {
      nombreCompleto: 'David Pérez',
      correo: 'dperez@gmail.com',
      telefono: 12345678901,
      sexo: 'M',
      fechaIngreso: new Date('2009-09-09'),
      estadoCivil: 'Casado(a)'
    }
    
  ];

  constructor() { 

  }

  getEmpleados(){
    return this.listEmpleado.slice();
    //slice() -> se utiliza para obtener una copia de los datos del arrayList
  }

  deleteEmpleado(index: number){
    return this.listEmpleado.splice(index,1);
    //splice() -> sirve para eliminar un registro en base a un indice
  }

  addEmpleado(empleado: Empleado){
    return this.listEmpleado.unshift(empleado);
    //unshift() -> se uiliza para agregar un nuevo registro
  }

  //Metodo para obtener un empleado en específico
  getEmpleado(index: number){
    return this.listEmpleado[index];
  }

  updateEmpleado(empleado: Empleado, index: number){
    this.listEmpleado[index].nombreCompleto=empleado.nombreCompleto;
    this.listEmpleado[index].correo=empleado.correo;
    this.listEmpleado[index].telefono=empleado.telefono;
    this.listEmpleado[index].fechaIngreso=empleado.fechaIngreso;
    this.listEmpleado[index].sexo=empleado.sexo;
    this.listEmpleado[index].estadoCivil=empleado.estadoCivil;
  }
}
