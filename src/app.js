import {MainView} from './views/main/main.js';

// eslint-disable-next-line require-jsdoc
class App {
  routes = [
    {path: '', view: MainView},
  ];
  appState = {
    favorites: [],
  };
  // eslint-disable-next-line require-jsdoc
  constructor() {
    window.addEventListener('hashchange', this.route.bind(this));
    this.route();
  }

  // eslint-disable-next-line require-jsdoc
  route() {
    if (this.currentView) {
      this.currentView.destroy();
    }
    const view = this.routes.find((r) => r.path == location.hash).view;
    this.currentView = new view(this.appState);
    this.currentView.render();
  }
}

new App();
