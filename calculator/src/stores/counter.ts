import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    // Get the operatións set by users
    const getOperators = ref('')

    // Results of the operations
    const results = ref('')

    // Thanks for use our calculator
    const times = ref(0)

    return { getOperators, results, times }
})
