import { css, customElement, FASTElement, html, observable, repeat } from "@microsoft/fast-element";
import { CustomEventMap } from "./event.js";

const template = html<FileSharingCardEvent>`
    <button @click=${w => w.addFile()}>Add File</button>
    <hr/>
    ${repeat(w => w.fileProgress, html`
        <div class="progress-bar-container">
            <div class="progress-bar" style="width: ${p => p*100}%"></div>
        </div>
    `)}
`;

const styles = css`
.progress-bar-container {
    height: 2rem;
    width: 10rem;
    margin: 1rem;
    padding: 0.125rem;
    display: block;
    background-color: burlywood
}

.progress-bar {
    height: 100%;
    background-color: brown
}
`

@customElement({name: 'file-sharing-card-event', template, styles})
export class FileSharingCardEvent extends FASTElement {
    @observable fileProgress: number[] = [];

    addFile() {
        this.fileProgress = [...this.fileProgress, 0];
        // Captured in the closure below.
        const index = this.fileProgress.length - 1;
        this.typedEmit('fileadded', {
            notifyProgress: (ratio: number) => {
                this.notifyProgress(index, ratio);
            }
        })
    }

    notifyProgress(index: number, progress:number) {
        const fileProgress = [...this.fileProgress];
        fileProgress[index] = progress;
        this.fileProgress = fileProgress;
    }

  private typedEmit<K extends keyof CustomEventMap>(
    type: K,
    detail: CustomEventMap[K]
  ): void {
    this.$emit(type, detail);
  }
}