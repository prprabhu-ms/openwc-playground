import { FASTElement, customElement, attr, html } from '@microsoft/fast-element';
import { commonStyles } from './styles.js';

export interface DeepLabel {
    label: string;
}

const template = html<PrprabhuRenderFlatten>`
    <div>
        <p>Rendered ${x => {
            // Force this template expression to be reevaluated each time `x.label` changes.
        x.label;
            // Bad practice: Side effect in template.
            x.count += 1;
            return x.count
        }
        } times.</p>
        <p>
            With changing label.
            <prprabhu-render-counter label="${x => `${x.label.label}_${x.count}`}"></prprabhu-render-counter>
        </p>
        <p>
            With fixed label.
            <prprabhu-render-counter label="${x => x.label.label}"></prprabhu-render-counter>
        </p>
        <p>
            Without label.
            <prprabhu-render-counter></prprabhu-render-counter>
        </p>
    </div>
`;


@customElement({ name: 'prprabhu-render-flatten', template, styles: commonStyles })
export class PrprabhuRenderFlatten extends FASTElement {
    @attr label: DeepLabel = { label: '' };
    // Just a private field, update does not trigger rerender.
    count: number = 0;
}