import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `<main class="main">
    <div class="content">
      <div class="left-side">
        <a href="https://adventofcode.com" target="_blank">Advent of Code</a>
        <h1>Welcome to my personal solutions for the 2024 edition</h1>
        <p>I wish I had the talent to draw an animated calendar but that old terminal style will do</p>
      </div>
      <div class="divider" role="separator" aria-label="Divider"></div>
      <div class="right-side">
        <div class="pill-group">
          @for (item of [
            { title: 'Day 1'},
            { title: 'Day 2'},
            { title: 'Day 3'},
            { title: 'Day 4'},
            { title: 'Day 5'},
            { title: 'Day 6'},
            { title: 'Day 7'},
            { title: 'Day 8'},

          ]; track item.title) {
            <a
              class="pill"
              [routerLink]="['/days', item.title.slice(4)]"
              rel="noopener"
            >
              <span>{{ item.title }}</span>
            </a>
          }
        </div>
      </div>
    </div>
    <router-outlet />

  </main>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AoC2024';
}
