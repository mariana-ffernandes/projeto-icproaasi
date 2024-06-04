<template>
  <div id="app">
    <PageHeader />
    <router-view />
  </div>
</template>

<script>
import './styles/global.css';
import PageHeader from './components/PageHeader';

export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>