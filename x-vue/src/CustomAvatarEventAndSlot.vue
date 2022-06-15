<script setup lang="ts">
import "./wc-custom-avatar-event-and-slot";
</script>

<template>
    <wc-custom-avatar-event-and-slot>
        <!-- Simply slot *all* content in, it will be distributed to named slots by the WC. -->
        <slot></slot>
    </wc-custom-avatar-event-and-slot>
</template>

