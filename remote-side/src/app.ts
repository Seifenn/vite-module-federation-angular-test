import { Component } from "@angular/core";
import { CounterButtonComponent } from "./components/counter/counter-button.component";

@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <h2>Remote</h2>

    <br /><br />
    <app-counter-button> </app-counter-button>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  `,
  imports: [CounterButtonComponent],
})
export class AppComponent {}
