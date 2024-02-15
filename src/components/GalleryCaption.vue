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
            animation-name: growLight1;
            animation-duration: 1s;
        }
        div:nth-child(2) {
            width: 60%;
            animation-name: growLight2;
            animation-duration: 1.5s;
        }
        div:nth-child(3) {
            width: 40%;
            animation-name: growLight3;
            animation-duration: 2s;
        }
    }
</style>