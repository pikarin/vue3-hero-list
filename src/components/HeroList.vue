<template>
  <div
    class="px-4 py-2 bg-indigo-500 text-white rounded shadow-md transition duration-200"
  >
    <ul class="space-y-3">
      <li
        v-for="(name, i) in heroes"
        :key="i"
        class="flex items-center justify-between"
      >
        <span>{{ name }}</span>
        <button @click="removeHero(name)">
          <svg
            class="w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </li>
    </ul>
  </div>
  <form class="mt-4" @submit.stop.prevent="addHero">
    <input
      v-model="hero"
      class="px-4 py-2 block w-full border rounded bg-gray-100 focus:shadow-md focus:outline-none focus:border-indigo-300"
      type="text"
      placeholder="Masukkan nama super hero di sini"
    />
    <button
      class="px-4 py-2 mt-3 bg-indigo-500 hover:bg-indigo-700 text-white rounded"
      type="submit"
    >
      Tambah
    </button>
  </form>
</template>

<script>
export default {
  name: 'HeroList',
  props: {
    heroes: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['update:heroes'],
  data: () => ({
    hero: '',
  }),
  methods: {
    addHero() {
      if (this.heroes.includes(this.hero) || !this.hero) {
        return
      }

      this.$emit('update:heroes', [...this.heroes, this.hero])
      this.hero = ''
    },
    removeHero(name) {
      this.$emit(
        'update:heroes',
        this.heroes.filter((hero) => hero != name)
      )
    },
  },
}
</script>