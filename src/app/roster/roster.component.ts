import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player }  from "../player.model";
import { PlayerService }  from "../player.service";


@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss'],
  providers: [PlayerService]
})
export class RosterComponent implements OnInit {
  players: Player[];

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  goToDetailPage(clickedPlayer: Player) {
    this.router.navigate(['players', clickedPlayer.id]);
  }

}
