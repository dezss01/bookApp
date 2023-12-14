(function (onChange) {
  'use strict';

  // eslint-disable-next-line require-jsdoc
  class AbstractView {
    // eslint-disable-next-line require-jsdoc
    constructor() {
      this.app = document.getElementById('root');
    }
    // eslint-disable-next-line require-jsdoc
    setTitle(title) {
      document.title = title;
    }

    // eslint-disable-next-line require-jsdoc
    render() {
      return;
    }
    // eslint-disable-next-line require-jsdoc
    destroy() {
      return;
    }
  }

  // eslint-disable-next-line require-jsdoc
  class MainView extends AbstractView {
    state = {
      list: [],
      loading: false,
      searchQuery: undefined,
      offset: 0,
    };

    // eslint-disable-next-line require-jsdoc
    constructor(appState) {
      super();
      this.appState = appState;
      this.appState = onChange(this.appState, this.appStateHook.bind(this));
      this.setTitle('Поиск книг');
    }

    // eslint-disable-next-line require-jsdoc
    appStateHook(path) {
      console.log(path);
    }

    // eslint-disable-next-line require-jsdoc
    render() {
      const main = document.createElement('div');
      this.app.innerHTML = '';
      main.innerHTML = `Число книг: ${this.appState.favorites.length}`;
      this.app.append(main);
      this.appState.favorites.push('d');
    }
  }

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

})(onChange);
