import {
  animate,
  animateChild,
  group,
  query,
  sequence,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

export interface Step {
  label: string;
}

export type Direction = 'horizontal' | 'vertical';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  animations: [
    trigger('stepperSelectedIndex', [
      transition('* => *', [
        group([
          query('app-stepper-header .line .primary', [
            style({
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }),
          ]),
          query(
            'app-stepper-header .line .primary:enter',
            [
              style({
                transform: 'translateX(-100%)',
              }),
              sequence([
                stagger(300, [
                  animate(
                    '0.3s ease-in-out',
                    style({
                      transform: 'translateX(0)',
                    })
                  ),
                ]),
              ]),
            ],
            { optional: true }
          ),
          query(
            'app-stepper-header .line .secondary:enter',
            [
              style({ width: 0 }),
              stagger(300, [
                animate('0.3s ease-in-out', style({ width: '100%' })),
              ]),
            ],
            { optional: true }
          ),
          query(
            'app-stepper-header .line .primary:leave',
            [
              stagger(-300, [
                animate(
                  '0.3s ease-in-out',
                  style({ transform: 'translateX(-100%)' })
                ),
              ]),
            ],
            { optional: true }
          ),
          query(
            'app-stepper-header .line .secondary:leave',
            [
              stagger(-300, [
                animate('0.3s ease-in-out', style({ width: '0' })),
              ]),
            ],
            { optional: true }
          ),
        ]),
      ]),
    ]),
  ],
})
export class StepperComponent implements OnInit, OnDestroy {
  @Input() steps: Step[] = [];
  @Input() currentStep = 0;
  @Input() direction: Direction = 'horizontal';
  @Input() color: string = 'teal';

  selectedIndex = 0;

  private readonly _selectedStepChanged$ = new Subject<number>();
  readonly selectedStepChanged$ = this._selectedStepChanged$.asObservable();

  ngOnInit(): void {
    this.selectedIndex = this.currentStep;
  }

  ngOnDestroy(): void {
    this._selectedStepChanged$.complete();
  }

  selectStep(index: number): void {
    this.selectedIndex = index;
    this._selectedStepChanged$.next(index);
  }

  isAllowedToSelect(index: number): boolean {
    return index - this.selectedIndex <= 1;
  }
}
