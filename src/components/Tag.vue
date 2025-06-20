<template>
  <span :class="[ativa ? 'tag_clicked' : 'tag']">
    {{ nomeIngrediente }}
  </span>
</template>

<script lang="ts">
export default {
  props: {
    nomeIngrediente: {
      type: String,
      required: true,
    },
    ativa: { type: Boolean },
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