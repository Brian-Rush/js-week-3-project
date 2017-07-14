import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  teamName = 'The Michael Jordans of Baseball of Soccer';

  constructor() { }

  ngOnInit() {
  }

}
