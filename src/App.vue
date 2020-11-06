<template>
  <img class="mx-auto" alt="Vue logo" src="./assets/logo.png" />
  <div class="mx-auto w-full lg:w-1/2 xl:w-1/4">
    <HeroList v-model:heroes="heroes" />
  </div>
</template>

<script>
import HeroList from './components/HeroList.vue'

export default {
  name: 'App',
  components: {
    HeroList,
  },
  data: () => ({
    heroes: ['Batman', 'Wonder Woman', 'Superman'],
  }),
}
</script>
