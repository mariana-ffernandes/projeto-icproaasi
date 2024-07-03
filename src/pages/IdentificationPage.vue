<template>
  <div class="identification-page">
    <div class="header">
      <h1 class="title">Identificação</h1>
    </div>
    <div class="identification-container">
      <div class="option" @click="selectUserType('user')">
        <img src="@/assets/icon_retroauricular.png" alt="Usuário do aparelho" />
        <p>Usuário do aparelho</p>
      </div>
      <div class="option" @click="selectUserType('partner')">
        <img src="@/assets/icon_partner.png" alt="Parceiro(a) de comunicação" />
        <p>Parceiro(a) de comunicação</p>
      </div>
    </div>
    <button class="exit-button" @click="exit">Sair</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'IdentificationPage',
  methods: {
    ...mapMutations(['setUserType']),
    selectUserType(type) {
      this.setUserType(type);
      this.$router.push({ name: 'Menu' });
    },
    exit() {
      this.$router.push('/');
    }
  }
}
</script>
<style scoped>
.identification-page {
    text-align: center;
    padding: 20px;
}

.header {
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

.identification-container {
    background-color: var(--color-container-button);
    border: none;
    color: var(--color-black);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px auto;
    width: 50rem;
}

.option {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-top: 20px;
  max-width: 80%;
}

.option p {
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5rem;
    font-weight: 500;
    color: var(--color-text-container);
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