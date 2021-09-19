import {Component, OnInit} from '@angular/core';
import {CardModel} from "./model/card.model";
import {ValueEnum} from "./model/value.enum";
import {ColorEnum} from "./model/color.enum";
import {CardService} from "./service/card.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ngklondike';

  card:CardModel=new CardModel(ValueEnum.FOUR, ColorEnum.CLUB);
  card2:CardModel=new CardModel(ValueEnum.TEN, ColorEnum.HEART);
  card3:CardModel=new CardModel(ValueEnum.KNIGHT, ColorEnum.SPADES);

  listCard:CardModel[]=[];

  constructor(private cardService:CardService) {
  }

  ngOnInit(): void {
    this.listCard=this.cardService.createCards();

  }




}
