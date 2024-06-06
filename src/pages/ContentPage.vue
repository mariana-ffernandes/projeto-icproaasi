<template>
  <div>
    <div class="content">
      <div class="header-container">
        <button @click="goBack" class="back-button">← voltar</button>
        <h1 class="main-title">{{ pageTitle }}</h1>
      </div>
      <div class="main-content">
        <div class="video-container">
          <iframe :src="videoUrl" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="text-section">
          <h2 class="secondary-title">{{ title }}</h2>
          <div class="text-container">
            <p v-for="(paragraph, index) in text" :key="index">{{ paragraph }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentPage',
  props: {
    title: String,
    videoUrl: String,
    text: Array
  },
  computed: {
    pageTitle() {
      return this.$route.query.pageTitle || 'Conteúdo';
    }
  },
  methods: {
    goBack() {
      const from = this.$route.query.from || '/';
      this.$router.push(from);
    }
  }
}
</script>
  
  <style scoped>
  .content {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  
  .header-container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
  }
  
  .back-button {
    color: #6b5b95;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    margin-right: 25px;
    padding: 8px 20px;
    background-color: #FFFFFF;
    color: #000000;
    border: none;
    cursor: pointer;
    box-shadow: 5px 5px 1px -1px var(--color-text-top);
    text-align: center;
  }
  
  .main-title {
    color: var(--color-text-top);
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 2rem;
    margin-right: auto;
  }
  
  .main-content {
    display: flex;
    align-items: flex-start;
  }
  
  .video-container {
    width: 60%;
    margin-right: 20px;
  }
  
  iframe {
    width: 100%;
    height: 500px;
  }
  
  .text-section {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .secondary-title {
    color: var( --color-text-container);
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 10px;
  }
  
  .text-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    width: 100%;
  }
  </style>
  