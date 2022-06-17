import {
  fastButton,
  provideFASTDesignSystem,
} from '@microsoft/fast-components';

export { AcsMicrophoneButton } from './acs-microphone-button.js';
export { AcsFakeCallProvider } from './acs-fake-call-provider.js';
export { AcsRealCallProvider } from './acs-real-call-provider.js';

export type { AcsMicrophoneHandlers, AcsMicrophoneState, MicrophoneButtonSelector } from './MicrophoneButtonContext.js';
export { microphoneButtonSelector } from './MicrophoneButtonContext.js';

provideFASTDesignSystem().register(fastButton());
