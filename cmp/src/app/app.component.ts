import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { ServerStatusComponent } from "./components/dashboard/server-status/server-status.component";
import { TicketsComponent } from "./components/dashboard/tickets/tickets.component";
import { TrafficComponent } from "./components/dashboard/traffic/traffic.component";
import { DashboardItemComponent } from "./shared/components/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServerStatusComponent, TicketsComponent, TrafficComponent, DashboardItemComponent],
})
export class AppComponent {


}
