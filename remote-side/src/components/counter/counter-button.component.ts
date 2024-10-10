import { Component, signal } from "@angular/core";

@Component({
  selector: "app-counter-button",
  standalone: true,
  template: `<div>Remote Counter</div><button (click)="increment()">Count {{ count() }}</button> `,
  styles: `
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
    `,
})
export class CounterButtonComponent {
  count = signal(0);

  increment() {
    this.count.update((cnt) => ++cnt);
  }
}

