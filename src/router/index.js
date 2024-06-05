import { createRouter, createWebHistory } from 'vue-router';
import MenuPage from '@/pages/MenuPage';
import SelectDevicePage from '@/pages/SelectDevicePage';
import IntroductionPage from '@/pages/IntroductionPage';
import CommunicationStrategiesPage from '@/pages/CommunicationStrategiesPage';
import DeviceHandlingPage from '@/pages/DeviceHandlingPage';
import ContentPage from '@/pages/ContentPage';

const routes = [
  { path: '/', component: MenuPage },
  { path: '/select-device', component: SelectDevicePage },
  { path: '/introduction', component: IntroductionPage },
  { path: '/communication-strategies', component: CommunicationStrategiesPage },
  { path: '/device-handling', component: DeviceHandlingPage },
  {
    path: '/content/:id',
    component: ContentPage,
    props: (route) => ({
      title: route.query.title,
      videoUrl: route.query.videoUrl,
      text: route.query.text ? route.query.text.split('|') : []
    })
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
