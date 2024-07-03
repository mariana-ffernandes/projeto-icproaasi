<template>
  <div class="content-page">
    <header class="header-container">
      <router-link :to="from" class="back-button">← voltar</router-link>
      <h1 class="title">{{ pageTitle }}</h1>
    </header>
    <main class="main-container">
      <div class="video-container">
        <iframe
          :src="videoUrl"
          class="video"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div class="text-container">
        <h2>{{ title }}</h2>
        <p v-for="paragraph in text" :key="paragraph">{{ paragraph }}</p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'ContentPage',
  props: {
    title: String,
    videoUrl: String,
    text: Array,
    from: String,
    pageTitle: String
  }
}
</script>

<style scoped>
.content-page {
  padding: 20px;
}

.header-container {
  display: flex;
  align-items: center;
  position: relative;
}

.back-button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 8px 20px;
  background-color: var(--color-background);
  color: var(--color-black);
  border: none;
  cursor: pointer;
  box-shadow: 5px 5px 1px -1px var(--color-text-top);
  text-align: center;
  margin-right: 20px;
}

.title {
  color: var(--color-text-top);
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 2rem;
  margin: 0;
  white-space: nowrap;
}

.main-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  margin-top: 20px;
  height: 80vh;
}

.video-container {
  flex: 1;
}

.video {
  width: 100%;
  height: calc(90vh - 200px);
}

.text-container {
  flex: 1;
  max-width: 600px;
}

.text-container h2 {
  color: var(--color-black);
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 20px;
}

.text-container p {
  color: var(--color-text-container);
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 10px;
}
</style>
