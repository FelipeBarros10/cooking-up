export function comparandoMinhaLista(ingredientesDasReceitas: unknown[], ingredientesEscolhidos: unknown[],){
    return ingredientesDasReceitas.every((ingredientesDaReceita) => ingredientesEscolhidos.includes(ingredientesDaReceita))

}