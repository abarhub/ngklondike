import {Component, Input, OnInit} from '@angular/core';
import {CardModel} from "../../model/card.model";
import {ValueEnum} from "../../model/value.enum";
import {ColorEnum} from "../../model/color.enum";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  card: CardModel= new CardModel(ValueEnum.AS, ColorEnum.SPADES);

  ColorEnum = ColorEnum;

  constructor() { }

  ngOnInit(): void {
  }

  value(value:ValueEnum):string{
    switch (value) {
      case ValueEnum.AS:return "1";
      case ValueEnum.TWO:return "2";
      case ValueEnum.THREE:return "3";
      case ValueEnum.FOUR:return "4";
      case ValueEnum.FIVE:return "5";
      case ValueEnum.SIX:return "6";
      case ValueEnum.SEVEN:return "7";
      case ValueEnum.EIGHT:return "8";
      case ValueEnum.NINE:return "9";
      case ValueEnum.TEN:return "10";
      case ValueEnum.KNIGHT:return "J";
      case ValueEnum.QUEEN:return "Q";
      case ValueEnum.KING:return "K";
    }
  }

  signe(color:ColorEnum):string{
    switch (color) {
      case ColorEnum.SPADES:
        return "&#9824;";
      case ColorEnum.HEART:
        return "&#10084;";
      case ColorEnum.DIAMOND:
        return "&#9670;";
      case ColorEnum.CLUB:
        return "&#9827;";
    }
  }

  color(color:ColorEnum):string{
    switch (color) {
      case ColorEnum.SPADES:
      case ColorEnum.CLUB:
        return "black-card";
      case ColorEnum.HEART:
      case ColorEnum.DIAMOND:
        return "red-card";
    }
  }

}
