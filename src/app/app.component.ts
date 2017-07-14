import { Component } from '@angular/core';
import { AboutComponent } from "./about/about.component";
import { RosterComponent } from "./roster/roster.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TEAM WRANGLER';
}
