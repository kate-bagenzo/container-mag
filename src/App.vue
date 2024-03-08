<script setup lang="ts">
import { galleryState } from './galleryState';
import GalleryControlsVue from './components/GalleryControls.vue';
import GalleryInfosVue from './components/GalleryInfos.vue';
import GalleryCaptionVue from './components/GalleryCaption.vue';
import GalleryMainView from './components/GalleryMainView.vue';
import { ref } from 'vue';

const sentence = 'container';
const aniLetter = ref(sentence[0]);

function loadAnimation() {
  let i = 0;
  let j = 0;
  
  const aniText = () => {
    i >= sentence.length && (i = 0);
    j == 30 && (clearInterval(loadingAni));
    aniLetter.value = sentence[i];
    i++;
    j++;
    return aniLetter;
  };
  const loadingAni = setInterval(aniText, 250);
}

loadAnimation();

</script>

<template>
  <main :class="{
    mainFlowers: galleryState.position == 1,
    mainAngel: galleryState.position == 2,
    mainStretch: galleryState.position == 3,
    mainUser: galleryState.position == 4,
    mainHill: galleryState.position == 5,
    mainCulmination: galleryState.position == 6,
    mainCredits: galleryState.position == 7
    }">
    <GalleryMainView />
    <GalleryCaptionVue />
    <GalleryInfosVue />
    <GalleryControlsVue />
  </main>
  <aside>
    [ {{ aniLetter }} ]
  </aside>
</template>

<style scoped lang="scss">
  main {
    display: grid;
    width: 100%;
    height: 100%;
    padding: 1rem;

    grid-template-areas: 
    "art caption"
    "info controls";
    grid-template-columns: 4fr 1fr;
    grid-template-rows: minmax(0, 2fr) 1fr;
    gap: 1rem;

    background-color: $core-navy;
    color: $core-grey;
    font-family: 'Inter', 'sans-serif';
    transition: background-color 2s;
  }
  
  .mainFlowers {
    background-color: $core-grey;
  }

  .mainAngel {
    background-color: $angel-dark;
  }

  .mainStretch {
    background-color: $stretch-bg;
  }

  .mainUser {
    background-color: $user-bg;
  }

  .mainHill {
    background-color: $hill-bg;
  }

  .mainCulmination {
    background-color: $culmination-bg;
  }

  .mainCredits {
    background-color: $credits-bg;
  }

  #mainview {
    grid-area: art;
  }

  #caption {
    grid-area: caption;
  }

  #info {
    grid-area: info;
  }

  #controls {
    grid-area: controls;
  }

  aside {
    user-select: none;
    z-index: 100;
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 10rem;
    font-family: 'Inter', 'sans-serif';
    background-color: $core-navy;
    color: $core-grey;
    animation-name: slideFromHeight;
    animation-duration: 10s;
    border: 2px solid $core-grey;
  }

  @media screen and (orientation: portrait) {
    
    main {
      grid-template-areas: 
      "art art"
      "info info"
      "controls caption";

      grid-template-columns: 1fr 1fr;
      grid-template-rows: 3fr 2fr 1fr;
    }

  }
</style>
