<template>
  <div class="select-device">
    <header>
      <router-link to="/menu" class="back-button">← voltar</router-link>
      <h1 class="title">Selecione o aparelho</h1>
    </header>
    <div class="devices-container">
      <div class="device" @click="selectDevice('intra-aural')">
        <img src="@/assets/icon_intraaural.png" alt="Descrição da Imagem" />
        <p>Mini<br>Intra-aural</p>
      </div>
      <div class="device" @click="selectDevice('mini-retro')">
        <img src="@/assets/icon_miniretro.png"/>
        <p>Mini Retro<br>com tubo fino</p>
      </div>
      <div class="device" @click="selectDevice('retroauricular-receptor')">
        <img src="@/assets/icon_retroauricular.png"/>
        <p>Mini<br>Retroauricular com receptor<br>no canal</p>
      </div>
      <div class="device" @click="selectDevice('retroauricular-molde')">
        <img src="@/assets/icon_retromolde.png"/>
        <p>Mini Retroauricular com molde</p>
      </div>
    </div>
    <button @click="exit" class="exit-button">Sair</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'SelectDevicePage',
  methods: {
    ...mapMutations(['setSelectedDevice']),
    selectDevice(device) {
      this.setSelectedDevice(device);
      this.$router.push({ name: 'DeviceHandling' });
    },
    exit() {
      this.$router.push('/identification');
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
  background-color: var(--color-background);
  color: var(--color-black)000;
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
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  margin: 25px auto;
  text-align: center;
  width: fit-content;
}
  
.devices-container {
  background-color: var(--color-container-button);
  border: none;
  color: var(--color-black);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px auto;
  width: 95%;
  height: 25rem;
}

.device {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  cursor: pointer;
  width: 150px;
  word-wrap: break-word;
}

.device p {
  margin-top: 10px;
  color: var(--color-text-container);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  white-space: normal;
}

.exit-button {
  font-size: 1rem;
  font-weight: 600;
  margin-top: 20px;
  padding: 8px 20px; 
  background-color: var(--color-background);
  color: var(--color-black)000;
  border: none;
  cursor: pointer;
  box-shadow: 5px 5px 1px -1px var(--color-text-top);
}
</style>
