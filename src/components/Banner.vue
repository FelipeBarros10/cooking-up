<template>
  <header class="banner">
    <div class="apresentacao">
      <div>
        <img class="logo" src="../assets/images/logo.svg" alt="">

        <p class="cabecalho-lg frase-cabecalho">
          <span class="texto-verde">
            Um banquete de ideias para 
          </span>
          despertar o chef que há em você!
        </p>
  
        <p class="subtitulo-lg">
          Explore novas receitas todos os dias com os ingredientes ques estão ao seu alcance!
        </p>
      </div>
     

      <img class="foto-banner" src="../assets/images/foto-banner.png" alt="">
    </div>
  </header>
</template>

<style scoped>
.banner {
  padding: 4rem 7.5rem;
  color: var(--creme);
  justify-content: space-between;
  align-items: center;
  column-gap: 3.25rem;
}

.apresentacao{
  display: flex;
  justify-content: center;
  align-items: center;
}

.apresentacao div{
  width: 50%;
}

.logo {
  height: 4.5rem;
  margin-bottom: 3rem;
}

.frase-cabecalho {
  margin-bottom: 2rem;
}

.texto-verde {
  color: var(--verde-medio, #3D6D4A);
}

.foto-banner {
  width: 35rem;
}

@media only screen and (max-width: 1300px) {
  .banner {
    padding: 4rem 3.75rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

@media only screen and (max-width: 767px) {
  .banner {
    padding: 4rem 1.5rem;
  }

  .foto-banner {
    width: min(100%, 21.25rem);
  }
}
</style>