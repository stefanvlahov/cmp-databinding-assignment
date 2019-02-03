import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  private counter = 0;
  interval;
  @Output() increment = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.interval = setInterval(() => {
      this.increment.emit(this.counter);
      this.counter++;
      }, 1000);
  }

  stopGame() {
    clearInterval(this.interval);
  }
}
