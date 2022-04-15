import {
  fastButton,
  provideFASTDesignSystem,
} from '@microsoft/fast-components';

export { AcsMuteButton } from './acs-mute-button.js';

provideFASTDesignSystem().register(fastButton());
