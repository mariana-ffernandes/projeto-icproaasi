<template>
    <div class="introduction-page">
      <header class="header-container">
        <button @click="goBack" class="back-button">← voltar</button>
        <h1 class="title">Introdução ao Conteúdo</h1>
      </header>
      <main>
        <p class="content">Este conteúdo está sendo elaborado</p>
        <button @click="exit" class="exit-button">Sair</button>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'IntroductionPage',
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      exit() {
        console.log('Saindo...');
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
    background-color: #FFFFFF;
    color: #000000;
    border: none;
    cursor: pointer;
    box-shadow: 5px 5px 1px -1px var(--color-text-top);
  }
  
  .title {
      color: var(--color-text-top);
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      font-size: 2rem;
      margin: 10px auto;
      text-align: center;
      width: fit-content;
    }
  
  main {
    padding: 20px;
  }
  
  .content {
    font-size: 2rem;
    font-weight: 400;
    margin-top: 20px;
    color: #000000;
  }
  
  .exit-button {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 20rem;
    padding: 8px 20px;
    background-color: #FFFFFF;
    color: #000000;
    border: none;
    cursor: pointer;
    box-shadow: 5px 5px 1px -1px var(--color-text-top);
  }
  </style>