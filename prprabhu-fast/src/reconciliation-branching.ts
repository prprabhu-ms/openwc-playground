import { FASTElement, customElement, attr, html, when } from '@microsoft/fast-element';
import { commonStyles } from './styles.js';


interface Label {
    label: string;
}

const leftCounterTemplate = html<Label>`
<prprabhu-counter label="left"></prprabhu-counter>
`
const rightCounterTemplate = html<Label>`
<prprabhu-counter label="right"></prprabhu-counter>
`

const template = html<PrprabhuReconciliationBranching>`
    <div>
        <p>
            This example shows how two distinct locations in source code (i.e. two
            distinct html template strings) create DOM elements.
        </p>
        <p>
            Inline template return from <code>when</code> directive. This one is surprising.
            FAST decides to cache the DOM nodes even though they are removed by <code>when</code> and the template itself is
            dynamic.
            ${when(x => x.left, html`<prprabhu-counter label="left"></prprabhu-counter>`)}
            ${when(x => !x.left, html`<prprabhu-counter label="right"></prprabhu-counter>`)}
        </p>
        <p>
            Select global template.
            ${x => x.selectCounterTemplate()}
        </p>
        <p>
            Select dynamic template. Same as global template (DOM nodes removed), but should be worse in performance because
            template will be registered each time.
            ${x => x.selectCounterTemplateDynamic()}
        </p>
        <button @click=${x => x.toggleLabel()}>Switch counter</button>
    </div>
`;


@customElement({ name: 'prprabhu-reconciliation-branching', template, styles: commonStyles })
export class PrprabhuReconciliationBranching extends FASTElement {
    @attr left: boolean = true;

    toggleLabel() {
        this.left = !this.left;
    }

    selectCounterTemplate() {
        return this.left ? leftCounterTemplate : rightCounterTemplate;
    }

    selectCounterTemplateDynamic() {
        return this.left ?
            html<Label>`<prprabhu-counter label="left"></prprabhu-counter>` :
            html<Label>`<prprabhu-counter label="right"></prprabhu-counter>`;
    }
}