import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h2>Analog</h2>
    <h3>HostApp</h3>
    <div #remote_appButton></div>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `,
})
export default class HomeComponent {
  @ViewChild('remote_appButton', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;
  async ngAfterViewInit() {
  	const m = await import('remote_app/Button');
  	this.viewContainer.createComponent(m.CounterButtonComponent);
  }
}
