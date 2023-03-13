import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Hand, RemoveCard } from '../models';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent {

  @Input()
  hand!: Hand

  @Output()
  onRemoveCard = new Subject<RemoveCard>();
  
  removeCard(idx:number) {
    console.log(`>>> card: ${idx}`)
    this.onRemoveCard.next({
      name: this.hand.playerName,
      cardNum: idx
    })
  }
}
