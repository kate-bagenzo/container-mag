<script setup lang="ts">
import { galleryState } from '@/galleryState';

const keyboard = 'qwertyuiopasdfghjklzxcvbnm';

</script>

<template>
    <section id="info">
        <span v-for="key in keyboard">{{  key }}</span>
        
    </section>
</template>

<style scoped lang="scss">
    section {
        border: 2px dashed $core-coral;

        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        gap: 0.5rem;
        padding: 2rem;
        
        span {
            border: 2px solid $core-coral;
            font-size: 1rem;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>