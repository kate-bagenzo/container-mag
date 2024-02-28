<script setup lang="ts">
import { galleryState } from './galleryState';
import GalleryControlsVue from './components/GalleryControls.vue';
import GalleryInfosVue from './components/GalleryInfos.vue';
import GalleryCaptionVue from './components/GalleryCaption.vue';
import GalleryMainView from './components/GalleryMainView.vue';

</script>

<template>
  <main :class="{mainFlowers: galleryState.position == 1}">
   <GalleryMainView />
    <GalleryCaptionVue />
    <GalleryInfosVue />
    <GalleryControlsVue />
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
    grid-template-columns: 4fr 1fr;
    grid-template-rows: 2fr 1fr;
    gap: 1rem;

    background-color: $core-navy;
    color: $core-grey;
    font-family: 'Inter', 'sans-serif';
    transition: background-color 2s;
  }

  .mainFlowers {
    background-color: $core-grey;
    transition: background-color 2s;
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

  @media screen and (orientation: portrait) {
    #caption {
      display: none;
    }
    
    main {
      grid-template-areas: 
      "art art"
      "info info"
      "controls controls";

      grid-template-columns: 1fr 1fr;
      grid-template-rows: 3fr 2fr 1fr;
    }

  }
</style>
