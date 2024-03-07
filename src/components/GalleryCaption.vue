<script setup lang="ts">
import { galleryState } from '@/galleryState';

</script>

<template>
    <section id="caption" :class="{
        flowers: galleryState.position == 1,
        angel: galleryState.position == 2,
        stretch: galleryState.position == 3,
        user: galleryState.position == 4,
        hill: galleryState.position == 5
        }">
        <Transition mode="out-in">
            <div v-if="galleryState.displayIntro == false">
                <button aria-label="start gallery" type="button" class="power" @click="galleryState.activateDisplay">⏻</button>
            </div>
            <div v-else-if="galleryState.position == 0 && galleryState.displayIntro == true">
                <div class="light"></div>
                <div class="light"></div>
                <div class="light"></div>
            </div>
            <aside v-else-if="galleryState.position == 1" class="img_flowers"></aside>
            <aside v-else-if="galleryState.position == 2" class="img_angel"></aside>
            <aside v-else-if="galleryState.position == 3" class="img_stretch"></aside>
            <aside v-else-if="galleryState.position == 4" class="img_user"></aside>
            <aside v-else-if="galleryState.position == 5" class="img_hill"></aside>
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
        transition: all 2s;

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
    .power {
        all: unset;
        user-select: none;
        font-size: 10rem;
        animation-name: fadeCycle;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        &:hover {
            animation: none;
            cursor: pointer;
            color: $core-coral;
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

    aside {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: contain;
        animation: blurIn 1s;
    }


    .flowers {
        border-color: $flower-green;
        background-color: $flower-gray;
        color: $flower-white;
        fill: $flower-white;
    }

    .angel {
        border-color: $angel-red;
        background-color: black;
        color: $angel-blue;
        fill: $angel-blue;
    }

    .stretch {
        border-color: $stretch-highlight;
        background-color: $stretch-fg;
    }

    .user {
        border-color: white;
        background-color: black;
    }

    .hill {
        border-color: $hill-fg;
        background-color: $hill-bg;
    }

    .img_flowers {
        background-image: url('../assets/img/text_flowers.svg');
    }

    .img_angel {
        background-image: url('../assets/img/text_angel.svg');
    }

    .img_stretch {
        background-image: url('../assets/img/text_stretch.svg');
    }

    .img_user {
        background-image: url('../assets/img/text_user.svg');
    }

    .img_hill {
        background-image: url('../assets/img/text_hill.svg');
    }

    @media screen and (orientation: portrait) {

    }
</style>