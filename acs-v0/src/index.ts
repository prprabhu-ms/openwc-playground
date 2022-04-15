import {
  fastButton,
  provideFASTDesignSystem,
} from '@microsoft/fast-components';

export { AcsMicrophoneButton } from './acs-microphone-button.js';

provideFASTDesignSystem().register(fastButton());
