import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';
import { interval, Subscription, Subject } from 'rxjs';
import {
  tap,
  switchMap,
  startWith,
  takeUntil,
  takeWhile
} from 'rxjs/operators';
import { TimerService } from './services/timer.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('ding', { static: false }) audio: ElementRef<HTMLAudioElement>;

  title = 'pomodoro-timer';
  intervalSubscription: Subscription;
  ngUnsubscribe = new Subject();
  time: number;
  constructor(private timerService: TimerService) {}

  ngOnInit() {
    this.listenToTimeChanges();
    this.startInterval();
  }

  startInterval() {

  }

  listenToTimeChanges() {

  }

  toggle() {

  }

  stop() {

  }

  reset() {
    this.stop();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
