# Vite Plugin Federation with Angular

This repository tests the `@module-federation/vite` with Angular, based on the work done in [brandonroberts/angular-vite](https://github.com/brandonroberts/angular-vite). 

## Overview

This project contains two applications:
- **Remote App**: The application that exposes components.
- **Host App**: The application that consumes the remote components.

The goal is to connect the remote app to the host app and display a button with a counter on the host. However, during this process, we are encountering the following error:

Error loading component: b: NG0203

This error leads to uncertainty about whether the issue originates from the plugin itself or its compatibility with Angular, as there are currently no examples addressing this specific use case.

## Repository Structure

- **Remote App**: Located in the `remote` directory, this app exposes a button component.
- **Host App**: Located in the `host` directory, this app attempts to load and display the component from the remote app.

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
4. Serve the remote app using a local server (e.g., http-server):
 ```bash
 npm install -g http-server
http-server ./dist --port [yourspecificport] --cors
```
5. Run the host app::
 ```bash
cd ../host
npm run dev
```
## Contribution
If you have insights or solutions regarding the NG0203 error or experiences with @module-federation/vite and Angular, please feel free to contribute or open an issue.
