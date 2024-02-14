<script setup lang="ts">
</script>

<template>
    <ol id="controls">
        <li>
            <button @click="$emit ('galleryBack')">&lt;</button>
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
        margin: 0;
        padding: 0;
        border: 1px solid black;

        button {
            all: unset;
            color: $core-coral;
            font-size: 5rem;
            &:hover {
                cursor: pointer;
            }
        }
    }
</style>