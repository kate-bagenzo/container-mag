<script setup lang="ts">
import { galleryState } from '@/galleryState';
import { ref } from 'vue';

</script>

<template>
    <Transition mode="out-in">
        <section v-if="galleryState.modal == true" @click="galleryState.toggleModal" :class="{
            flowers: galleryState.position == 1,
            angel: galleryState.position == 2,
            stretch: galleryState.position == 3,
            user: galleryState.position == 4,
            hill: galleryState.position == 5,
            culmination: galleryState.position == 6,
        }">
        <img alt="a laptop set against pixellated code and a tree with small white flowers. a hand holds similar flowers next to the laptop." src="../assets/img/flowers.png" v-if="galleryState.position == 1"></img>
        <img alt="a laptop is suspended in the sky by stained glass. a cherubic hand descends from the heavens, about to touch the laptop." src="../assets/img/angel.png" v-else-if="galleryState.position == 2"></img>
        <img alt="hands made of ground beef type on a keyboard etched into a curved spine. yellow spikes radiate from the spine." src="../assets/img/stretch.png" v-else-if="galleryState.position == 3"></img>
        <img alt="a statue stares at a laptop. in the background: a collage of pipes, motherboard parts, and a glowing eye." src="../assets/img/user.png" v-else-if="galleryState.position == 4"></img>
        <img alt="two hands twisted to look like walking figures ascend a thumbprint-shaped hill. at the top of the hill is a room with a computer and a potted plant. there is a large flower growing from the hill and the sun shines brightly." src="../assets/img/hill.png" v-else-if="galleryState.position == 5"></img>
        <img alt="a grey dithered desert. the sky is red and cracked like glass, with large cuboid figures in the horizon. in the foreground, large red motherboards jut out from the sides. in the center, a bright red vase." src="../assets/img/culmination.png" v-else-if="galleryState.position == 6"></img>
        </section>
    </Transition>
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
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img {
        width: 100vw;
        height: 100%;
        object-fit: contain;
    }

    .flowers {
        background-color: $flower-white;
    }
    .angel {
        background-color: $angel-dark;
    }
    .stretch {
        background-color: $stretch-bg;
    }
    .user {
        background-color: $user-bg;
    }
    .hill {
        background-color: $hill-bg;
    }
    .culmination {
        background-color: $culmination-bg;
    }
</style>