import { Input, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],
})
export class CountDownComponent implements OnInit, OnDestroy {
  constructor() {}

  private _dDay: Date;
  private subscription: Subscription = new Subscription();

  public seconds: number;
  public minutes: number;
  public hours: number;
  public days: number;
  public timeDiff: number;

  private milliSecondsInSecond: number = 1000;
  private secondsInMinute: number = 60;
  private minutesInHour: number = 60;
  private hoursInADay: number = 24;

  @Input() set dDay(dDay: Date) {
    this._dDay = dDay;
  }
  ngOnInit(): void {
    this.subscription.add(
      interval(1000).subscribe(() => {
        this.getTimeDiff();
      })
    );
    console.log(this.seconds);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getTimeDiff(): void {
    this.timeDiff = new Date(this._dDay).getTime() - new Date().getTime();

    this.setTimeUnits(this.timeDiff);
  }

  private setTimeUnits(timeDiff: number): void {
    this.seconds = Math.floor(
      (timeDiff / this.milliSecondsInSecond) % this.secondsInMinute
    );
    this.minutes = Math.floor(
      (timeDiff / (this.milliSecondsInSecond * this.minutesInHour)) %
        this.minutesInHour
    );
    this.hours = Math.floor(
      (timeDiff /
        (this.milliSecondsInSecond *
          this.minutesInHour *
          this.secondsInMinute)) %
        this.hoursInADay
    );
    this.days = Math.floor(
      timeDiff /
        (this.milliSecondsInSecond *
          this.minutesInHour *
          this.secondsInMinute *
          this.hoursInADay)
    );
  }
}
