# Vite Plugin Federation with Angular

This repository tests the `@module-federation/vite` with Angular and AnalogJS, based on the work done in [brandonroberts/angular-vite](https://github.com/brandonroberts/angular-vite).
It also tests a host with analogjs to test SSR. But now the module federation plugin is not compatible with SSR.

## Overview

This project contains two applications:
- **Remote App**: The application that exposes components.
- **Angular Host App**: The application that consumes the remote components.
- **Analog Host App**: The application that consumes the remote components with analogjs.

The goal is to connect the remote app to the host app and display a button with a counter on the host.We succeeded in connecting the host and the remote with angular vite and analogjs. However, during this process, the module federation plugin does not support SSR therefore we cant test the results with SSR enabled on analog.

## Repository Structure

- **Remote App**: Located in the `remote` directory, this app exposes a button component.
- **Host/Analog App**: Located in the `host` directory, this app attempts to load and display the component from the remote app.

## Installation

To get started with this repository, follow these steps:
1. Clone the repository:
  ```bash
   git clone https://github.com/yourusername/vite-plugin-federation-angular.git
   cd vite-plugin-federation-angular
   ```
2. Install dependencies for both the remote and host apps:
 ```bash
  cd remote
  npm install
  cd ../host
  npm install
```
3. Build  the remote app:
 ```bash
 cd ../remote
npm run build
```
4. Run the host app /Analog app:
 ```bash
cd ../host
npm run dev
```
## Contribution
If you have insights or solutions regarding integrating SSR with @module-federation/vite , AnalogsJS and Angular, please feel free to contribute or open an issue.
