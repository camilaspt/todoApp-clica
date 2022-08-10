import { Component, OnInit, HostListener } from '@angular/core';
import { Task } from 'src/app/interface/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [
    {
      titulo: 'Sacar a pasear al perro',
      descripcion: 'Dar una vuelta a la manzana con el perro.',
      fecha_creacion: '26/10/2022',
      hora_creacion: '22:00'
    },
    {
      titulo: 'Lavar los platos',
      descripcion: 'Recordar usar esponja y detergente.',
      fecha_creacion: '26/09/2022',
      hora_creacion: '10:00'
  },
  {
      titulo: 'Llamar a la empresa de internet.',
      descripcion: 'Pedir descuentos y amenazar con dar de baja el servicio.',
      fecha_creacion: '28/04/2022',
      hora_creacion: '09:00'
  },
  {
      titulo: 'Comprar alimento de tortuga.',
      descripcion: 'Manuelita se esta quedando sin alimento :(',
      fecha_creacion: '22/07/2022',
      hora_creacion: '12:00'
  }]

  selected: Task;

  constructor() {
    this.selected = this.tasks[0];
   }

  ngOnInit(): void {
  }

  selectedTask(item: Task){
    this.selected = item;
  }
}
