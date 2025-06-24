<template>
    <div class="receitas">
        <div>
            <section>
                <h1 class="cabecalho titulo-ingredientes">Receitas</h1>
            </section>

            <section class="subtitulo-receitas">
                <span >Resultados encontrados: {{ receitasEncontradas.length }}</span>
            </section>

            <section>
                <span v-if="receitasEncontradas.length === 0">Desculpe, não encontramos nenhuma receita com os ingredientes que você selecionou.</span>

                <span v-else>Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!</span>
            </section>
        </div>
        <div class="card-receitas">
            <img v-if="receitasEncontradas.length === 0" src="@/assets/images/sem-receitas.png" alt="">
            <card-receitas v-for="receita in receitasEncontradas" :key="receita.nome" :receitasListadas="receita" />
        </div>
    </div>

    <BotaoPrincipal :textoBotao="textoReceitas" @click="$emit('retornandoEmCategorias')"/>
</template>

<script lang="ts">
import CardReceitas from './CardReceitas.vue';
import { pegaReceitas } from '@/http/receitas'
import type IReceitas from '@/interfaces/IReceitas'
import BotaoPrincipal from './BotaoPrincipal.vue';
import { comparandoMinhaLista } from '@/operacoes/listas';
import type { PropType } from 'vue';

export default {
    components: { CardReceitas, BotaoPrincipal },
    data() {
        return {
            textoReceitas: 'Editar Lista',
            receitasEncontradas: [] as IReceitas
        }
    },
    props: {
        ingredientes : {
            type: Array as PropType<string[]>,
            required: true,
        }
    },
    async created() {
        const receitas = await pegaReceitas()
        
        this.receitasEncontradas = receitas.filter((receita)  => {
            const receitaPossivel = comparandoMinhaLista(receita.ingredientes, this.ingredientes)
            return receitaPossivel
        })
    },
    emits: ['retornandoEmCategorias']
}
</script>

<style scoped>
.receitas {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.card-receitas {
    margin-bottom: 1rem;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.subtitulo-receitas {
    color: #3D6D4A;
    padding: 30px 0;
}
</style>