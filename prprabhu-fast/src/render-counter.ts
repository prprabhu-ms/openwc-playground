import { FASTElement, customElement, attr, html } from '@microsoft/fast-element';
import { commonStyles } from './styles.js';


const template = html<PrprabhuRenderCounter>`
    <div>
        <p>Label: ${x => x.label}. Rendered ${x => {
            // Force this template expression to be reevaluated each time `x.label` changes.
        x.label;
            // Bad practice: Side effect in template.
            x.count += 1;
            return x.count
        }
        } times.</p>
    </div>
`;


@customElement({ name: 'prprabhu-render-counter', template, styles: commonStyles })
export class PrprabhuRenderCounter extends FASTElement {
    @attr label: string = '';

    // Just a private field, update does not trigger rerender.
    count: number = 0;
}