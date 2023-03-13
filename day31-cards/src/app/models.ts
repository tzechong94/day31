export interface Card {
    num: number,
    suit: string
}

export interface Hand {
    cards: Card[],
    playerName: string
}

export interface RemoveCard {
    name: string,
    cardNum: number
}




export const SUIT = ["clover", "spade", "diamond", "heart"]
export const CARDNUM = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
export const PLAYERS = ["John", "Jack", "Jill", "Jimmy"]


export class Deck {
    private deck: Card[] = []

    constructor() {
        for (let s of SUIT) {
            for (let i of CARDNUM) {
                this.deck.push({
                    suit: s,
                    num: i
                })
            }
        }
        console.log('initialised card deck', this.deck)
    }

    shuffle() {
        const deckSize = this.deck.length;
        for (let i = 0; i < deckSize; i++) {
            let idx = Math.floor(Math.random() * deckSize)
            while (idx === i) {
                idx = Math.floor(Math.random() * deckSize)
            }
            const toSwap = this.deck[idx]
            this.deck[idx] = this.deck[i]
            this.deck[i] = toSwap
        }
        console.log('this deck', this.deck)
    }

    canTake(): boolean {
        return this.deck.length>0
    }

    take(count: number = 1) {
        return this.deck.splice(0, count)
    }

    dump(): Card[] {
        return this.deck
    }

}