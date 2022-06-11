<script setup lang="ts">
import { onMounted, ref } from 'vue';
import '../vendored/callComposite';
import { TOKEN, USER_ID, GROUP_ID, DISPLAY_NAME } from '../secrets';
import type { CallAdapter } from '@azure/communication-react';

const root = ref<HTMLDivElement | null>(null);

onMounted(() => {
  const callComposite = (window as any).callComposite;
  const target = document.querySelector('#call-composite');
  console.log(callComposite);
  if (target) {
    (async () => {
      const adapter: CallAdapter = await callComposite.loadCallComposite(
        {
          groupId: GROUP_ID,
          displayName: DISPLAY_NAME,
          userId: { communicationUserId: USER_ID },
          token: TOKEN,
        },
        target
      );
      window.addEventListener('beforeunload', () => {
        adapter.dispose();
      })
      root.value?.dispatchEvent(new CustomEvent('adaptercreated', {
        bubbles: true,
        detail: {
          adapter
        }
      }));
    })();
  }
});

</script>

<template>
  <div ref="root" id="call-composite" style="height: 100%; width: 100%">
    Loading...
  </div>
</template>