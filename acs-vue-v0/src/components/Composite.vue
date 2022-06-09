<script setup lang="ts">
import { onMounted } from 'vue';
import '../vendored/callComposite';
import { TOKEN, USER_ID, GROUP_ID, DISPLAY_NAME } from '../Secrets';
import type { CallAdapter } from '@azure/communication-react';

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
    })();

  }
});

</script>

<template>
  <div id="call-composite" style="height: 100%; width: 100%">
    Loading...
  </div>
</template>