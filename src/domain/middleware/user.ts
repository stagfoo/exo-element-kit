import { getLogger } from 'domain/logger';
import { getQuote } from 'domain/middleware/network';
import { updateQuote } from 'domain/store/reducers/main';

const logger = getLogger('@middleware/user');

export async function onClickGetQuote(store: any, event: MouseEvent) {
  logger.debug('List from network');
  const data = await getQuote();
  updateQuote(store, data);
}
