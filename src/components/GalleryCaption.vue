<script setup lang="ts">
import { galleryState } from '@/galleryState';

</script>

<template>
    <section id="caption">
        <Transition mode="out-in">
            <div v-if="galleryState.position == 0">
                <div class="light"></div>
                <div class="light"></div>
                <div class="light"></div>
            </div>
            <aside v-else-if="galleryState.position == 1">
                <p>Flowers, 2024</p>
                <p>Oil on canvas</p>
            </aside>
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
        border: 2px solid $core-coral;
        display: flex;
        flex-direction: column;

        div {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: 1rem;
        }
    }
    .light {
        background-color: $core-coral;
        height: 2px;
    }

    .light:nth-child(1) {
        width: 80%;
        margin-top: 3rem;
        animation-name: growLight1;
        animation-duration: 1s;
    }
    .light:nth-child(2) {
        width: 60%;
        animation-name: growLight2;
        animation-duration: 1.5s;
    }
    .light:nth-child(3) {
        width: 40%;
        animation-name: growLight3;
        animation-duration: 2s;
    }
</style>