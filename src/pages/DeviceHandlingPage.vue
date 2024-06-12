<template>
  <div class="device-handling-page">
    <header class="header-container">
      <router-link to="/identification" class="back-button">← voltar</router-link> 
      <h1 class="title">Uso e Manuseio do Aparelho</h1>
    </header>
    <main>
      <div class="buttons-container">
        <button @click="navigateToContent('Desligar e ligar o aparelho', 'https://www.youtube.com/embed/video-id-1', 'Para desligar o aparelho abra o compartimento de pilha. Para ligar o aparelho feche o compartimento de pilha.')" class="handling-button">Desligar e ligar o aparelho</button>
        <button @click="navigateToContent('Identificar qual aparelho é de cada orelha', 'https://www.youtube.com/embed/video-id-2', 'O aparelho da orelha direita tem um sinal vermelho. O aparelho da orelha esquerda tem um sinal azul. Se a observação for difícil, peça ao fonoaudiólogo para fazer um sinal maior de marcação.')" class="handling-button">Identificar qual aparelho é de cada orelha</button>
        <button @click="navigateToContent('Limpar o aparelho', 'https://www.youtube.com/embed/video-id-3', 'Limpeo aparelho auditivo diariamente. Recomenda-se que a limpeza do aparelho seja feita sobre um pano macio, em cima de uma mesa, para evitar que o aparelho caia e seja danificado. Use uma escovinha/removedor de cera eou pano macio e seco para remover qualquer cera ou sujeira acumulada ao redor do canal e do compartimento da bateria. Nunca usar água, produtor de limpeza ou óleo para limpar seu aparelho auditivo.')" class="handling-button">Limpar o aparelho</button>
        <button @click="navigateToContent('Retirar e colocar pilhas', 'https://www.youtube.com/embed/video-id-4', 'Retire o lacre da pilha e espere 1 minuto. Abra o compartimento da pilha posicionando sua unha abaixo da borda da tampa móvel e puxe-a para fora com cuidado. Coloque a pilha no compartimento, lembre-se que o lado com sinal + (lado liso) da pilha deve estar para cima, ou do lado mais aberto do compartimento. Logo em seguida, feche o compartimento de pilha.')" class="handling-button">Retirar e colocar pilhas</button>
        <button @click="navigateToContent('Trocar o filtro de cera', 'https://www.youtube.com/embed/video-id-5', 'Com a ferramenta adequada, retire o protetor de cera usado. Do outro lado da haste está o filtro limpo. Encaixe a saída do aparelho no filtro limpo.')" class="handling-button">Trocar o filtro de cera</button>
        <button @click="navigateToContent('Onde guardar o aparelho', 'https://www.youtube.com/embed/video-id-6', 'O aparelho deve ser guardado...')" class="handling-button">Onde guardar o aparelho</button>
        <button @click="navigateToContent('Pilha: tamanho e onde comprar', 'https://www.youtube.com/embed/video-id-7', 'O tamanho da pilha e onde comprar...')" class="handling-button">Pilha: tamanho e onde comprar</button>
      </div>
      <button @click="exit" class="exit-button">Sair</button>
    </main>
  </div>
</template>
  
<script>  
export default {
  name: 'DeviceHandlingPage',
  methods: {
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
  