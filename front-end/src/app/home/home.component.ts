import { Component, OnInit } from '@angular/core';
import { EmitterService, EmmitterConstants } from '../shared';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 date3:Date;
 balanceAmount:any;
 searchText:string;

  constructor(
  private emitterService:EmitterService) {
    // Do stuff
  }

  ngOnInit() {

  }
  onSearch(event) {
        if (event.which === 13 || this.searchText == "") {
          this.emitterService.get(EmmitterConstants.SEARCHTEXT_CHANGE).emit(this.searchText);
        }
    }
  onSearchButton(){
    this.emitterService.get(EmmitterConstants.SEARCHTEXT_CHANGE).emit(this.searchText);
  }
}
