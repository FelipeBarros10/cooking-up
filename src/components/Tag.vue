<template>
  <span @click="selecionaTag" :class="[tagClicada ? 'tag_clicked' : 'tag', ativa ? 'tag_clicked' : 'tag']">
    {{ texto }}
  </span>
</template>

<script lang="ts">
export default {
  props: {
    texto: {
      type: String,
      required: true,
    },
    ativa: { type: Boolean },
  },
  data() {
    return {
      tagClicada: false,
    };
  },
  methods: {
    selecionaTag() {
      this.tagClicada = !this.tagClicada;
      console.log(this.tagClicada);
    },
  },
};
</script>

<style scoped>
.tag,
.tag_clicked {
  display: inline-block;
  border-radius: 0.5rem;
  min-width: 4.25rem;
  padding: 0.5rem;
  text-align: center;
  transition: 0.2s;
  cursor: pointer;
  color: var(--cinza);
  background: var(--cinza-claro);
  font-weight: 400;
}

.tag_clicked {
  color: var(--creme, #fffaf3);
  background: var(--coral, #f0633c);
  font-weight: 700;
}
</style>