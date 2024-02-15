<script setup lang="ts">
import { galleryState } from '@/galleryState';

</script>

<template>
    <ol id="controls">
        <li>
            <button :disabled="galleryState.position == 0"  @click="$emit ('galleryBack')">&lt;</button>
        </li>
        <li>
            <button @click="$emit ('galleryForward')">&gt;</button>
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
    }

    li {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
        }
    li:nth-child(1) button {
        border-right: 1px solid white;
    }
    li:nth-child(2) button {
        border-left: 1px solid white;
    }
</style>