import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INewTask } from '../task/task.model';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
@Input({required:true})userId!:string;
@Output() cancel = new EventEmitter<void>();
@Output() add = new EventEmitter<boolean>();
enteredTitle = signal('');
enteredSummary = signal('');
enteredDate =signal('');

private taskService = inject(TaskService);
  onCancel(){
    this.cancel.emit();
  }
  onSubmit(){
    // this.add.emit({
    //   title:this.enteredTitle(),
    //   summary:this.enteredSummary(),
    //   date:this.enteredDate()
    // })

    let newTaskData = {
      title:this.enteredTitle(),
      summary:this.enteredSummary(),
      date:this.enteredDate()
    }
  this.taskService.addTask(newTaskData, this.userId);
  this.add.emit(false);
  }
}
