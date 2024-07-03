<template>
  <div class="communication-strategies-page">
    <header class="header-container">
      <router-link to="/identification" class="back-button">← voltar</router-link>
      <h1 class="text-top">O que gostaria de acessar?</h1>
    </header>
    <main>
      <div class="container">
        <div class="button-container">
          <button @click="navigateTo('introduction')">Introdução ao Conteúdo</button>
          <button @click="navigateTo('select-device', 'device-handling')">Uso e Manuseio do Aparelho</button>
          <button @click="navigateTo('communication-strategies', 'communication-strategies')">Estratégias de Comunicação</button>
        </div>
      </div>
      <button class="exit-button">Sair</button>
    </main>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'MenuPage',
  methods: {
    ...mapMutations(['setSelectedItem']),
    navigateTo(route, item = null) {
      if (item) {
        this.setSelectedItem(item);
      }
      this.$router.push(`/${route}`);
    }
  }
}
</script>

<style scoped>
.communication-strategies-page {
  padding: 20px;
}

.header-container {
  display: flex;
  justify-content: center;
  position: relative;
  padding-bottom: 20px;
}

.back-button {
  position: absolute;
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

.text-top {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 2rem;
  color: var(--color-text-top);
  margin: 20px auto;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25rem;
  padding: 0 20px;
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
  color: var(--color-black);
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
  color: var(--color-black);
  border: none;
  cursor: pointer;
  box-shadow: 5px 5px 1px -1px var(--color-text-top);
}
</style>
