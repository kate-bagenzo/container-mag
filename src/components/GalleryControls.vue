<script setup lang="ts">
</script>

<template>
    <ol>
        <li>
            <button>&lt;</button>
        </li>
        <li>
            <button>&gt;</button>
        </li>
    </ol>
</template>

<style scoped lang="scss">
    ol {
        list-style-type: none;
        display: flex;

        button {
            all: unset;
            color: $core-coral;

            &:hover {
                cursor: pointer;
            }
        }
    }
</style>