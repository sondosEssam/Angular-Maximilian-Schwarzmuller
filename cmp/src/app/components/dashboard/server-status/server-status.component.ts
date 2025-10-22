import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  currentStatus =signal<'offline'|'online'|'unknown'>('offline');
  ngOnInit(){
    const interval = setInterval(()=>{
      const rnd = Math.random();
      
    })
  }

}
