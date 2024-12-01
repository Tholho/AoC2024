// solution-form.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DailySolution } from '../pages/days/solutions/solution.interface';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'solution-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <form (ngSubmit)="onSubmit()">
      <textarea [(ngModel)]="input" name="solutionInput" required></textarea>
      <button type="submit" [disabled]="!input">Solve</button>
    </form>
    <div *ngIf="result">
      Result: {{ result }}
    </div>
  `
})
export class DayFormComponent {
  @Input() solution!: DailySolution;
  @Output() resultChange = new EventEmitter<any>();

  input: string = '';
  result: string = '';

  onSubmit() {
    if (this.solution && this.input) {
      this.result = this.solution.processSolution(this.input);
      this.resultChange.emit(this.result); // Optionnel, si tu veux renvoyer le résultat au parent
      this.input = '';
    }
  }
}
