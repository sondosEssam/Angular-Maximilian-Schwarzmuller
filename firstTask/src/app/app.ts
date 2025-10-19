import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { User } from "./components/user/user";
import { DUMMY_USERS } from '../dummyData';
import { Tasks } from "./components/tasks/tasks";

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
  selectedUserId!:string;
  get selectedUser(){
    return this.users.find((e)=>e.id == this.selectedUserId)!;
  }

  onSelectUser(id:string){
    this.selectedUserId = id;
    
  }
  protected readonly title = signal('FirstFile');
}
