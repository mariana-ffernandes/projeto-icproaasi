<template>
    <div class="register-page">
      <div class="header">
        <div class="logo-title-container">
          <img src="@/assets/logoProAASI.png" alt="ProAASI Logo" class="logo" />
          <h1 class="header-title">ProAASI</h1>
        </div>
      </div>
      <div class="register-container">
        <h2 class="title">Cadastrar</h2>
        <div class="form-group">
          <input type="text" id="name" class="form-control" placeholder="Nome" v-model="name" />
        </div>
        <div class="form-group">
          <input type="text" id="cpf" class="form-control" placeholder="CPF" v-model="cpf" @input="formatCPF" maxlength="14" />
        </div>
        <div class="form-group">
          <input type="password" id="password" class="form-control" placeholder="Senha" v-model="password" />
        </div>
        <button class="register-button" @click="register">Cadastrar</button>
        <div class="extra-buttons">
          <router-link to="/login" class="extra-button">Já tenho cadastro</router-link>
        </div>
      </div>
      <PageFooter />
    </div>
  </template>
  
  <script>
  import PageFooter from '@/components/PageFooter';
  
  export default {
    name: 'RegisterPage',
    components: {
      PageFooter
    },
    data() {
      return {
        name: '',
        cpf: '',
        password: ''
      };
    },
    methods: {
      formatCPF() {
        const cpf = this.cpf.replace(/\D/g, '');
        const formattedCPF = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        this.cpf = formattedCPF.slice(0, 14);
      },
      register() {
        console.log('Nome:', this.name);
        console.log('CPF:', this.cpf);
        console.log('Senha:', this.password);
  
        if (this.name.trim() && this.cpf.trim() && this.password.trim()) {
          //simulacao
          console.log('Cadastro realizado com sucesso:', {
            name: this.name,
            cpf: this.cpf,
            password: this.password
          });
          this.$router.push({ name: 'RegistrationSuccess' });
        } else {
          alert('Por favor, preencha todos os campos.');
        }
      }
    }
  }
  </script>

  
  <style scoped>
  .register-page {
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
  
  .register-container {
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
  
  .register-button {
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
    margin-bottom: 40px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    width: 15rem;
  }
  
  .register-button:hover {
    background-color: var(--color-background);
    color: #333;
  }
  
  .extra-buttons {
    display: flex;
    gap: 10px;
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
  