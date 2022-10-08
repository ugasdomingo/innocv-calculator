<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>

<template>
    <h2>
        Thank you for used our calculator
        <span>{{ counterStore.times }}</span> times
    </h2>
</template>

<style scoped>
span {
    color: red;
}
</style>
