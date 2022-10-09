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
    font-weight: 700;
    font-size: 32px;
}
h2 {
    text-align: center;
    color: var(--acent-color);
    font-weight: 300;
    animation-duration: 3s;
    animation-name: slidein;
}

@keyframes slidein {
    from {
        margin-left: 50%;
        width: 100%;
    }

    to {
        margin-left: 0%;
        width: 100%;
    }
}
</style>
