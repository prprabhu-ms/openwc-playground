<script setup lang="ts">
import "./wc-custom-avatar-event-and-slot";
import type { UserJoinedEventDetail, UserLeftEventDetail } from "./wc-custom-avatar-event-and-slot";

// TODO: Is there a way to infer this from the base type in the web component?
defineEmits<{
    (e: 'userjoined', ev: CustomEvent<UserJoinedEventDetail>): void
    (e: 'userleft', ev: CustomEvent<UserLeftEventDetail>): void
}>();

</script>

<template>
<wc-custom-avatar-event-and-slot>
    <!-- Simply slot *all* content in, it will be distributed to named slots by the WC. -->
    <slot></slot>
</wc-custom-avatar-event-and-slot>
</template>

