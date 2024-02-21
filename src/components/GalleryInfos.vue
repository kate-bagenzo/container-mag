<script setup lang="ts">
import { galleryState } from '@/galleryState';

const keyboard = 'qwertyuiopasdfghjklzxcvbnm';

</script>

<template>
        <section id="info" :class="{flowers: galleryState.position}">
            <Transition mode="out-in">
                <span v-if="galleryState.position == 0" class="keyboard" >
                    <span class="keys" v-for="key in keyboard">{{  key }}</span>
                </span>
                <p v-else-if="galleryState.position == 1">flowers flowers flowers</p>
            </Transition>
        </section>
</template>

<style scoped lang="scss">
    .v-enter-active,
    .v-leave-active {
    transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
    opacity: 0;
    }

    section {
        border: 2px dashed $core-coral;

        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        gap: 0.5rem;
        padding: 2rem;
        animation-name: slideFromBottom;
        animation-duration: 1s;
        transition: all 2s ease-out;


        .keyboard {
            display: grid;
            grid-template-columns: repeat(10, 1fr);
            grid-template-rows: repeat(3, 1fr);
            gap: 0.5rem;
        }
        
        .keys {
            border: 2px solid $core-coral;
            font-size: 1rem;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .flowers {
        border: 2px solid $flower-green;
        background-color: $flower-gray;
        p {
            color: $flower-blue;
        }
    }
</style>