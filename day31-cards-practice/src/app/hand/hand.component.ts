import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Card, Hand, RemoveCard } from '../models';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent {

  @Input()
  hand!: Hand;

  @Output()
  onRemoveCard = new Subject<RemoveCard>;

  removeCard(cardIndex:number) {
    this.onRemoveCard.next({
      name: this.hand.playerName,
      cardNum: cardIndex
    })
  }



}
