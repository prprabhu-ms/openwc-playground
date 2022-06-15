<script setup lang="ts">
import { reactive } from "vue";
import CustomAvatarEventAndSlot from "./CustomAvatarEventAndSlot.vue";
import type { UserJoinedEventDetail, UserLeftEventDetail } from './wc-custom-avatar-event-and-slot';

// icons from https://remixicon.com/
const getAvatar = (userId: string) => {
    switch (userId) {
        case 'apple':
            return 'ri-code-box-fill';
        case 'banana':
            return 'ri-ancient-gate-fill';
        case 'jackfruit':
            return 'ri-indent-decrease';
        case 'mango':
            return 'ri-paragraph';
        default:
            return 'ri-error-warning-fill';
    }
};

const data: { avatars: {[index: string]: string} } = reactive({ avatars: {}});

function onUserJoined(ev: CustomEvent<UserJoinedEventDetail>): void {
    data.avatars[ev.detail.targetSlot] = getAvatar(ev.detail.data.userId);
    console.log(data.avatars);
}

function onUserLeft(ev: CustomEvent<UserLeftEventDetail>): void {
    delete data.avatars[ev.detail.targetSlot]
}

</script>

<template>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
    <CustomAvatarEventAndSlot @userjoined="onUserJoined" @userleft="onUserLeft">
        <i v-for="(avatar, target) in data.avatars" :slot="target" :class="avatar"></i>
    </CustomAvatarEventAndSlot>
</template>