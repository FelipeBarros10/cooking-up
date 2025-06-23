<template>
  <article class="categoria">
    <header class="categoria_cabecalho">
      <img :src="'/public/imagens/icones/categorias_ingredientes/' + categorias.imagem" alt="" class="categoria_imagem">
    </header>

    <h2 class="paragrafo-lg categoria_nome"> {{ categorias.nome }}</h2>

    <ul class="categoria_ingredientes">
      <li v-for="ingrediente in categorias.ingredientes" :key="ingrediente">
        <IngrendienteSelecionavel 
        :nomeIngrediente="ingrediente" 
        @ingredienteSelecionado ="$emit('ingredienteSelecionado', $event)"
        />
      </li>
    </ul>
  </article>
</template>

<script lang="ts">
import type ICategoria from '@/http/interfaces/ICategoria';
import type { PropType } from 'vue';
import IngrendienteSelecionavel from './IngredienteSelecionavel.vue'

export default {
  components: { IngrendienteSelecionavel },
  props :{
    categorias: {
      type: Object as PropType<ICategoria>,
      required: true
    },
  },
  emits: ['ingredienteSelecionado'],
}
</script>

<style scoped>
.categoria {
  width: 19.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--branco, #FFF);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.categoria_cabecalho {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.categoria_imagem {
  width: 3.5rem;
}

.categoria_nome {
  text-align: center;
  color: var(--verde-medio, #3D6D4A);
  font-weight: 700;
}

.categoria_ingredientes {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>