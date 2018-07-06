import { defaultState } from 'domain/store/main';
import render from 'renderer';
import { updateCustomElementAttribute } from 'domain/store/reducers/main';
import exoElementConfig from '../exo-element.config';
import { createAtom } from 'js-atom';
import { getLogger } from 'domain/logger';
const logger = getLogger('ExoElement');

class ExoElement extends HTMLElement {

  store: any;

  static get observedAttributes() {
    return _.map(exoElementConfig.attributes, 'name');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    logger.debug('Attribute change', name, newValue);
    updateCustomElementAttribute(this.store, name, newValue);
  }

  constructor() {
    super();

    logger.debug('Initialising');
    this.store = createAtom(defaultState);

    const _render = _.partial(render, this);
    this.store.addWatch('renderLoop', _render);
    if ((module as any).hot) (module as any).hot.accept('renderer.tsx', _render);
  }
}

window.customElements.define(exoElementConfig.name, ExoElement);
