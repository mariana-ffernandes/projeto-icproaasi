<template>
  <div class="home-page">
    <div class="content-container">
      <div class="left-side">
        <div class="header-container">
          <div class="logo-container">
            <img src="@/assets/logoProAASI.png" alt="ProAASI Logo" class="logo" />
          </div>
          <h1 class="title">Pro<br>AASI</h1>
        </div>
        <p class="subtitle">Programa de Orientação e Adaptação do Aparelho de Amplificação Sonora Individual</p>
      </div>
      <div class="right-side">
        <div class="buttons-wrapper">
          <div class="buttons-container">
            <router-link to="/login" class="button">Entrar</router-link>
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
  padding: 20px;
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
}

.left-side {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1;
}

.header-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  width: 200px;
}

.title {
  color: var(--color-white);
  font-family: 'Montserrat', sans-serif;
  font-size: 6rem;
  font-weight: 500;
  line-height: 1; 
}

.subtitle {
  color: var(--color-white);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.7rem;
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
  color: var(--color-black);
  margin: 10px 0;
  width: 80%;
  max-width: 30rem;
  padding: 20px;
  background-color: var(--color-background);
  border: none;
  box-shadow: 5px 6px 1px 1px var(--color-shadow-button);
  cursor: pointer;
  text-align: center;
}

.button:hover {
  background-color: var(--color-background);
  color: #333;
}

@media (max-width: 1024px) {
  .content-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .left-side {
    align-items: center;
  }

  .title {
    font-size: 5rem;
  }
  
  .subtitle {
    color: var(--color-white);
    font-family: 'Montserrat', sans-serif;
    font-size: 1.9rem;
    font-weight: 600;
    text-align: center;
    max-width: 80%;
  }

  .buttons-container {
    width: 30rem;
  }

  .button {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .content-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .left-side {
    align-items: center;
  }

  .logo {
    width: 10rem;
  }

  .title {
    font-size: 5rem;
  }

  .subtitle {
    color: var(--color-white);
    font-family: 'Montserrat', sans-serif;
    font-size: 1.9rem;
    font-weight: 600;
    text-align: center;
    max-width: 80%;
  }

  .buttons-container {
    width: 25rem;
  }

  .button {
    font-size: 1.5rem;
    width: 90%;
  }
}

@media (max-width: 480px) {
  .logo {
    width: 150px; 
  }

  .title {
    font-size: 4rem;
  }

  .subtitle {
    color: var(--color-white);
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    max-width: 80%;
  }

  .buttons-container {
    width: 100%;
    padding: 20px;
  }

  .button {
    font-size: 2rem;
    padding: 10px;
    width: 100%;
  }
}
</style>
