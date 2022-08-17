<template>
    <h1>Table</h1>
    <PaginationVue />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import useEvents from '../composables/useEvents';
import PaginationVue from './Pagination.vue';

const events = ref();
onMounted(async () => {
    events.value = await useEvents();
})
defineExpose({ 
    events 
})
</script>