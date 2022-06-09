<script setup lang="ts">
import { onMounted } from 'vue';
import '../vendored/callComposite';
import {TOKEN, USER_ID, GROUP_ID, DISPLAY_NAME} from '../Secrets';

onMounted(() => {
    const callComposite = (window as any).callComposite;
    const target = document.querySelector('#call-composite');
    console.log(callComposite);
    if (target) {
      callComposite.loadCallComposite(
        {
          groupId: GROUP_ID,
          displayName: DISPLAY_NAME,
          userId: { communicationUserId: USER_ID },
          token: TOKEN,
        },
        target
      );
    }
});

</script>

<template>
    <div id="call-composite" style="height: 100%; width: 100%"></div>
</template>