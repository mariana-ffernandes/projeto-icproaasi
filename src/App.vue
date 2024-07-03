<template>
  <div id="app">
    <router-view v-slot="{ Component, route }">
      <PageHeader v-if="route.name !== 'Home' && route.name !== 'Login' &&  route.name !== 'ResetPassword' &&  route.name !== 'Register' &&  route.name !== 'About' &&  route.name !== 'RegistrationSuccess'" />
      <component :is="Component" />
      <PageFooter v-if="route.name === 'Login'" />
      <PageFooter v-if="route.name === 'ResetPassword'" />
      <PageFooter v-if="route.name === 'Register'" />
      <PageFooter v-if="route.name === 'About'" />
      <PageFooter v-if="route.name === 'RegistrationSuccess'" />
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
