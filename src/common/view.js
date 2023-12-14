// eslint-disable-next-line require-jsdoc
export class AbstractView {
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
