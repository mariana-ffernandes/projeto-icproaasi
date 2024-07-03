<template>
  <div class="device-handling-page">
    <header class="header-container">
      <router-link to="/select-device" class="back-button">← voltar</router-link> 
      <h1 class="title">Uso e Manuseio do Aparelho</h1>
    </header>
    <main>
      <div class="buttons-container">
        <button 
          v-for="(text, key) in deviceTexts[selectedDevice]" 
          :key="key" 
          @click="navigateToContent(deviceTitles[selectedDevice][key], getVideoUrl(selectedDevice, key), text)" 
          class="handling-button">
          {{ deviceTitles[selectedDevice][key] }}
        </button>
      </div>
      <button @click="exit" class="exit-button">Sair</button>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { texts, titles } from '@/texts';
import { videos } from '@/videos';

export default {
  name: 'DeviceHandlingPage',
  computed: {
    ...mapState(['selectedDevice']),
    deviceTexts() {
      return texts;
    },
    deviceTitles() {
      return titles;
    }
  },
  methods: {
    getVideoUrl(device, topic) {
      return videos[device][topic];
    },
    navigateToContent(title, videoUrl, text) {
      this.$router.push({
        path: '/content/1',
        query: {
          title: title,
          videoUrl: videoUrl,
          text: text,
          from: '/device-handling',
          pageTitle: 'Uso e Manuseio do Aparelho'
        }
      });
    },
    exit() {
      this.$router.push('/menu');
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
  background-color: var(--color-background);
  color: var(--color-black)000;
  border: none;
  cursor: pointer;
  box-shadow: 5px 5px 1px -1px var(--color-text-top);
  text-align: center;
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

.exit-button {
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 20px;
  padding: 8px 20px;
  background-color: var(--color-background);
  color: var(--color-black)000;
  border: none;
  cursor: pointer;
  box-shadow: 5px 5px 1px -1px var(--color-text-top);
}
</style>
