<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
const operators = [
    'AC',
    'DEL',
    '=',
    '+',
    7,
    8,
    9,
    '-',
    4,
    5,
    6,
    'x',
    1,
    2,
    3,
    '÷',
    0,
    '(',
    ')',
    '.',
]

// Set funtions for espacial buttons (AC,DEL...)
const send = (item: string | number) => {
    if (item == 'AC') {
        counterStore.getOperators = ''
        counterStore.results = ' '
        // DEL button
    } else if (item == 'DEL') {
        counterStore.getOperators.length > 1
            ? (counterStore.getOperators = counterStore.getOperators.substring(
                  0,
                  counterStore.getOperators.length - 1
              ))
            : (counterStore.getOperators = '')
        // Equal '=' button
    } else if (item == '=') {
        counterStore.getOperators = counterStore.getOperators
            .replace('x', '*')
            .replace('÷', '/')
        counterStore.results = counterStore.getOperators
        counterStore.getOperators = eval(counterStore.results)
        // Set the times user used the calculator
        counterStore.times = counterStore.times + 1
    } else {
        counterStore.getOperators += item
    }
}
</script>

<template>
    <!-- Create all calculator button -->
    <div class="" v-for="(item, i) in operators" :key="i">
        <button class="button" @click="send(item)">{{ item }}</button>
    </div>
</template>

<style scoped>
.button {
    width: 50px;
    height: 50px;
    background: var(--acent-color);
}
</style>
