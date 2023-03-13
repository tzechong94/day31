import { Component } from '@angular/core';
import { Deck, Hand, PLAYERS, RemoveCard } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  deck!: Deck

  players: Hand[] = []

  ngOnInit(): void {
    this.deck = new Deck()
    this.deck.shuffle()
    console.log('deck', this.deck.dump())

    for (let n of PLAYERS) {
      this.players.push({
        playerName: n,
        cards: this.deck.take(5)
      })
    }

    console.log("players: ", this.players)
    console.log(this.deck, "deck left")
  }

  removeCard(event: RemoveCard) {
    console.info('>>> event' , event)
    const p = this.players.find(v => v.playerName === event.name)
    p!.cards.splice(event.cardNum, 1)
  }
}
