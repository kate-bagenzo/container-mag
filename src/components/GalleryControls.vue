<script setup lang="ts">

interface Props {
    galleryPosition: number;
}

const props = defineProps<Props>();

</script>

<template>
    <ol id="controls">
        <li>
            <button :disabled="galleryPosition == 0"  @click="$emit ('galleryBack')">&lt;</button>
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
            font-size: 5rem;
            background-color: $core-navy;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            user-select: none;
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
            align-items: center;
            justify-content: center;
        }
</style>