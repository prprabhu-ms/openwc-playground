<script setup lang="ts">
import { eventTimeOut } from "@microsoft/fast-web-utilities";
import { onMounted, ref, watch } from "vue";
import type { UserJoinedEventDetail, UserLeftEventDetail } from "./CustomAvatarEventAndSlot.types";
import "./wc-custom-avatar-event-and-slot";

const targetSlots = ref<string[]>([]);

const emit = defineEmits<{
    (e: 'userjoined', ev: CustomEvent<UserJoinedEventDetail>): void
    (e: 'userleft', ev: CustomEvent<UserLeftEventDetail>): void
}>();

function onUserJoined(ev: CustomEvent<UserJoinedEventDetail>): void {
    targetSlots.value = [...targetSlots.value, ev.detail.targetSlot];
    // Re-emit to typed Vue event.
    emit('userjoined', ev);
}

function onUserLeft(ev: CustomEvent<UserLeftEventDetail>): void {
    const idx = targetSlots.value.findIndex(v => v === ev.detail.targetSlot);
    if(idx >= 0) {
        targetSlots.value = targetSlots.value.splice(idx, 1);
    }
    // Re-emit to typed Vue event.
    emit('userleft', ev);
}

</script>

<template>
    <!-- Stop propogation of events. They will be re-emitted as typed Vue variants. -->
    <wc-custom-avatar-event-and-slot @userjoined.stop="onUserJoined" @userleft.stop="onUserLeft">
    <div v-for="name in targetSlots" :slot="name">
        <!-- Must use `v-bind` here because we want to bind to a variable. -->
        <slot v-bind:name="name"></slot>
    </div>
    </wc-custom-avatar-event-and-slot>
</template>