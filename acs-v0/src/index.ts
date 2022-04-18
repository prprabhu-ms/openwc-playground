import {
  fastButton,
  provideFASTDesignSystem,
} from '@microsoft/fast-components';

export { AcsMicrophoneButton } from './acs-microphone-button.js';
export { AcsFakeCallProvider } from './acs-fake-call-provider.js';

provideFASTDesignSystem().register(fastButton());
