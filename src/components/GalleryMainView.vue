<script setup lang="ts">
import { galleryState } from '@/galleryState';

</script>

<template>
  <Transition mode="out-in">
    <section v-if="galleryState.position == 0" class="artview" id="intro">
      <h1><em>CONTAINER</em> presents:</h1>
      <h2>[computing in 2024]</h2>
      <h3>gallerie / collection</h3>
    </section>

    <section v-else-if="galleryState.position == 1" class="artview" id="flowers">
      <img src="../assets/img/flowers.png" />
    </section>
  </Transition>
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
  
  #intro {
    border: 2px solid $core-coral;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    outline: 1rem solid $core-coral;
    outline-offset: -2rem;
  }

  #flowers {
    border: 2px solid $core-navy;
  }

  img {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
  }
</style>