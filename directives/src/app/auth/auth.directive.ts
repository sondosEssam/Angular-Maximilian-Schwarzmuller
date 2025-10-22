import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
userType = input.required<Permission>({alias:'appAuth'});
private authSerivce = inject(AuthService);
private templateRef = inject(TemplateRef);
private viewConiterRef = inject(ViewContainerRef);

  constructor() {
    effect(()=>{
      if(this.authSerivce.activePermission() === this.userType())
        this.viewConiterRef.createEmbeddedView(this.templateRef)
        else
        this.viewConiterRef.clear()
    });
   }

}
