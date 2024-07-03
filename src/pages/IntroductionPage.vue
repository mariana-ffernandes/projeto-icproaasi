<template>
  <div class="introduction-page">
<header class="header-container">
      <router-link to="/menu" class="back-button">← voltar</router-link> 
      <h1 class="title">Introdução ao Conteúdo</h1>
    </header>
    <main>
      <div class="buttons-container">
        <button class="button-perda-auditiva" @click="navigateToContent('O que é a perda auditiva', 'https://www.youtube.com/embed/video-id-perda-auditiva', 'O que é a perda auditiva?')">O que é a perda auditiva</button>
        <button class="button-funcao-aparelho" @click="navigateToContent('Qual a função do aparelho auditivo', 'https://www.youtube.com/embed/video-id-funcao-aparelho', 'Qual a função do aparelho auditivo?')">Qual a função do aparelho auditivo</button>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'IntroductionPage',
  computed: {
    ...mapState(['userType'])
  },
  methods: {
    navigateToContent(title, videoUrl, text) {
      if (this.userType === 'partner') {
        this.$router.push({
          path: '/content/1',
          query: {
            title: 'Introdução ao Conteúdo',
            videoUrl: 'https://www.youtube.com/embed/NHNPOmN8OFg',
            text: 'Introdução ao conteúdo para parceiro de comunicação',
            from: '/introduction',
            pageTitle: 'Introdução ao Conteúdo'
          }
        });
      } else {
        this.$router.push({
          path: '/content/1',
          query: {
            title: title,
            videoUrl: videoUrl,
            text: text,
            from: '/introduction',
            pageTitle: 'Introdução ao Conteúdo'
          }
        });
      }
    }
  }
}
</script>

  
  <style scoped>
  .introduction-page {
    text-align: center;
    padding: 20px;
  }
  
  .header-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 20px;
  }
  
  .back-button {
    position: absolute;
    left: 40px;
    top: 25px;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    padding: 8px 20px;
    background-color: var(--color-background);
    color: var(--color-black)000;
    border: none;
    cursor: pointer;
    box-shadow: 5px 5px 1px -1px var(--color-text-top);
  }
  
  .title {
      color: var(--color-text-top);
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      font-size: 2rem;
      margin: 10px auto;
      text-align: center;
      width: fit-content;
    }

    .buttons-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    max-width: 80%;
    margin: 0 auto;
  }

  .button-perda-auditiva {
    background-color: var(--color-container-button);
    border: none;
    color: var(--color-black);
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5rem;
    font-weight: 500;
    padding: 10px;
    width: 25rem;
    height: 13rem;
    cursor: pointer;
    align-items: center;
}

.button-funcao-aparelho {
  background-color: var(--color-container-button);
    border: none;
    color: var(--color-black);
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5rem;
    font-weight: 500;
    padding: 10px;
    width: 25rem;
    height: 13rem;
    cursor: pointer;
    align-items: center;
}
  
  main {
    padding: 20px;
  }
  
  .content {
    font-size: 2rem;
    font-weight: 400;
    margin-top: 20px;
    color: var(--color-black)000;
  }
  
  .exit-button {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 20rem;
    padding: 8px 20px;
    background-color: var(--color-background);
    color: var(--color-black)000;
    border: none;
    cursor: pointer;
    box-shadow: 5px 5px 1px -1px var(--color-text-top);
  }
  </style>