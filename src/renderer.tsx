import { getLogger } from 'domain/logger';

const logger = getLogger('Renderer');

export default async function render(target: HTMLElement & { store: any }) {
  logger.time('DOM Rendered');
  const App = (await import('components/container/app/app')).App;
  ReactDOM.render(<App store={target.store} />, target);
  logger.timeEnd('DOM Rendered');
}
