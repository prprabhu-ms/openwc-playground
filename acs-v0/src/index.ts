import {
  fastButton,
  provideFASTDesignSystem,
} from '@microsoft/fast-components';

export { AcsMicrophoneButton } from './acs-microphone-button.js';
export { AcsFakeCallProvider } from './acs-fake-call-provider.js';
export { AcsRealCallProvider } from './acs-real-call-provider.js';

provideFASTDesignSystem().register(fastButton());
