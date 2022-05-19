import { customElement, FASTElement, html } from "@microsoft/fast-element";

const template = html`
<fluent-split-button part="splitbutton">
    <slot name="label"></slot>
    <slot name="icon"></slot>
</fluent-split-button>`;

const lightTemplate = html`
<fluent-button slot="label">${w => w.getMicrophoneLabel()}</fluent-button>
<fluent-button slot="icon">${w => w.getMicrophoneIcon()}</fluent-button>
`

@customElement({name: 'acs-microphone', template})
class ACSMicrophone extends FASTElement {
    /* ACS business logic, including getMicrophoneLabel() and getMicrophoneIcon() */
    override connectedCallback() {
        super.connectedCallback && super.connectedCallback();
        // Add light DOM children to be slotted in.
        lightTemplate.render(this, this);
      }
}
