import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import Cleave from 'vue-cleave-component';
import store from './store';

const app = createApp(App);

app.use(store);
// app.use(Cleave);
app.use(router);
app.mount('#app');