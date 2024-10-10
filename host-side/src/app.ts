import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'app-root',
	standalone: true,
	template: ` <h2>Host Application</h2>
		<div #remote_appButton></div>`,
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
	@ViewChild('remote_appButton', { read: ViewContainerRef })
	viewContainer!: ViewContainerRef;

	async ngAfterViewInit() {
		const m = await import('remote_app/Button');
		this.viewContainer.createComponent(m.CounterButtonComponent);
	}
}
