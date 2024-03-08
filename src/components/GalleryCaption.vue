<script setup lang="ts">
import { galleryState } from '@/galleryState';

</script>

<template>
    <section id="caption" :class="{
        flowers: galleryState.position == 1,
        angel: galleryState.position == 2,
        stretch: galleryState.position == 3,
        user: galleryState.position == 4,
        hill: galleryState.position == 5,
        culmination: galleryState.position == 6,
        credits: galleryState.position == 7
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
            <aside v-else-if="galleryState.position == 1" class="img_flowers"><h1 class="sr-only">flowers</h1></aside>
            <aside v-else-if="galleryState.position == 2" class="img_angel"><h1 class="sr-only">angel</h1></aside>
            <aside v-else-if="galleryState.position == 3" class="img_stretch"><h1 class="sr-only">stretch</h1></aside>
            <aside v-else-if="galleryState.position == 4" class="img_user"><h1 class="sr-only">user</h1></aside>
            <aside v-else-if="galleryState.position == 5" class="img_hill"><h1 class="sr-only">hill</h1></aside>
            <aside v-else-if="galleryState.position == 6" class="img_culmination"><h1 class="sr-only">culmination</h1></aside>
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

    .culmination {
        border-color: $culmination-fg;
        background-color: $culmination-bg;
    }

    .credits {
        display: none;
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

    .img_culmination {
        background-image: url('../assets/img/text_culmination.svg');
    }

    .sr-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    }
    .sr-only.focusable:active,
    .sr-only.focusable:focus {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    }


    @media screen and (orientation: portrait) {
        section {
            min-height: 12rem;
        }
        aside {
            background-position: bottom;
        }
    .img_flowers {
        background-image: url('../assets/img/text_flowers_portrait.svg');
    }

    .img_angel {
        background-image: url('../assets/img/text_angel_portrait.svg');
    }

    .img_stretch {
        background-image: url('../assets/img/text_stretch_portrait.svg');
    }

    .img_user {
        background-image: url('../assets/img/text_user_portrait.svg');
    }

    .img_hill {
        background-image: url('../assets/img/text_hill_portrait.svg');
    }

    .img_culmination {
        background-image: url('../assets/img/text_culmination_portrait.svg');
    }
    }
</style>