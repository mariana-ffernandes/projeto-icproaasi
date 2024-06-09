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
    background-color: #fff;
    color: #000;
    padding: 10px 10px;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 0px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .back-button:hover {
    background-color: #f0f0f0;
    color: #333;
  }
  </style>
  