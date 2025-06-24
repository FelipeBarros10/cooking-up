<template>
  <main class="conteudo-principal">
    <SuaLista :ingredientes="ingredientes" />

    <keep-alive include="SelecionarIngredientes">
      <selecionar-ingredientes 
        v-if="conteudo === 'SelecionarIngredientes'"
        @ingredienteSelecionado="lidandoComIngredienteSelecionado($event)"
        @buscandoReceitas="mudandoConteudo('MostrarReceitas')"
      />
  
      <MostrarReceitas :ingredientes="ingredientes" @retornandoEmCategorias="mudandoConteudo('SelecionarIngredientes')" v-else/>

    </keep-alive>
  </main>
</template>

<script lang="ts">
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import SuaLista from './SuaLista.vue';
import MostrarReceitas from './MostrarReceitas.vue';

type Pagina = 'SelecionarIngredientes' | 'MostrarReceitas';

export default {
  data () {
    return {
      ingredientes: [],
      conteudo: 'SelecionarIngredientes' as Pagina
    }
  },
  methods: {
    lidandoComIngredienteSelecionado(ingrediente: String){
      if(this.ingredientes.includes(ingrediente as string)){
        this.ingredientes = this.ingredientes.filter(ingredienteAtual => ingredienteAtual !== ingrediente);
        return
      }        
      this.ingredientes.push(ingrediente as string);
    },

    mudandoConteudo(pagina: Pagina){
      this.conteudo = pagina;
      console.log('Entrou');
      
    }
  },
  components: { SelecionarIngredientes, SuaLista, MostrarReceitas },
}
</script>


<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #fffaf3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

.sua-lista-texto {
  color: var(--coral, #f0633c);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.ingrediente {
  display: inline-block;
  border-radius: 0.5rem;
  min-width: 4.25rem;
  padding: 0.5rem;
  text-align: center;
  transition: 0.2s;
  color: var(--creme, #fffaf3);
  background: var(--coral, #f0633c);
  font-weight: 700;
}

.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #f0633c);
  text-align: center;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>