<template>
    <div class="receitas">
        <div v-for="receita in receitas" :key="receita.nome">
            <card-receitas :receitasListadas="receita" />
        </div>
    </div>

    <BotaoPrincipal :textoBotao="textoReceitas"/>
</template>

<script lang="ts">
import CardReceitas from './CardReceitas.vue';
import { pegaReceitas } from '@/http/receitas.ts'
import type IReceitas from '@/interfaces/IReceitas.ts'
import BotaoPrincipal from './BotaoPrincipal.vue';
export default {
    components: { CardReceitas, BotaoPrincipal },
    data() {
        return {
            receitas: [] as IReceitas,
            textoReceitas: 'Editar Lista'
        }
    },

    async created() {
        this.receitas = await pegaReceitas()
        console.log(this.receitas);
    }
}
</script>

<style scoped>
.receitas {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}
</style>