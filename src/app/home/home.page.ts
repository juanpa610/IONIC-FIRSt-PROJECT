import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  number: number = 0;
  showNumber: string = '00';

  constructor() {
  }

  up() {
    this.number++;
    this.formatNumber();
  }

  down() {
    this.number--;
    this.formatNumber();
  }


  formatNumber(){
    this.showNumber = this.number <= 9 ? `0${this.number}` : `${this.number}`;
  }

}
