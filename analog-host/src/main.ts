import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

import { initFederation } from '@softarc/native-federation';

// (async () => {

// 	await initFederation({
// 		'mfe1': 'http://localhost:4201/remoteEntry.json'
// 	});

// 	await bootstrapApplication(AppComponent, appConfig);
//     ;

// })();

console.log('running On client');

bootstrapApplication(AppComponent, appConfig);
