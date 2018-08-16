import { getLogger } from 'domain/logger';
import React from 'react';
import ReactDOM from 'react-dom';
const logger = getLogger('Renderer');

export default async function render(target: HTMLElement & { store: any }) {
  logger.time('DOM Rendered');
  const App = (await import('components/container/app/app')).App;
  const mountPoint = target.shadowRoot.querySelector('div'); //<- Better name
  ReactDOM.render(<App store={target.store} cssMount={mountPoint} />, mountPoint);
  logger.timeEnd('DOM Rendered');
}
