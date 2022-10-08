<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

//Import Components
import KeyboardCalculator from './tools/KeyboardCalculator.vue'

const counterStore = useCounterStore()
</script>

<template>
    <div class="calculator-container">
        <div class="history-results">
            <p>{{ counterStore.results }}</p>
            <h2 v-if="counterStore.getOperators.length == 0">
                I am ready, shot
            </h2>
            <h2 v-else>{{ counterStore.getOperators }}</h2>
        </div>
        <div class="keyboard">
            <KeyboardCalculator />
        </div>
    </div>
</template>

<style scoped>
.calculator-container {
    display: grid;
    place-content: center;
}
.history-results {
    display: grid;
    max-width: 200px;
    background: gray;
    justify-items: end;
}

.history-results p {
    font-weight: 200;
    padding: 0px;
    margin: 8px 8px 0px 0px;
}
.history-results h2 {
    color: white;
    font-weight: 500;
    margin: 16px 8px;
}

.keyboard {
    display: flex;
    justify-content: space-between;
    max-width: 200px;
    flex-wrap: wrap;
    background: blue;
}
</style>
