import { css, customElement, FASTElement, html } from '@microsoft/fast-element';

const template = html`
  <div part="start">
    This is the "start" part of outer.
    <br />
    It contains an inner.
    <styles-inner></styles-inner>
  </div>
  <div id="container">
    This is the main content of outer. It inherits background from :host.
    <br />
    It contains an inner.
    <styles-inner></styles-inner>
  </div>
`;

const styles = css`
  div {
    border-width: 1px;
    border-color: black;
    border-style: solid;
    padding: 1rem;
    margin: 1rem;
  }

  #container {
    background: inherit;
  }

  :host {
    /* Don't use initial becuase that is transparent */
    background: white;
  }
`;

@customElement({ name: 'styles-outer', template, styles })
export class StylesOuter extends FASTElement {}
