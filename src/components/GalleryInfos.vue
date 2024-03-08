<script setup lang="ts">
import { galleryState } from '@/galleryState';

</script>

<template>
        <section id="info" :class="{
            flowers: galleryState.position == 1,
            angel: galleryState.position == 2,
            stretch: galleryState.position == 3,
            user: galleryState.position == 4,
            hill: galleryState.position == 5,
            culmination: galleryState.position == 6,
            credits: galleryState.position == 7
            }">
            <Transition mode="out-in">
                <span v-if="galleryState.position == 0" class="keyboard" ></span>

                <ul v-else-if="galleryState.position == 1" class="txt_flowers">
                    <li>computing as creativity</li>
                    <li>computing as a digital garden</li>
                    <li>code stashed away, endless notes and ideas</li>
                    <li>a directory is a fenced off place</li>
                </ul>

                <ul v-else-if="galleryState.position == 2" class="txt_angel">
                    <li>computing as meditation</li>
                    <li>computing as tactically satisfying</li>
                    <li>flow, creativity, glass shards</li>
                    <li>a mouse is a brush</li>
                </ul>

                <ul v-else-if="galleryState.position == 3" class="txt_stretch">
                    <li>computing as bad ergonomics</li>
                    <li>computing as repetitive motion, back pain</li>
                    <li>a snap of the nerves, dead skin, dirty screens</li>
                    <li>a keyboard is a biological-machine interface</li>
                </ul>

                <ul v-else-if="galleryState.position == 4" class="txt_user">
                    <li>computing as a silent action</li>
                    <li>computing as long, joyless hours into the night</li>
                    <li>whirrs, clicks, yawns</li>
                    <li>a screen is a tool to dry out the aqueous humor</li>
                </ul>

                <ul v-else-if="galleryState.position == 5" class="txt_hill">
                    <li>computing as a day trip</li>
                    <li>computing as a path to a new destination</li>
                    <li>libraries, parks, friend's houses, cafes</li>
                    <li>a laptop bag is an excuse for a brief adventure</li>
                </ul>

                <ul v-else-if="galleryState.position == 6" class="txt_culmination">
                    <li>the future? or sooner?</li>
                    <li>frayed wires, leaking capacitors</li>
                    <li>a solid state drive has a hundred thousand write cycles</li>
                    <li>a heart, three billion beats</li>
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
        padding: 1rem;

        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        gap: 0.5rem;
        min-height: 10rem;


        .keyboard {
            width: 100%;
            height: 100%;
            background-image: url('../assets/img/keyboard.png');
            background-size: cover;
            background-repeat: no-repeat;
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
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 100%;
        height: 100%;
        overflow: scroll;
        margin: 0rem;
        padding: 0;
        list-style-type: none;
    }
    li {
        width: 100%;
        text-align: center;
    }

    .flowers {
        border: 2px dashed $flower-green;
        background-color: $flower-gray;
        transition: all 2s;
    }
    .txt_flowers {
        color: $flower-blue;
    }

    .angel {
        border: 2px dashed $angel-blue;
        background-color: black;
        transition: all 2s;
    }
    .txt_angel {
        color: $angel_red;
    }

    .stretch {
        border: 2px dashed $stretch-highlight;
        background-color: $stretch-fg;
        transition: all 2s;
    }
    .txt_stretch {
        color: $stretch_highlight;
    }

    .user {
        border: 2px dashed white;
        background-color: black;
        transition: all 2s;
    }
    .txt_user {
        color: white;
    }

    .hill {
        border: 2px dashed $hill-fg;
        background-color: $hill-bg;
        transition: all 2s;
    }
    .txt_hill {
        color: $hill-fg;
    }

    .culmination {
        border: 2px dashed $culmination-fg;
        background-color: $culmination-bg;
        transition: all 2s;
    }
    .txt_hill {
        color: $culmination-fg;
    }

    .credits {
        display: none;
    }
</style>