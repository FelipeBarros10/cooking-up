
<template>
  <section class="selecionar-ingredientes">
    <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>

    <p class="paragrafo-lg instrucoes">
      Selecione abaixo os ingredientes que você quer usar nesta receita:
    </p>

    <ul class="categorias">
      <li v-for="categoria in categorias" :key="categoria.nome">
        <card-categoria 
        :categorias="categoria"
        @ingredienteSelecionado="$emit('ingredienteSelecionado', $event)"
        />
      </li>
    </ul>

    <p class="paragrafo">
      *Atenção: consideramos que você tem em casa sal, pimenta e água.
    </p>
  </section>

  <BotaoPrincipal :textoBotao="textoBotao" @click="$emit('buscandoReceitas')"/>
</template>

<script lang="ts">
import { obterCategorias } from '@/http/categorias'
import type ICategoria from '@/http/interfaces/ICategoria'
import CardCategoria from './CardCategoria.vue';
import BotaoPrincipal from './BotaoPrincipal.vue'

export default {
  components: {CardCategoria, BotaoPrincipal},
  data() {
    return {
      categorias: [] as ICategoria[],
      textoBotao: 'Buscar Receitas!',
    };
  },
  
  async created(){
    this.categorias = await obterCategorias()
    
  },
  emits: ['ingredienteSelecionado', 'buscandoReceitas'],
};
</script>


<style scoped>
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo-ingredientes {
  color: var(--verde-medio, #3d6d4a);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 2rem;
}

.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.dica {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}
</style>