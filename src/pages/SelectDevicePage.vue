<template>
    <div class="select-device">
      <header>
        <button @click="goBack" class="back-button">← voltar</button>
        <h1 class="title">Selecione o aparelho</h1>
      </header>
      <div class="devices-container">
        <div class="device" @click="selectDevice('intra-aural')">
            <img src="https://www.centroauditivosaogabriel.com.br/wp-content/uploads/2019/12/aparelhos-auditivos.png" alt="Descrição da Imagem" />
          <p>Intra-aural</p>
        </div>
        <div class="device" @click="selectDevice('mini-retro')">
          <img src="https://www.centroauditivosaogabriel.com.br/wp-content/uploads/2019/12/aparelhos-auditivos.png"/>
          <p>Mini Retro<br>com tubo fino</p>
        </div>
        <div class="device" @click="selectDevice('retroauricular-receptor')">
            <img src="https://www.centroauditivosaogabriel.com.br/wp-content/uploads/2019/12/aparelhos-auditivos.png"/>
          <p>Retroauricular<br>com receptor<br>no canal</p>
        </div>
        <div class="device" @click="selectDevice('retroauricular-molde')">
            <img src="https://www.centroauditivosaogabriel.com.br/wp-content/uploads/2019/12/aparelhos-auditivos.png"/>
          <p>Retroauricular com molde</p>
        </div>
      </div>
      <button @click="exit" class="exit-button">Sair</button>
    </div>
  </template>
  
  <script>
  export default {
  name: 'SelectDevicePage',
  methods: {
    goBack() {
      this.$router.go(-1); 
    },
    selectDevice(device) {
      console.log(`Selecionando o dispositivo: ${device}`);
    },
    exit() {
      console.log('Saindo...');
    }
  }
  }
  </script>
  
  <style scoped>
  .select-device {
  text-align: center;
  padding: 20px;
  }
  
  .back-button {
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 20px;
  padding: 8px 20px; 
  background-color: #FFFFFF;
  color: #000000;
  border: none;
  cursor: pointer;
  box-shadow: 5px 5px 1px -1px var(--color-text-top);    
  text-align: center;
  width: auto;
  position: absolute;
  top: 27%;
  left: 20px;
  margin: 10px;
  }
  
  .title {
  color: var(--color-text-top);
  font-size: 2rem;
  margin: 25px auto;
  text-align: center;
  width: fit-content;
  }
  
  .devices-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  background-color: var(--color-container-button);
  padding: 40px auto;
  border-radius: none;
  }
  
  .device {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  width: 150px;
  word-wrap: break-word;
  }
  
  .device img {
  width: 100%;
  height: auto; 
  }
  
  .device p {
  margin-top: 10px;
  color: var(--color-text-container);
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  white-space: normal;
  }
  
  .exit-button {
  font-size: 1rem;
  font-weight: 600;
  margin-top: 20px;
  padding: 8px 20px; 
  background-color: #FFFFFF;
  color: #000000;
  border: none;
  cursor: pointer;
  box-shadow: 5px 5px 1px -1px var(--color-text-top);
  }
  </style>