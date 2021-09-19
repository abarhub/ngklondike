import {ValueEnum} from "./value.enum";
import {ColorEnum} from "./color.enum";

export class CardModel {
  value: ValueEnum;
  color: ColorEnum;

  constructor(value: ValueEnum, color: ColorEnum) {
    this.value = value;
    this.color = color;
  }
}
