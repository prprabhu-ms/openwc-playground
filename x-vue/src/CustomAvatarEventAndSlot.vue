<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import type { UserJoinedEventDetail, UserLeftEventDetail } from "./CustomAvatarEventAndSlot.types";
import "./wc-custom-avatar-event-and-slot";

const targetSlots = ref<string[]>([]);

function onUserJoined(ev: CustomEvent<UserJoinedEventDetail>): void {
    targetSlots.value = [...targetSlots.value, ev.detail.targetSlot];
}

function onUserLeft(ev: CustomEvent<UserLeftEventDetail>): void {
    const idx = targetSlots.value.findIndex(v => v === ev.detail.targetSlot);
    if(idx >= 0) {
        targetSlots.value = targetSlots.value.splice(idx, 1);
    }
}

</script>

<template>
    <wc-custom-avatar-event-and-slot @userjoined="onUserJoined" @userleft="onUserLeft">
    <div v-for="name in targetSlots" :slot="name">
        <!-- Must use `v-bind` here because we want to bind to a variable. -->
        <slot v-bind:name="name"></slot>
    </div>
    </wc-custom-avatar-event-and-slot>
</template>