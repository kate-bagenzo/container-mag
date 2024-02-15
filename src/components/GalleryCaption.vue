<script setup lang="ts">

</script>

<template>
    <section id="caption">
        <div class="light"></div>
        <div class="light"></div>
        <div class="light"></div>
    </section>
</template>

<style scoped lang="scss">
    section {
        border: 2px solid $core-coral;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;

        div {
            background-color: $core-coral;
            height: 2px;
        }

        div:nth-child(1) {
            width: 80%;
            margin-top: 3rem;
        }
        div:nth-child(2) {
            width: 60%;
        }
        div:nth-child(3) {
            width: 40%;
        }
    }
</style>