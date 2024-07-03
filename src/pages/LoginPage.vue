<template>
  <div class="login-page">
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSdztn-p55WxTxzkUFcOoy-aANK-tfonqi8CwjqY2dDb1gkOSg/viewform"
      class="google-forms"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      style="border: none; width: 100%; height: 100vh;">
      Carregando…
    </iframe>
    <button @click="proceed" class="proceed-button">Prosseguir</button>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  methods: {
    proceed() {
      this.$router.push({ name: 'Identification' });
    }
  }
}
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2e7f9;
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

.proceed-button {
  background-color: var(--color-background);
  color: var(--color-black);
  padding: 10px 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  border: none;
  border-radius: 0px;
  box-shadow: 2px 3px 1px 1px var(--color-shadow-button);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  margin: 20px;
  align-self: center;
}

.proceed-button:hover {
  background-color: var(--color-background);
  color: #333;
}

@media (max-width: 1024px) {
  .header-title {
    font-size: 2.5rem;
  }
  
  .login-container {
    width: 80%;
    height: auto;
  }

  .login-button {
    width: 80%;
  }

  .extra-button {
    width: 80%;
  }
}

@media (max-width: 768px) {
  .header-title {
    font-size: 2rem;
  }

  .logo {
    width: 60px;
  }

  .login-container {
    padding: 20px;
    width: 100%;
  }

  .login-button {
    width: 100%;
  }

  .extra-buttons {
    flex-direction: column;
    gap: 10px;
  }

  .extra-button {
    width: 90%;
  }
}

@media (max-width: 480px) {
  .header-title {
    font-size: 3rem;
  }

  .logo {
    width: 80px;
  }

  .login-container {
    padding: 10px;
    width: 95%;
    height: 58%;
  }

  .form-control {
    font-size: 1.3rem;
    width: 100%;
  }

  .login-button {
    width: 100%;
    max-width: 17rem;
    font-size: 1.5rem;
  }

  .extra-button {
    width: 100%;
    max-width: 19rem;
    font-size: 1.5rem;
  }
}
</style>
