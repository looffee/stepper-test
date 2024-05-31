import { Component, Input } from '@angular/core';
import { Observable, map, startWith } from 'rxjs';

import { StepperComponent } from '../stepper/stepper.component';
import { StepperHeaderState } from './stepper-header-state.type';

@Component({
  selector: 'app-stepper-header',
  templateUrl: './stepper-header.component.html',
  styleUrls: ['./stepper-header.component.scss'],
})
export class StepperHeaderComponent {
  @Input() index: number = 0;

  readonly state$: Observable<StepperHeaderState>;

  constructor(private readonly stepper: StepperComponent) {
    const selectedIndex$ = this.stepper.selectedStepChanged$.pipe(
      startWith(this.stepper.selectedIndex)
    );

    this.state$ = selectedIndex$.pipe(
      map((selectedIndex) => this.getState(this.index, selectedIndex))
    );
  }

  getState(currentIndex: number, selectedIndex: number): StepperHeaderState {
    if (currentIndex === selectedIndex) {
      return 'active';
    } else if (currentIndex < selectedIndex) {
      return 'completed';
    } else {
      return 'not-visited';
    }
  }
}
