<template>
    <div class="home-page">
      <div class="content-container">
        <div class="left-side">
          <div class="header-container">
            <div class="logo-container">
              <img src="@/assets/logoProAASI.png" alt="ProAASI Logo" class="logo" />
            </div>
            <h1 class="title">ProAASI</h1>
          </div>
          <p class="subtitle">Programa de Orientação e Adaptação do Aparelho de Amplificação Sonora Individual</p>
        </div>
        <div class="right-side">
          <div class="buttons-wrapper">
            <div class="buttons-container">
              <router-link to="/login" class="button">Entrar</router-link>
              <router-link to="/register" class="button">Cadastrar</router-link>
              <router-link to="/about" class="button">Sobre o ProAASI</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>
  
  <style scoped>
  .home-page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: url('@/assets/background.png') no-repeat center center;
    background-size: cover;
    padding: 20px 0px 20px 200px;
  }
  
  .content-container {
    display: contents;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
  }
  
  .left-side {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .header-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .logo-container {
    display: flex;
    align-items: center;
  }
  
  .logo {
    width: 200px;
  }
  
  .title {
    color: var(--color-white);
    font-family: 'Montserrat', sans-serif;
    font-size: 6rem;
    font-weight: 500;
  }
  
  .subtitle {
    color: var(--color-white);
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
    max-width: 80%;
  }
  
  .right-side {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    flex: 1;
  }
  
  .buttons-container {
  width: 35rem;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-menu-container);
  padding: 30px;
  border-radius: none;
}
  
  .button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: #000000;
  margin: 10px 0;
  width: 80%;
  max-width: 30rem;
  padding: 20px;
  background-color: #FFFFFF;
  border: none;
  box-shadow: 5px 6px 1px 1px var(--color-shadow-button);
  cursor: pointer;
  text-align: center;
  }
  
  .button:hover {
    background-color: #f0f0f0;
    color: #333;
  }
  </style>
  