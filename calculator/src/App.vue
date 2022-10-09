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
        <img
            class="img-hero"
            src="https://images.pexels.com/photos/1314529/pexels-photo-1314529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Background"
        />
        <Calculator />
    </main>

    <footer>
        <Footer />
    </footer>
</template>

<style scoped>
.img-hero {
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0.15;
    object-fit: cover;
}
</style>
