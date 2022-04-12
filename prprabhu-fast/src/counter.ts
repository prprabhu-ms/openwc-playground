import { FASTElement, customElement, attr, html } from '@microsoft/fast-element';
import { commonStyles } from './styles.js';


const template = html<PrprabhuCounter>`
    <div>
        <p>Counter: ${x => x.label}</p>
        <button @click=${x=> x.increment()}>add 1</button>
        <p>Current count is ${x => x.count}</p>
    </div>
`;


@customElement({ name: 'prprabhu-counter', template, styles: commonStyles })
export class PrprabhuCounter extends FASTElement {
    @attr label: string = '';
    @attr count: number = 0;
    increment() {
        this.count += 1;
    }
}