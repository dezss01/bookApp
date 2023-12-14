import {AbstractView} from '../../common/view.js';
import onChange from 'on-change';

// eslint-disable-next-line require-jsdoc
export class MainView extends AbstractView {
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
