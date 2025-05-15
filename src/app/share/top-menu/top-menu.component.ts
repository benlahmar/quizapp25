import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { MyserviceService } from '../../core/services/myservice.service';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent,RouterLink,RouterLinkActive],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css'
})
export class TopMenuComponent {

  constructor(public service:MyserviceService) {}

  ngonInit() {
    console.log("TopMenuComponent initialized");
  }
  changemessage() {
    this.service.updateMessage("Hello from TopMenuComponent");
  }
}
