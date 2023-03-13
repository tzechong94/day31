export interface Card {
    suit: string,
    num: number
}

export interface Hand {
    cards: Card[],
    playerName: string
}

export interface RemoveCard {
    name: string,
    cardNum: number
}

export const SUITS = ["heart", "clover", "diamond", "spade"]
export const CARDNUM = [1,2,3,4,5,6,7,8,9,10,11,12,13]
export const PLAYERS = ["john", "jack", "jill", "jim"]


export class Deck {
    private deck: Card[] = []

    constructor() {

        for (let suit of SUITS) {
            for (let card of CARDNUM) {
                this.deck.push({
                    suit: suit,
                    num: card
                })
            }
        }
    }

    shuffle() {
        let deckSize = this.deck.length
        for (let i = 0; i < this.deck.length; i++){
            let randomIndex = Math.floor(Math.random() * deckSize)
            let toSwap = this.deck[randomIndex]
            this.deck[i] = toSwap
            this.deck[randomIndex] = this.deck[i]
        }

        console.info('shuffled deck: ', this.deck)
        return this.deck
    }

    take(numberOfCards: number) {
        return this.deck.splice(0, numberOfCards)
    }

    printDeck() {
        console.log("print deck: ", this.deck)
        return this.deck;
    }

}