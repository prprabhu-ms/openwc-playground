import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { WcHelloWorld } from '../src/WcHelloWorld.js';
import '../src/wc-hello-world.js';

describe('WcHelloWorld', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<WcHelloWorld>(
      html`<wc-hello-world></wc-hello-world>`
    );

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<WcHelloWorld>(
      html`<wc-hello-world></wc-hello-world>`
    );
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<WcHelloWorld>(
      html`<wc-hello-world title="attribute title"></wc-hello-world>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<WcHelloWorld>(
      html`<wc-hello-world></wc-hello-world>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
