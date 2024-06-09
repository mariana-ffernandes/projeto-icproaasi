<template>
    <div class="terms-page">
      <div class="header">
        <div class="logo-title-container">
          <img src="@/assets/logoProAASI.png" alt="ProAASI Logo" class="logo" />
          <h1 class="header-title">ProAASI</h1>
        </div>
      </div>
      <div class="terms-container">
        <h2 class="title">Termos</h2>
        <p class="terms-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut ante vel metus efficitur lacinia sit amet et nulla. Aenean ullamcorper quam turpis. In eu odio metus. Maecenas pharetra purus sit amet tellus faucibus, in auctor odio tincidunt. Quisque nec pellentesque ipsum, ut sagittis orci. Maecenas neque dolor, ultrices nec elementum ut, euismod tristique felis. In non pharetra nibh. Curabitur finibus nibh in ligula vulputate, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut ante vel metus efficitur lacinia sit amet et nulla. Aenean ullamcorper quam turpis. In eu odio metus.
        </p>
        <div class="buttons-container">
          <button class="terms-button">Aceito</button>
          <button class="terms-button">Não aceito</button>
        </div>
      </div>
      <PageFooter />
    </div>
  </template>
  
  <script>
  import PageFooter from '@/components/PageFooter';
  
  export default {
    name: 'TermsPage',
    components: {
      PageFooter
    }
  }
  </script>
  
  <style scoped>
  .terms-page {
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
  
  .terms-container {
    background-color: transparent;
    padding: 40px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .title {
    color: var(--color-txt-title);
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .terms-text {
    text-align: left;
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .buttons-container {
    display: flex;
    gap: 40px;
  }
  
  .terms-button {
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
    width: 10rem;
  }
  
  .terms-button:hover {
    background-color: var(--color-background);
    color: #333;
  }
  </style>
  