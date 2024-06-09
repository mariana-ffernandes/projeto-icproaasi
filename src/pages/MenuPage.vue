<template>
  <main>
    <div class="text-top">O que gostaria de acessar?</div>
    <div class="container">
      <div class="button-container">
        <button @click="navigateTo('introduction')">Introdução ao Conteúdo</button>
        <button @click="navigateTo('device-handling')">Uso e Manuseio do Aparelho</button>
        <button @click="navigateTo('communication-strategies')">Estratégias de Comunicação</button>
      </div>
    </div>
    <button class="exit-button">Sair</button>
  </main>
</template>

<script>
export default {
  name: 'MenuPage',
  methods: {
    navigateTo(route) {
      this.$router.push(`/${route}`);
    },
    navigateToContent(title, videoUrl, text) {
      this.$router.push({
        path: '/content/1',
        query: {
          title: title,
          videoUrl: videoUrl,
          text: text
        }
      });
    }
  }
}
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 35rem;
  padding: 0 20px;
}

.text-top {
  text-align: center;
  margin: 10px 0;
  padding-top: 30px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 2rem;
  color: var(--color-text-top);
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.button-container {
  width: 100%;
  max-width: 70rem;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-container-button);
  padding: 20px;
  border-radius: none;
}

.button-container button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-black)000;
  margin: 10px 0;
  width: 100%;
  max-width: 30rem;
  padding: 20px;
  background-color: var(--color-background);
  border: none;
  box-shadow: 5px 6px 1px 1px var(--color-text-top);
  cursor: pointer;
}

.exit-button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 40px;
  padding: 8px 20px;
  background-color: var(--color-background);
  color: var(--color-black)000;
  border: none;
  cursor: pointer;
  box-shadow: 5px 5px 1px -1px var(--color-text-top);
}
</style>
