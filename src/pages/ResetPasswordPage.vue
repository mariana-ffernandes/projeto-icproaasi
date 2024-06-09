<template>
    <div class="reset-password-page">
      <div class="header">
        <div class="logo-title-container">
          <img src="@/assets/logoProAASI.png" alt="ProAASI Logo" class="logo" />
          <h1 class="header-title">ProAASI</h1>
        </div>
      </div>
      <div class="reset-password-container">
        <h2 class="title">Criar nova senha</h2>
        <div class="form-group">
          <input type="text" id="name" class="form-control" placeholder="Nome" />
        </div>
        <div class="form-group">
          <input type="email" id="email" class="form-control" placeholder="E-mail" />
        </div>
        <div class="form-group">
          <input type="password" id="new-password" class="form-control" placeholder="Nova senha" />
        </div>
        <button class="reset-password-button">Salvar nova senha</button>
      </div>
      <PageFooter />
    </div>
  </template>
  
  <script>
  import PageFooter from '@/components/PageFooter';
  
  export default {
    name: 'ResetPasswordPage',
    components: {
      PageFooter
    }
  }
  </script>
  
  <style scoped>
  .reset-password-page {
    display: flex;
    flex-direction: column;
    align-items: center;    
    height: 100vh;
    background-color: var(--color-background);
    padding: 20px;
    margin-top: 100px;
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
  
  .reset-password-container {
    background-color: var(--color-login-container);
    padding: 40px;
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40rem;
    height: 25rem;
  }
  
  .title {
    color: var(--color-txt-title);
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    width: 100%;
  }
  
  .form-control {
    padding: 10px;
    background-color: transparent;
    border: 1px solid var(--color-black);
    border-radius: 0px;
    font-size: 1rem;
    width: 100%;
  }
  
  .form-control::placeholder {
    text-align: center;
    color: var(--color-black);
  }
  
  .reset-password-button {
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
    margin-bottom: 80px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    width: 20rem;
  }
  
  .reset-password-button:hover {
    background-color: var(--color-background);
    color: #333;
  }
  </style>
  