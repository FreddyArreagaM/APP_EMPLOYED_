import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrls: ['./add-edit-empleado.component.css'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
}]
})


export class AddEditEmpleadoComponent implements OnInit{
  estadosCiviles: any[]=['Soltero(a)','Casado(a)','Divorciado(a)']
  idEmpleado: any;
  accion = 'Agregar';
  myForm: FormGroup;
  msg: any;
  constructor(private formBuilder: FormBuilder, private _empleadoService: EmpleadoService, private snackBar: MatSnackBar, private router: Router, private aRoute: ActivatedRoute){
    this.myForm=this.formBuilder.group({
      nombreCompleto:['', [Validators.required, Validators.maxLength(20)]],
      correo:['',  [Validators.required, Validators.email]],
      fechaIngreso:['',  [Validators.required]],
      telefono:['', [Validators.required, Validators.minLength(10)]],
      estadoCivil:['', [Validators.required]],
      sexo:['', [Validators.required]]
    });

    this.idEmpleado = this.aRoute.snapshot.params['id'];

  }

  ngOnInit(): void {
      if(this.idEmpleado!=null){
        this.accion='Editar'
        this.obtenerEmpleado();
      }
  }

  guardarEmpleado(){
    const empleado: Empleado ={
      nombreCompleto : this.myForm.get('nombreCompleto')?.value,
      correo: this.myForm.get('correo')?.value,
      fechaIngreso: this.myForm.get('fechaIngreso')?.value,
      telefono: this.myForm.get('telefono')?.value,
      estadoCivil: this.myForm.get('estadoCivil')?.value,
      sexo: this.myForm.get('sexo')?.value
    }

    if(this.idEmpleado!=null){
      this.msg = 'editado';
      this._empleadoService.updateEmpleado(empleado,this.idEmpleado);
    }
    else{
      this.msg= 'agregado'
      this._empleadoService.addEmpleado(empleado);
    }

    this.snackBar.open('El empleado fue ' + this.msg + ' con éxito!', '', {
      duration: 3000
    });
    this.router.navigate(['/']);
  }

  obtenerEmpleado(){
    const empleado: Empleado = this._empleadoService.getEmpleado(this.idEmpleado);
    this.myForm.get('nombreCompleto')?.setValue(empleado.nombreCompleto)
    this.myForm.get('correo')?.setValue(empleado.correo)
    this.myForm.get('fechaIngreso')?.setValue(empleado.fechaIngreso)
    this.myForm.get('telefono')?.setValue(empleado.telefono)
    this.myForm.get('estadoCivil')?.setValue(empleado.estadoCivil)
    this.myForm.get('sexo')?.setValue(empleado.sexo)
  }
}
