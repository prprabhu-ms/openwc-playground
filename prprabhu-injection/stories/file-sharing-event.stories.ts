import { customElement, FASTElement, html } from '@microsoft/fast-element';
import { html as litHtml } from 'lit';
import '../src/index.js';

export default {
  title: 'FileSharingEvent',
  component: 'file-sharing-event',
};

export const Wrapped = () => litHtml`
<file-sharing-event-wrapper></file-sharing-event-wrapper>`

const template = html`
<file-sharing-card-event>
</file-sharing-card-event>
`;

@customElement({name: 'file-sharing-event-wrapper', template})
class FileSharingEventWrapper extends FASTElement {
    override connectedCallback() {
        super.connectedCallback && super.connectedCallback();
        this.addEventListener('fileadded', (e) => {
            this.simulateFileProgress(e.detail.notifyProgress);
        });
    }

    override disconnectedCallback() {
        this.removeEventListener('fileadded', (e) => {
            this.simulateFileProgress(e.detail.notifyProgress);
        });
        super.disconnectedCallback && super.disconnectedCallback();
    }

    private simulateFileProgress(cb: (progress: number) => void) {
        const startTime = Date.now();
        const handle = setInterval(() => {
            const now = Date.now();
            const progress = (now - startTime) / 5000;
            if (progress > 1) {
                cb(1);
                clearInterval(handle);
                return;
            }
            cb(progress);
        }, 100);
    }
}