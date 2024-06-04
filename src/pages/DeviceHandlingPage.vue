<template>
    <div class="device-handling-page">
        <header class="header-container">
        <button @click="goBack" class="back-button">← voltar</button>
        <h1 class="title">Uso e Manuseio do Aparelho</h1>
      </header>
      <main>
        <div class="buttons-container">
          <button class="handling-button">Desligar e ligar o aparelho</button>
          <button class="handling-button">Identificar qual aparelho é de cada orelha</button>
          <button class="handling-button">Limpar o aparelho</button>
          <button class="handling-button">Retirar e<br>colocar pilhas</button>
          <button class="handling-button">Trocar o<br>filtro de cera</button>
          <button class="handling-button">Onde guardar<br>o aparelho</button>
          <button class="handling-button">Pilha: tamanho<br>e onde comprar</button>
        </div>
        <button @click="exit" class="exit-button">Sair</button>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DeviceHandlingPage',
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
  .device-handling-page {
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
    top: 30px;
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
    font-weight: 600;
    font-size: 2.5rem;
    margin: 10px auto;
    text-align: center;
    width: fit-content;
  }
  
  main {
    padding: 0px;
  }
  
  .buttons-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin: 20px 0;
  }
  
  .handling-button {
    background-color: var(--color-container-button);
    border: none;
    color: #000;
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5rem;
    font-weight: 500;
    padding: 10px;
    width: 25rem;
    height: 13rem;
    cursor: pointer;
    align-items: center;
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
  