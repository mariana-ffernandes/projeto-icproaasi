<template>
    <div class="footer">
      <router-link to="/" class="back-button">Voltar para a página inicial</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PageFooter'
  }
  </script>
  
  <style scoped>
  .footer {
    width: 100%;
    height: 8rem;
    background-color: var(--color-menu-container);
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
  }
  
  .back-button {
    width: 20rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-white);
    color: var(--color-black);
    padding: 10px 10px;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    border-radius: 0px;
    box-shadow: 2px 3px 1px 1px var(--color-shadow-button);
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .back-button:hover {
    background-color: var(--color-background);
    color: #333;
  }
  </style>
  