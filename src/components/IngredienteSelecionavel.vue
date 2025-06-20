<template>
   <Tag class="ingredinteSelecionavel" @click="selecionaTag" :nomeIngrediente="nomeIngrediente" :ativa="tagClicada"/>
</template>

<script lang="ts">
import Tag from './Tag.vue';

export default {
  components: { Tag },
  props: {
    nomeIngrediente: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      tagClicada: false,
    };
  },
  methods: {
    selecionaTag() {
      this.tagClicada = !this.tagClicada;
    },
  },
};
</script>

<style scoped>
.ingredinteSelecionavel{
    cursor: pointer;
}
</style>