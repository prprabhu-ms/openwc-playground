import {
  attr,
  css,
  customElement,
  FASTElement,
  html,
  observable,
} from '@microsoft/fast-element';

const template = html<WcHelloWorld>`
  <div id="container">
    Hello ${w => w.world}!
    <br />
    Current time is ${w => w.now}.
    <br />
    <button @click=${w => w.setNow()}>Get Time</button>
  </div>
`;

const styles = css`
  #container {
    border: solid black 1px;
    padding: 1rem;
    margin: 1rem;
  }
`;

@customElement({ name: 'wc-hello-world', template, styles })
class WcHelloWorld extends FASTElement {
  @attr world = 'world';

  @observable now = new Date().toString();

  setNow() {
    this.now = new Date().toString();
  }
}
