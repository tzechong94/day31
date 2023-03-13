import { Component } from '@angular/core';
import { Deck, Hand, PLAYERS, RemoveCard } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day31-cards-practice';

  deck!: Deck
  players: Hand[] = []

  ngOnInit(): void {
    this.deck = new Deck()
    this.deck.shuffle()
    for (let player of PLAYERS) {
      this.players.push({
        playerName: player,
        cards: this.deck.take(5)
      })
    }

  }

  removeCardParent(event: RemoveCard){
    const p = this.players.find(v => v.playerName === event.name)
    p?.cards.splice(event.cardNum,1)
  }
}
