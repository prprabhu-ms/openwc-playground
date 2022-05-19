import { customElement, FASTElement, html } from "@microsoft/fast-element";

const template = html`
<fluent-split-button part="splitbutton">
    <fluent-button id="label" part="label">${w => w.getMicrophoneLabel()}</fluent-button>
    <fluent-button id="icon" part="icon">${w => w.getMicrophoneIcon()}</fluent-button>
</fluent-split-button>`;

@customElement({name: 'acs-microphone', template})
class ACSMicrophone extends FASTElement {
    /* ACS business logic, including getMicrophoneLabel() and getMicrophoneIcon() */
}

const contosoStyles = css`
acs-microphone::part(label) {

}
`;