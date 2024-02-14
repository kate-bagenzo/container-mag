<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import GalleryControlsVue from './components/GalleryControls.vue';
import GalleryInfosVue from './components/GalleryInfos.vue';
import GalleryCaptionVue from './components/GalleryCaption.vue';

const galleryPosition = ref(0);

const galleryBack = () => {
  galleryPosition.value -= 1;
}

const galleryForward = () => {
  galleryPosition.value += 1;
}

</script>

<template>
  <main>
    <RouterView />
    <GalleryCaptionVue />
    <GalleryInfosVue />
    <GalleryControlsVue :galleryPosition="galleryPosition" @galleryBack="galleryBack" @galleryForward="galleryForward"/>
  </main>
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
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 2fr 1fr;
    gap: 1rem;

    background-color: $core-navy;
    color: $core-grey;
    font-family: 'Inter', 'sans-serif';
  
  }

  #art {
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

  @media screen and (orientation: portrait) {
    main {
      grid-template-areas: 
      "art art"
      "caption info"
      "controls controls";

      grid-template-columns: 1fr 1fr;
      grid-template-rows: 3fr 2fr 1fr;
    }

  }
</style>
