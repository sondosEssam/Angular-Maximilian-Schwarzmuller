import { Component, Input } from '@angular/core';
import { Task } from "../task/task";
import { dummyTasks } from '../../../dummyTasks';
import { NewTask } from '../new-task/new-task';
import { INewTask } from '../task/task.model';
import { TaskService } from '../../services/task-service';
@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
@Input() name!:string;
@Input() userId!:string;
isAddingTask:boolean =false;
constructor(private taskService: TaskService){}

tasks = dummyTasks;
get selectedUserTask(){
  return this.taskService.getUserTasks(this.userId)
}
onCompleteTask(id:string){
this.taskService.deletetask(id);
}
onStartAddTask(){
this.isAddingTask=true;
}
onCanelAddTask(){
  this.isAddingTask = false;
}
onAddTask(bol:boolean){
  // this.taskService.addTask(taskData, this.userId);
  this.isAddingTask = bol;


}
}
