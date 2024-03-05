<script setup lang="ts">
import { galleryState } from '@/galleryState';

const keyboard = 'qwertyuiopasdfghjklzxcvbnm';

</script>

<template>
        <section id="info" :class="{flowers: galleryState.position}">
            <Transition mode="out-in">
                <span v-if="galleryState.position == 0" class="keyboard" >
                </span>
                <ul v-else-if="galleryState.position == 1">
                    <li>computing as </li>
                </ul>
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
        animation-name: slideFromHeight;
        animation-duration: 1s;
        transition: all 2s ease-out;


        .keyboard {
            width: 100%;
            height: 100%;
            background-image: url('../assets/img/keyboard.png');
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
        border: 2px dashed $flower-green;
        background-color: $flower-gray;
        p {
            color: $flower-blue;
        }
    }
</style>