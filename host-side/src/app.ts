import { ViewContainerRef, Component, Injector } from "@angular/core";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-root",
  standalone: true,
  template: ` <h2>Host Application</h2> `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  `,
  imports: [CommonModule],
})
export class AppComponent {
  constructor(
    private viewContainer: ViewContainerRef,
    private injector: Injector
  ) {}

  myComponent: any;

  async ngOnInit() {
    // Dynamically import the remote component
    try {
      const module = (await import("remote_app/Button")).default;
      console.log(module);
      const { BlablaComponent } = await import("./blabla");

      this.viewContainer.createComponent(BlablaComponent, {
        injector: this.injector,
      });
      this.viewContainer.createComponent(module.CounterButtonComponent, {
        injector: this.injector,
      });
    } catch (error) {
      console.error("Error loading component:", error);
    }
  }
}
