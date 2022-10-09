<script setup lang="ts"></script>

<template>
    <h1>Welcome to the INNOCV Calculator</h1>
</template>

<style scoped>
h1 {
    text-align: center;
    color: var(--acent-color);
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
