<template>
    <div class="registration-success-page">
      <div class="header">
        <div class="logo-title-container">
          <img src="@/assets/logoProAASI.png" alt="ProAASI Logo" class="logo" />
          <h1 class="header-title">ProAASI</h1>
        </div>
      </div>
      <div class="success-container">
        <h2 class="success-message">Cadastro realizado!<br />Bem-vindo(a) ao ProAASI</h2>
        <router-link to="/menu" class="success-button">Entrar</router-link>
      </div>
      <PageFooter />
    </div>
  </template>
  
  <script>
  import PageFooter from '@/components/PageFooter';
  
  export default {
    name: 'RegistrationSuccessPage',
    components: {
      PageFooter
    }
  }
  </script>
  
  <style scoped>
  .registration-success-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: var(--color-background);
    padding: 20px;
    position: relative;
  }
  
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .logo-title-container {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
  }
  
  .logo {
    width: 80px;
  }
  
  .header-title {
    color: var(--color-black);
  font-family: 'Montserrat', sans-serif; 
  font-size: 3rem;
  font-weight: 500;
  margin: 0;
  }
  
  .success-container {
    background-color: var(--color-container-success);
    padding: 40px;
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .success-message {
    color: var(--color-white);
    font-family: 'Montserrat', sans-serif; 
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .success-button {
    background-color: var(--color-white);
    color: var(--color-black);
    padding: 10px 20px;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    border: none;
    border-radius: 0px;
    box-shadow: 2px 3px 1px 1px var(--color-shadow-button);
    margin-top: 20px;
    margin-bottom: 40px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    width: 15rem;
    text-align: center;
  }
  
  .success-button:hover {
    background-color: var(--color-background);
    color: #333;
  }
  </style>
  