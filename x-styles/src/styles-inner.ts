import { css, customElement, FASTElement, html } from '@microsoft/fast-element';

const template = html`
  <div part="start">
    This is the "start" part of inner. It does not set background at all.
    <br />
    As a result, it has the initial background value (transparent).
  </div>
  <div id="container">
    This is the main content of inner. It inherits background from :host.
    <br />
    The :host background is set to white.
    <div id="custom">This exports a custom CSS prop to set the background.</div>
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

  #custom {
    background-color: var(--inner-custom-background-color);
  }

  :host {
    /* Don't use initial becuase that is transparent */
    background: white;
  }
`;

@customElement({ name: 'styles-inner', template, styles })
export class StylesInner extends FASTElement {}
