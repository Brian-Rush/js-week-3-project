import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [PlayerService]
})
export class AdminComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm(firstName: string, lastName: string, image: string, notes: string) {
    var newPlayer: Player = new Player(firstName, lastName, image, notes);
    this.playerService.addPlayer(newPlayer);
  }

}
