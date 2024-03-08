<script setup lang="ts">
import { galleryState } from '@/galleryState';

</script>

<template>
    <ol id="controls" :class="{
        dead: galleryState.displayIntro == false,
        flowers: galleryState.position == 1,
        angel: galleryState.position == 2,
        stretch: galleryState.position == 3,
        user: galleryState.position == 4,
        hill: galleryState.position == 5,
        culmination: galleryState.position == 6,
        credits: galleryState.position == 7
        }">
        <li>
            <button :class="{
                second: galleryState.position,
                intro:galleryState.position == 0,
                flowers:galleryState.position == 1,
                angel:galleryState.position == 2,
                stretch: galleryState.position == 3,
                user: galleryState.position == 4,
                hill: galleryState.position == 5,
                culmination: galleryState.position == 6,
                credits: galleryState.position == 7
                }"
                aria-label="previous piece"
                :disabled="galleryState.position == 0"
                @click="galleryState.galleryBack">
                &lt;
            </button>
        </li>
        <li>
            <button :class="{
                second: galleryState.position,
                intro:galleryState.position == 0,
                flowers:galleryState.position == 1,
                angel:galleryState.position == 2,
                stretch: galleryState.position == 3,
                user: galleryState.position == 4,
                hill: galleryState.position == 5,
                culmination: galleryState.position == 6,
                credits: galleryState.position == 7
                }"
                aria-label="next piece"
                :disabled="galleryState.position >= 7"
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
        animation: blurIn 2s;

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
            transition: height 2s, background-color 1s, color 1s;
            
            border-bottom: 2px solid white;
            

            &:hover {
                cursor: pointer;
                color: $core-grey;
                background-color: $core-coral;
                transition: background-color 1s, color 1s, height 2s;
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

    @media screen and (orientation: portrait) {
        ol {
            button {
                height: 100%;
            }
        }
    }

    .dead {
        display: none;
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
    
    .angel {
        background-color: black;
        color: $angel-blue;
        border-color: $angel-red;
        &:hover {
            color: $angel-blue;
            background-color: $angel-red;
        }
    }

    .stretch {
        background-color: $stretch-fg;
        color: $stretch-highlight;
        border-color: $stretch-highlight;
        &:hover {
            color: $stretch-highlight;
            background-color: $stretch-bg;
        }
    }

    .user {
        background-color: $user-bg;
        color: $user-fg;
        border-color: $user-fg;
        &:hover {
            color: $user-fg;
            background-color: $user-blue;
        }
    }

    .hill {
        background-color: $hill-bg;
        color: $hill-fg;
        border-color: $hill-fg;
        &:hover {
            color: $hill-fg;
            background-color: $hill-highlight;
        }
    }

    .culmination {
        background-color: $culmination-bg;
        color: $culmination-fg;
        border-color: $culmination-fg;
        &:hover {
            color: $culmination-highlight;
            background-color: $culmination-bg;
        }
    }

    .credits {
        background-color: $credits-bg;
        color: $credits-fg;
        border-color: $credits-fg;
        &:hover {
            color: $credits-fg;
            background-color: $credits-faded;
        }
        &:disabled {
            color: $credits-faded;
            &:hover {
                background-color: $credits-bg;
            }
        }
    }
</style>