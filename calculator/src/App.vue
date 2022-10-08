<script setup lang="ts">
import { useCounterStore } from './stores/counter'

// Import Components
import Calculator from './components/Calculator.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

const counterStore = useCounterStore()
</script>

<template>
    <header>
        <Header />
    </header>

    <main>
        <Calculator />
    </main>

    <footer>
        <Footer />
    </footer>
</template>

<style scoped></style>
