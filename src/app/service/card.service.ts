import {CardModel} from "../model/card.model";
import {ValueEnum} from "../model/value.enum";
import {ColorEnum} from "../model/color.enum";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class CardService {
  createCards(): CardModel[] {
    const tab: CardModel[] = [];
    for (let color of this.listColors()) {
      for (let value2 of this.listValues()) {
        tab.push(new CardModel(value2, color));
      }
    }
    return tab;
  }

  listValues(): ValueEnum[] {
    return [ValueEnum.AS,
      ValueEnum.TWO,
      ValueEnum.THREE,
      ValueEnum.FOUR,
      ValueEnum.FIVE,
      ValueEnum.SIX,
      ValueEnum.SEVEN,
      ValueEnum.EIGHT,
      ValueEnum.NINE,
      ValueEnum.TEN,
      ValueEnum.KNIGHT,
      ValueEnum.QUEEN,
      ValueEnum.KING
    ];
  }

  listColors(): ColorEnum[] {
    return [ColorEnum.SPADES,
      ColorEnum.HEART,
      ColorEnum.DIAMOND,
      ColorEnum.CLUB
    ];
  }
}
