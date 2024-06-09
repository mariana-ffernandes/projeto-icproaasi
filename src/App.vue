<template>
  <div id="app">
    <router-view v-slot="{ Component, route }">
      <PageHeader v-if="route.name !== 'Home' && route.name !== 'Login'" />
      <component :is="Component" />
      <PageFooter v-if="route.name === 'Login'" />
    </router-view>
  </div>
</template>

<script>
import './styles/global.css';
import PageHeader from './components/PageHeader'; 
import PageFooter from './components/PageFooter';

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>
