<template>
  <div class="login-page">
    <div class="header">
      <div class="logo-title-container">
        <img src="@/assets/logoProAASI.png" alt="ProAASI Logo" class="logo" />
        <h1 class="header-title">ProAASI</h1>
      </div>
    </div>
      <div class="login-container">
        <h1 class="title">Entrar</h1>
      <div class="form-group">
        <input type="text" id="cpf" class="form-control" placeholder="CPF" />
      </div>
      <div class="form-group">
        <input type="password" id="password" class="form-control" placeholder="Senha" />
      </div>
        <button class="login-button">Iniciar sessão</button>
        <div class="extra-buttons">
          <router-link to="/reset-password" class="extra-button">Esqueci a senha</router-link>
          <router-link to="/register" class="extra-button">Não tenho cadastro</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage'
  }
  </script>
  
  <style scoped>
  .login-page {
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
  margin-bottom: 30px;
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
  
  .login-container {
    background-color: var(--color-login-container);
    padding: 40px;
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40rem;
    height: 29rem;
  }
  
  .title {
    color: var(--color-txt-title);
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    width: 100%;
  }
  
  label {
    margin-bottom: 5px;
    font-weight: bold;
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
  
  .login-button {
    background-color: var(--color-background);
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
  
  .login-button:hover {
    background-color: var(--color-background);
    color: #333;
  }
  
  .extra-buttons {
    display: flex;
    gap: 30px;
  }
  
  .extra-button {
    background-color: var(--color-background);
    color: var(--color-black);
    padding: 10px 20px;
    text-decoration: none;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    border: none;
    border-radius: 0px;
    box-shadow: 2px 3px 1px 1px var(--color-shadow-button);
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    width: 15rem;
  }
  
  .extra-button:hover {
    background-color: var(--color-background);
    color: #333;
  }

  
  </style>
  