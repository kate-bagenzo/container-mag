<script setup lang="ts">
import { galleryState } from '@/galleryState';

</script>

<template>
        <section id="info" :class="{
            flowers: galleryState.position == 1,
            angel: galleryState.position == 2,
            stretch: galleryState.position == 3
            }">
            <Transition mode="out-in">
                <span v-if="galleryState.position == 0" class="keyboard" ></span>

                <ul v-else-if="galleryState.position == 1" class="txt_flowers">
                    <li>computing as creativity</li>
                    <li>computing as a sullen thing</li>
                    <li>computing as a digital garden</li>
                </ul>

                <ul v-else-if="galleryState.position == 2" class="txt_angel">
                    <li>computing as meditation</li>
                    <li>computing as tactically satisfying</li>
                    <li>computing as glass shards</li>
                </ul>

                <ul v-else-if="galleryState.position == 3" class="txt_stretch">
                    <li>computing as bad ergonomics</li>
                    <li>computing as repetitive motion, back pain</li>
                    <li>a keyboard is a filthy, cronenbergian object, packed with the remnants of your dried flesh</li>
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
    }

    .flowers {
        border: 2px dashed $flower-green;
        background-color: $flower-gray;
    }
    .txt_flowers {
        color: $flower-blue;
    }

    .angel {
        border: 2px dashed $angel-blue;
        background-color: black;
    }
    .txt_angel {
        color: $angel_red;
    }

    .stretch {
        border: 2px dashed $stretch-highlight;
        background-color: $stretch-fg;
    }
    .txt_stretch {
        color: $stretch_highlight;
    }
</style>