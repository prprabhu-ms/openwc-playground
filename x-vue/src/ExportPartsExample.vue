<script setup lang="ts">
import ExportParts from './ExportParts.vue';

</script>
<template>
    <ExportParts />
</template>

 <style>
 wc-exportparts {
     background-color: blue;
     color: white;
 }
 wc-exportparts::part(outer-part) {
    background-color: green;
 }
 wc-exportparts::part(inner-part) {
    background-color: yellow;
 }
 </style>
