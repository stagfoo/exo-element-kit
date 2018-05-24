import { getLogger } from 'domain/logger';
import { getQuote } from 'domain/middleware/network';
import { updateQuote } from 'domain/store/reducers/main';
import { Quote } from 'domain/store/main'

const logger = getLogger('@middleware/user');

export async function onClickGetQuote() {
  logger.debug('List from network');
  const data = await getQuote();
  updateQuote(data);
}