<template>
  <div class="communication-strategies-page">
    <header class="header-container">
      <router-link to="/menu" class="back-button">← voltar</router-link> 
      <h1 class="title">Estratégias de Comunicação</h1>
    </header>
    <main>
      <div class="buttons-container">
        <button 
          v-for="(text, key) in strategiesTexts[selectedUserType]" 
          :key="key" 
          @click="navigateToContent(titles[selectedUserType][key], getVideoUrl(selectedUserType, key), text)" 
          class="strategy-button">
          {{ titles[selectedUserType][key] }}
        </button>
      </div>
      <button @click="exit" class="exit-button">Sair</button>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { texts } from '@/texts';

export default {
  name: 'CommunicationStrategiesPage',
  computed: {
    ...mapState(['userType']),
    selectedUserType() {
      return this.userType === 'partner' ? 'partner' : 'user';
    },
    strategiesTexts() {
      return texts.communicationStrategies;
    },
    titles() {
      return {
        user: {
          tempoUso: 'Tempo de Uso',
          usoAparelho: 'Uso do aparelho auditivo',
          processoAdaptacao: 'Processo de Adaptação',
          ambientesComunicacao: 'Ambientes para a comunicação',
          naoEntendi: 'Não consegui entender, e agora?',
          comoComunicar: 'Como devo me comunicar?',
          desconforto: 'E se houver desconforto?',
          outrosCuidados: 'Outros cuidados',
          possiveisProblemas: 'Possíveis problemas',
          aindaDuvidas: 'Ainda estou com dúvidas'
        },
        partner: {
          parceiroComunicacao: 'Parceiros de Comunicação',
          garantirAtencao: 'Garanta a Atenção e Compreensão',
          tempoUso: 'Tempo de Uso',
          incentivoUso: 'Incentivando o Uso',
          processoAdaptacao: 'Processo de Adaptação',
          ambientesComunicacao: 'Ambientes para a comunicação',
          naoEntendi: 'Não consegui entender, e agora?',
          comoComunicar: 'Como devo me comunicar?',
          estrategiasInterlocutor: 'Estratégias Interlocutor',
          desconforto: 'E se houver desconforto?',
          outrosCuidados: 'Outros cuidados',
          possiveisProblemas: 'Possíveis problemas',
          aindaDuvidas: 'Ainda estou com dúvidas'
        }
      };
    }
  },
  methods: {
    getVideoUrl(userType, topic) {
      const videos = {
        user: {
          tempoUso: 'https://www.youtube.com/embed/ZN5t21OalVU',
          usoAparelho: 'https://www.youtube.com/embed/fnR3MPALfUA',
          processoAdaptacao: 'https://www.youtube.com/embed/V6PQ2pVcYYA',
          ambientesComunicacao: 'https://www.youtube.com/embed/QoZLNVt5zsw',
          naoEntendi: 'https://www.youtube.com/embed/jOB3-xncgA8',
          comoComunicar: 'https://www.youtube.com/embed/zNQ7GBOjSzQ',
          desconforto: 'https://www.youtube.com/embed/9VLcV2tJIJo',
          outrosCuidados: 'https://www.youtube.com/embed/1PFM-aA36mI',
          possiveisProblemas: 'https://www.youtube.com/embed/8LpU_bV9jNk',
          aindaDuvidas: 'https://www.youtube.com/embed/UNkjZOObUvI'
        },
        partner: {
          parceiroComunicacao: 'https://www.youtube.com/embed/NHNPOmN8OFg',
          garantirAtencao: 'https://www.youtube.com/embed/aA72_Opherk',
          tempoUso: 'https://www.youtube.com/embed/ZN5t21OalVU',
          incentivoUso: 'https://www.youtube.com/embed/X1FyPjh_Wdo',
          processoAdaptacao: 'https://www.youtube.com/embed/V6PQ2pVcYYA',
          ambientesComunicacao: 'https://www.youtube.com/embed/QoZLNVt5zsw',
          naoEntendi: 'https://www.youtube.com/embed/jOB3-xncgA8',
          comoComunicar: 'https://www.youtube.com/embed/fvRAwoetp3E',
          estrategiasInterlocutor: 'https://www.youtube.com/embed/hAIIgBStsMo',
          desconforto: 'https://www.youtube.com/embed/9VLcV2tJIJo',
          outrosCuidados: 'https://www.youtube.com/embed/1PFM-aA36mI',
          possiveisProblemas: 'https://www.youtube.com/embed/8LpU_bV9jNk',
          aindaDuvidas: 'https://www.youtube.com/embed/UNkjZOObUvI'
        }
      };

      return videos[userType][topic];
    },
    navigateToContent(title, videoUrl, text) {
      this.$router.push({
        path: '/content/1',
        query: {
          title: title,
          videoUrl: videoUrl,
          text: text,
          from: '/communication-strategies',
          pageTitle: 'Estratégias de Comunicação'
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
  top: 30px;
  left: 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 8px 20px;
  background-color: var(--color-white);
  color: var(--color-black);
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
  max-width: 80%;
  margin: 0 auto;
}

.strategy-button {
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
  background-color: var(--color-white);
  color: var(--color-black);
  border: none;
  cursor: pointer;
  box-shadow: 5px 5px 1px -1px var(--color-text-top);
}
</style>  