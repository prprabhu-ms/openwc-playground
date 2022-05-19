import { customElement, FASTElement, html } from "@microsoft/fast-element";

const template = html`
<fluent-split-button>
    <fluent-button id="label">${w => w.getMicrophoneLabel()}</fluent-button>
    <fluent-button id="icon">${w => w.getMicrophoneIcon()}</fluent-button>
</fluent-split-button>`;

@customElement({name: 'acs-microphone', template})
class ACSMicrophone extends FASTElement {
    /* ACS business logic, including getMicrophoneLabel() and getMicrophoneIcon() */
}