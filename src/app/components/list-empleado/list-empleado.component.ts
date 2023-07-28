import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado';
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements OnInit{
  displayedColumns: string[] = ['nombreCompleto', 'correo', 'estadoCivil', 'fechaIngreso','sexo','telefono','acciones'];
  dataSource = new MatTableDataSource<Empleado>();
  listEmpleado: Empleado[]=[];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;  //Se bindea con los componentes del html
  @ViewChild(MatSort, { static: true }) sort!: MatSort; //Se bindea con los componentes del html

  constructor(private empleadoService: EmpleadoService, private dialog: MatDialog, private snackbar: MatSnackBar){}

  ngOnInit(): void {
    this.cargarEmpleados();

  }

  //Metodo para filtrar la tabla 
  Filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //Review the code pleas?
  cargarEmpleados(){
    this.listEmpleado=this.empleadoService.getEmpleados();
    this.dataSource = new MatTableDataSource<Empleado>(this.listEmpleado);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  eliminarEmpleado(index: number){
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: "350px",
      data: {mensaje: 'Está seguro que desea eliminar el Empleado?'},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'Aceptar'){
        this.empleadoService.deleteEmpleado(index);
        this.cargarEmpleados();
        this.snackbar.open('El empleado fue eliminado con éxito!', '', {
          duration: 3000
        });
      }

    });
  }
  

}
