<script setup lang="ts">
import { galleryState } from '@/galleryState';

</script>

<template>
    <section id="mainview" :class="{intro: galleryState.position == 0, flowers: galleryState.position == 1}">
      <Transition mode="out-in">
        <section class="titles" v-if="galleryState.position == 0 && galleryState.displayIntro == false">
        </section>
        <section class="titles" v-else-if="galleryState.position == 0 && galleryState.displayIntro == true">
          <h1><em>CONTAINER</em> presents:</h1>
          <h2>[computing in 2024]</h2>
          <h3>gallerie / collection</h3>
        </section>
        <section class="img_flowers" v-else-if="galleryState.position == 1"></section>
      </Transition>
    </section>
</template>

<style scoped lang=scss>
    .v-enter-active,
    .v-leave-active {
    transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
    opacity: 0;
    }
  
  #mainview {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .intro {
    border: 2px solid $core-coral;
    outline: 1rem solid $core-coral;
    outline-offset: -2rem;
    transition: all 2s;
  }

  .titles {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 1rem;
  }
  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: blurIn 1s;
  }

  h2 {
    animation: blurIn 2s;
  }

  h3 {
    animation: blurIn 3s;
  }


  .flowers {
    border: 2px solid $flower-green;
    outline-offset: 0rem;
    outline: 1rem solid transparent;
    transition: all 2s;
  }


  .img_flowers {
    width: 100%;
    height: 100%;
    background-image: url('../assets/img/flowers.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>