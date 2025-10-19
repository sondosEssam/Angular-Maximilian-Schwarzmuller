import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../../../dummyData';
import { IUser } from './user.model';
import { Card } from "../../shared/card/card";

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
// @Input({required:true}) avatar!: string;
// @Input({required:true}) name!: string;
// @Input({required:true}) id!:string;
@Input ({required:true}) user!:IUser
@Input({required:true}) selected!:boolean;
@Output() select = new EventEmitter();
get imagePath(){
  return 'assests/users/'+this.user.avatar;
}
onSelectUser(){
  this.select.emit(this.user.id);
}
}
