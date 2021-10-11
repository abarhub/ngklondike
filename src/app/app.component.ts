import {Component, OnInit} from '@angular/core';
import {CardModel} from "./model/card.model";
import {ValueEnum} from "./model/value.enum";
import {ColorEnum} from "./model/color.enum";
import {CardService} from "./service/card.service";
import {DragulaService} from "ng2-dragula";

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
  cardVisible:CardModel|null=null;

  listCard:CardModel[]=[];
  noDeck=-1;

  constructor(private cardService:CardService, private dragulaService: DragulaService) {
    dragulaService.createGroup("PILE_SRC", {
      moves: (el, container, handle) => {
        //console.log('PILE_SRC',el,container,handle);
        //return handle.className === 'handle';
        return true;
      },
      accepts: (el, target, source, sibling)=> {
        console.log('PILE_SRC accepts',el,target,source,sibling);
        if(el) {
          //let tmp=ng.getComponent(el);
        }
        return true;
      }
    });
  }

  ngOnInit(): void {
    this.listCard=this.cardService.createCards();

  }


  selectDeck() {
    if(this.noDeck>=-1){
      this.noDeck++;
      this.cardVisible=this.listCard[this.noDeck];
    }
  }
}
