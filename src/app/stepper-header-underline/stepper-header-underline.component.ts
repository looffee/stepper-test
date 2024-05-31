import { Component, Input } from '@angular/core';
import { StepperHeaderState } from '../stepper-header/stepper-header-state.type';

@Component({
  selector: 'app-stepper-header-underline',
  templateUrl: './stepper-header-underline.component.html',
  styleUrls: ['./stepper-header-underline.component.scss'],
})
export class StepperHeaderUnderlineComponent {
  @Input() headerState: StepperHeaderState | null = null;
  @Input() index = 0;
}
