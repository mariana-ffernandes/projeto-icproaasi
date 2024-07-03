<template>
  <div class="device-handling-page">
    <header class="header-container">
      <router-link to="/menu" class="back-button">← voltar</router-link> 
      <h1 class="title">Uso e Manuseio do Aparelho</h1>
    </header>
    <main>
      <div class="buttons-container">
        <button v-for="(buttonText, topic) in buttonMappings" :key="topic" @click="navigateToContent(buttonText, getVideoUrl(topic), getText(topic))" class="handling-button">
          {{ buttonText }}
        </button>
      </div>
      <button @click="exit" class="exit-button">Sair</button>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { videos } from '@/videos';
import { texts } from '@/texts';

export default {
  name: 'DeviceHandlingPage',
  computed: {
    ...mapState(['selectedDevice']),
    buttonMappings() {
      return {
        desligarLigar: 'Como ligar e desligar o AASI',
        retirarColocarPilhas: 'Como colocar e retirar as pilhas',
        tamanhoComprarPilha: 'Tamanho da pilha e onde comprar',
        pilhaAcabando: 'Como saber que a pilha está acabando',
        colocarRetirarAasi: 'Como colocar e retirar o AASI',
        limpar: 'Como limpar o AASI',
        trocarFiltroCera: 'Trocar o filtro de cera',
        identificarOrelha: 'Como identificar qual AASI é de cada orelha',
        guardarAparelho: 'Onde guardar o AASI'
      };
    }
  },
  methods: {
    getVideoUrl(topic) {
      return videos[this.selectedDevice][topic];
    },
    getText(topic) {
      return texts[topic];
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
  position: relative;
  padding: 20px;
}

.back-button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 8px 20px;
  background-color: var(--color-background);
  color: var(--color-black);
  border: none;
  cursor: pointer;
  box-shadow: 5px 5px 1px -1px var(--color-text-top);
  text-align: center;
  position: absolute;
  left: 20px;
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
  color: var(--color-black);
  border: none;
  cursor: pointer;
  box-shadow: 5px 5px 1px -1px var(--color-text-top);
}
</style>
