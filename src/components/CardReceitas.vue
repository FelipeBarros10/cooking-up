<template>
  <article class="receitas_conteudo">
    <header>
      <img :src="'/public/imagens/receitas/' + receitasListadas.imagem" alt="" />
    </header>

    <section class="receita_corpo">
      <h1 class="paragrafo receita_nome">{{ receitasListadas.nome }}</h1>
    </section>
  </article>
</template>

<script lang="ts">
import { PropType } from 'vue'
import type IReceitas from '@/interfaces/IReceitas.ts'
export default {
  props: {
    receitasListadas: {
      type: Object as PropType<IReceitas>,
      required: true
    }
  }
}
</script>

<style scoped>
.receitas_conteudo {
  display: flex;
  width: 14.6rem;
  max-width: 19.5rem;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  background: var(--Branco, #FFF);
  box-shadow: 4px 4px 12px 0px rgba(68, 68, 68, 0.08)
}

.receitas_conteudo img {
  width: 100%;
  border-radius: 1rem 1rem 0rem 0rem;
  display: block;
}

.receita_corpo {
  padding: 2rem 1rem;
}

.receita_nome {
  font-weight: 700;
  color: var(--cinza, #444);
  text-align: center;
}
</style>