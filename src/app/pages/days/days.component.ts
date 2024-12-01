import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DayFormComponent } from '../../components/dayForm.component';
import { DailySolution } from './solutions/solution.interface';
import { solutions } from './solutions/index';


@Component({
  selector: 'days-page',
  standalone: true,
  imports: [FormsModule, CommonModule, DayFormComponent],
  template: `
    <div class="container">
    <div *ngIf="solutionA">
      <h2>First part</h2>
      <solution-form [solution]="solutionA" (resultChange)="onResultA($event)"></solution-form>
    </div>

    <div *ngIf="solutionB">
      <h2>Second part</h2>
      <solution-form [solution]="solutionB" (resultChange)="onResultB($event)"></solution-form>
    </div>
    </div>
  `,
  styleUrl: './days.component.scss',
})
export class DaysComponent implements OnInit {
  solutionA!: DailySolution;
  solutionB!: DailySolution;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(async (params) => {
      const dayId = params['id'];
      await this.loadSolution(dayId);
    });
  }

  private async loadSolution(dayId: string) {
    try {
      const daySolutions = solutions[dayId];

      const SolutionClassA = daySolutions.SolutionA;
      const SolutionClassB =  daySolutions.SolutionB;

      console.log('SolutionClassA:', SolutionClassA);
      console.log('SolutionClassB:', SolutionClassB);

      this.solutionA = new SolutionClassA();
      this.solutionB = new SolutionClassB();
      console.log(this.solutionA)
    } catch (error) {
      console.error('Could not load solution', error);
    }
  }

  onResultA(result: any) {
    console.log('Result A:', result);
  }

  onResultB(result: any) {
    console.log('Result B:', result);
  }
}

/*
export class DaysComponent implements OnInit, OnDestroy {
  dayId: string | null = null;
  private routeSub: Subscription | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('DaysComponent initialized');
    this.routeSub = this.route.paramMap.subscribe((params) => {
      this.dayId = params.get('id');
      console.log('Day ID:', this.dayId);
    });
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
*/
