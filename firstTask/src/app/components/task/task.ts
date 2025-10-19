import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ITask } from './task.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
@Input({required:true}) task!:ITask;
@Output()compelete = new EventEmitter<string>();
taskService = inject(TaskService);
onCompleteTask(){
  this.taskService.deletetask(this.task.id);
  // this.compelete.emit(this.task.id);
}
}
