<template>
  <header>
      <nav class="container">
          <img alt="icon" id="logo" src="@\assets\logoProAASI.png">
          <h1 class="title">ProAASI</h1>
      </nav>
  </header>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style scoped>
header {
  background-color: var(--color-background-nav);
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center; 
  align-items: center; 
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  color: var(--color-white);
  font-family: 'Montserrat', sans-serif;
  font-size: 50px;
  font-weight: 500;
  margin: 0;
}
</style>