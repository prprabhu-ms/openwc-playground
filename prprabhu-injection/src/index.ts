import './custom-avatar-callback.js';
import './custom-avatar-event-and-slot.js';
import './injection-icon.js';

import {
  fastButton,
  provideFASTDesignSystem,
} from '@microsoft/fast-components';

provideFASTDesignSystem().register(fastButton());
