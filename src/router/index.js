import { createRouter, createWebHistory } from 'vue-router';
import MenuPage from '@/pages/MenuPage';
import SelectDevicePage from '@/pages/SelectDevicePage';
//import IntroductionPage from '@/pages/IntroductionPage';
import CommunicationStrategiesPage from '@/pages/CommunicationStrategiesPage';
import DeviceHandlingPage from '@/pages/DeviceHandlingPage';

const routes = [
  { path: '/', component: MenuPage },
  //{ path: '/select-device', component: SelectDevicePage },
  { path: '/introduction', component: SelectDevicePage },
  { path: '/communication-strategies', component: CommunicationStrategiesPage },
  { path: '/device-handling', component: DeviceHandlingPage }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
