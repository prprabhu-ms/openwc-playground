import {
  customElement,
  FASTElement,
  observable,
  html,
} from '@microsoft/fast-element';
import { html as litHtml } from 'lit';
import '../esbuild/index.js';
import {
  AcsMicrophoneHandlers,
  AcsMicrophoneState,
} from '../src/MicrophoneButtonContext.js';

export default {
  title: 'ExplicitProps',
  component: 'acs-microphone-button',
  argTypes: {},
};

export const Muted = () => litHtml`
<acs-microphone-button explicitprops .state=${{checked: true}}>
</acs-microphone-button>
`

// Observation: `explicitprops` with `checked: false` breaks the UI. What ?!
export const Unmuted = () => litHtml`
<acs-microphone-button explicitprops .state=${{checked: false}}>
</acs-microphone-button>
`

export const Alert = () => litHtml`
<acs-microphone-button explicitprops .state=${{checked: true}} .handlers=${{
    mute: async (): Promise<void> => {
        alert('mute!')
    },
    unmute: async (): Promise<void> => {
        alert('unmute!')
    },
}}>
</acs-microphone-button>
`

// Observation: Lit -> FAST template bridge loses type safety in properties.
export const LostThemTypes = () => litHtml`
<acs-microphone-button explicitprops .handlers=${{boop: true}} .state=${{checked: true}}>
</acs-microphone-button>
`

const template = html`
  <acs-microphone-button
    explicitprops
    :state=${x => x.state}
    :handlers=${x => x.handlers}
  >
  </acs-microphone-button>
`;

@customElement({ name: 'story-microphone-wrapped', template })
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class StoryMicrophoneWrapped extends FASTElement {
  @observable state: AcsMicrophoneState = {
    checked: true,
  };

  handlers: AcsMicrophoneHandlers;

  constructor() {
    super();
    this.handlers = {
      mute: async (): Promise<void> => {
        this.state = { ...this.state, checked: true };
      },
      unmute: async (): Promise<void> => {
        this.state = { ...this.state, checked: false };
      },
    };
  }
}

export const Wrapped = () =>
  litHtml`<story-microphone-wrapped></story-microphone-wrapped>`;
