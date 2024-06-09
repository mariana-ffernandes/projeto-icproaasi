<template>
  <div class="communication-strategies-page">
    <header class="header-container">
      <router-link to="/" class="back-button">← voltar</router-link> 
      <h1 class="title">Estratégias de Comunicação</h1>
    </header>
    <main>
      <div class="buttons-container">
        <button @click="navigateToContent('Ainda estou com dúvidas', 'https://www.youtube.com/embed/video-id-1', 'Para desligar o aparelho abra o compartimento de pilha. Para ligar o aparelho feche o compartimento de pilha.')" class="strategy-button">Desligar e ligar o aparelho</button>
        <button @click="navigateToContent('Ambientes para a comunicação', 'https://www.youtube.com/embed/video-id-2', 'O aparelho da orelha direita tem um sinal vermelho. O aparelho da orelha esquerda tem um sinal azul. Se a observação for difícil, peça ao fonoaudiólogo para fazer um sinal maior de marcação.')" class="strategy-button">Identificar qual aparelho é de cada orelha</button>
        <button @click="navigateToContent('Como devo me comunicar', 'https://www.youtube.com/embed/video-id-3', 'Limpe o aparelho auditivo diariamente. Recomenda-se que a limpeza do aparelho seja feita sobre um pano macio, em cima de uma mesa, para evitar que o aparelho caia e seja danificado. Use uma escovinha/removedor de cera e/ou pano macio e seco para remover qualquer cera ou sujeira acumulada ao redor do canal e do compartimento da bateria. Nunca usar água, produtos de limpeza ou óleo para limpar seu aparelho auditivo.')" class="strategy-button">Limpar o aparelho</button>
        <button @click="navigateToContent('E o desconforto?', 'https://www.youtube.com/embed/video-id-4', 'Retire o lacre da pilha e espere 1 minuto. Abra o compartimento da pilha posicionando sua unha abaixo da borda da tampa móvel e puxe-a para fora com cuidado. Coloque a pilha no compartimento, lembre-se que o lado com sinal + (lado liso) da pilha deve estar para cima, ou do lado mais aberto do compartimento. Logo em seguida, feche o compartimento de pilha.')" class="strategy-button">Retirar e colocar pilhas</button>
        <button @click="navigateToContent('Não consegui entender', 'https://www.youtube.com/embed/video-id-5', 'Com a ferramenta adequada, retire o protetor de cera usado. Do outro lado da haste está o filtro limpo. Encaixe a saída do aparelho no filtro limpo.')" class="strategy-button">Trocar o filtro de cera</button>
        <button @click="navigateToContent('Uso do aparelho auditivo', 'https://www.youtube.com/embed/video-id-6', 'O aparelho deve ser guardado...')" class="strategy-button">Onde guardar o aparelho</button>
      </div>
      <button @click="exit" class="exit-button">Sair</button>
    </main>
  </div>
</template>

<script>
export default {
  name: 'CommunicationStrategiesPage',
  methods: {
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
      this.$router.push('/');
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