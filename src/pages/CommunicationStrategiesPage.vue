<template>
    <div class="communication-strategies-page">
      <header class="header-container">
        <button @click="goBack" class="back-button">← voltar</button>
        <h1 class="title">Estratégias de Comunicação</h1>
      </header>
      <main>
        <div class="buttons-container">
          <button class="strategy-button">Ainda estou<br>com dúvidas</button>
          <button class="strategy-button">Ambientes para<br>a comunicação</button>
          <button class="strategy-button">Como devo<br>me comunicar</button>
          <button class="strategy-button">E o desconforto?</button>
          <button class="strategy-button">Não consegui<br>entender</button>
          <button class="strategy-button">Uso do<br>aparelho auditivo</button>
        </div>
        <button @click="exit" class="exit-button">Sair</button>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CommunicationStrategiesPage',
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      exit() {
        // fazer lógica para sair
        console.log('Saindo...');
      }
    }
  }
  </script>
  
  <style scoped>
  .communication-strategies-page {
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
    top: 20px;
    left: 20px;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 8px 20px;
    background-color: #FFFFFF;
    color: #000000;
    border: none;
    cursor: pointer;
    box-shadow: 5px 5px 1px -1px var(--color-text-top);
    text-align: center;
  }
  
  .logo {
    margin-top: 20px;
    width: 100px;
  }
  
  .title {
    color: var(--color-text-top);
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5rem;
    font-weight: 600;
    margin: 0px auto;
    text-align: center;
    width: fit-content;
  }
  
  main {
    padding: 20px;
  }
  
  .buttons-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    max-width: 60%;
    margin: 0 auto;
  }
  
  .strategy-button {
    background-color: var(--color-container-button);
    border: none;
    color: #000;
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    font-weight: 500;
    padding: 10px;
    flex-basis: calc(33.333% - 20px); /* Largura de 1/3 do contêiner menos o gap */
    height: 11rem;
    cursor: pointer;
  }
  
  .exit-button {
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 20px;
    padding: 8px 20px;
    background-color: #FFFFFF;
    color: #000000;
    border: none;
    cursor: pointer;
    box-shadow: 5px 5px 1px -1px var(--color-text-top);
  }
  </style>