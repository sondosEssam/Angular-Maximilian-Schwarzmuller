import { Component, computed, inject } from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthService } from './auth/auth.service';
import { CommonModule } from '@angular/common';
import { AuthDirective } from './auth/auth.directive';
import { LogDirective } from './log.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AuthComponent, LearningResourcesComponent, CommonModule,AuthDirective],
  hostDirectives:[
    LogDirective
  ]
})
export class AppComponent {

   authService = inject(AuthService);
  isAdmin = computed(()=>this.authService.activePermission()==='admin')
}
