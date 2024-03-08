<script setup lang="ts">
import { galleryState } from '@/galleryState';

</script>

<template>
    <section id="mainview" :class="{
      intro: galleryState.position == 0,
      flowers: galleryState.position == 1,
      }">
      <Transition mode="out-in">
        <section class="titles" v-if="galleryState.position == 0 && galleryState.displayIntro == false">
        </section>
        <section class="titles" v-else-if="galleryState.position == 0 && galleryState.displayIntro == true">
          <h1><em>CONTAINER</em> presents:</h1>
          <h2>[computing in 2024]</h2>
          <h3>gallerie / collection</h3>
        </section>
        <img class="piece" alt="a laptop set against pixellated code and a tree with small white flowers. a hand holds similar flowers next to the laptop." src="../assets/img/flowers.png" v-else-if="galleryState.position == 1"></img>
        <img class="piece" alt="a laptop is suspended in the sky by stained glass. a cherubic hand descends from the heavens, about to touch the laptop." src="../assets/img/angel.png" v-else-if="galleryState.position == 2"></img>
        <img class="piece" alt="hands made of ground beef type on a keyboard etched into a curved spine. yellow spikes radiate from the spine." src="../assets/img/stretch.png" v-else-if="galleryState.position == 3"></img>
        <img class="piece" alt="a statue stares at a laptop. in the background: a collage of pipes, motherboard parts, and a glowing eye." src="../assets/img/user.png" v-else-if="galleryState.position == 4"></img>
        <img class="piece" alt="two hands twisted to look like walking figures ascend a thumbprint-shaped hill. at the top of the hill is a room with a computer and a potted plant. there is a large flower growing from the hill and the sun shines brightly." src="../assets/img/hill.png" v-else-if="galleryState.position == 5"></img>
        <img class="piece" alt="" src="../assets/img/culmination.png" v-else-if="galleryState.position == 6"></img>
        <section class="piece end" v-else-if="galleryState.position == 7">
          <p>"computing in 2024"</p>
          <p>art & gallery by <a href="https://katebagenzo.neocities.org/" target="_blank">Kate Bagenzo</a></p>
          <p>for container magazine</p>
          <p>~</p>
        </section>

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
    transition: all 2s;
  }

  .intro {
    border: 2px solid $core-coral;
    outline: 1rem solid $core-coral;
    outline-offset: -2rem;
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
    border: 2px solid $core-grey;
    transition: all 2s;
  }

  .piece {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  img {
    max-width: 100%;
  }

  .end {
    p {
      margin: 0;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    font-size: 2rem;

    a {
      font-size: 2.5rem;
      font-weight: bold;
      color: $credits-fg;
      text-decoration: none;
      text-shadow: 0.2rem 0.2rem $credits-primary;
      &:hover {
        text-shadow: 0.2rem 0.2rem $credits-faded;
      }
    }
  }
</style>