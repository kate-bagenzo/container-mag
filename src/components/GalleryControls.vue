<script setup lang="ts">
import { galleryState } from '@/galleryState';

</script>

<template>
    <ol id="controls" :class="{flowers:galleryState.position == 1}">
        <li>
            <button :class="{second: galleryState.position, intro:galleryState.position == 0, flowers:galleryState.position == 1}"
            :disabled="galleryState.position == 0"  @click="galleryState.galleryBack">
            &lt;
            </button>
        </li>
        <li>
            <button :class="{second: galleryState.position, intro:galleryState.position == 0, flowers:galleryState.position == 1}"
            @click="galleryState.galleryForward">
            &gt;
            </button>
        </li>
    </ol>
</template>

<style scoped lang="scss">
    ol {
        list-style-type: none;
        
        display: flex;
        align-items: center;
        justify-content: center;

        margin: 0;
        padding: 0;
        border: 2px solid white;


        button {
            all: unset;
            color: $core-coral;
            font-size: 3rem;
            background-color: $core-navy;
            width: 100%;
            height: 30%;
            display: flex;
            align-items: center;
            justify-content: center;
            user-select: none;
            transition: height 2s;
            
            border-bottom: 2px solid white;
            

            &:hover {
                cursor: pointer;
                color: $core-grey;
                background-color: $core-coral;
            }

            &:disabled {
                cursor: not-allowed;
                color: $core-grey;

                &:hover {
                    background-color: $core-navy;
                }
            }
        }
        .second {
            height: 100%;
            transition: height 2s;
        }
    }

    li {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
        }
        
    li:nth-child(1) .intro {
        border-right: 1px solid white;
    }
    li:nth-child(2) .intro {
        border-left: 1px solid white;
    }

    .flowers {
            background-color: $flower-gray;
            color: $flower-blue;
            border-color: $flower-green;
            &:hover {
                color: $flower-green;
                background-color: $flower-blue;
            }
        }
</style>