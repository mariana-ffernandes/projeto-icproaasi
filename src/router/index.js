import { createRouter, createWebHistory } from 'vue-router';
import MenuPage from '@/pages/MenuPage';
import SelectDevicePage from '@/pages/SelectDevicePage';
import IntroductionPage from '@/pages/IntroductionPage';
import CommunicationStrategiesPage from '@/pages/CommunicationStrategiesPage';
import DeviceHandlingPage from '@/pages/DeviceHandlingPage';
import ContentPage from '@/pages/ContentPage';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import AboutPage from '@/pages/AboutPage';
import IdentificationPage from '@/pages/IdentificationPage'; 

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/identification', name: 'Identification', component: IdentificationPage },
  { path: '/introduction', name: 'Introduction', component: IntroductionPage },
  { path: '/select-device', name: 'SelectDevice', component: SelectDevicePage },
  { path: '/menu', name: 'Menu', component: MenuPage },
  { path: '/communication-strategies', name: 'CommunicationStrategies', component: CommunicationStrategiesPage },
  { path: '/device-handling', name: 'DeviceHandling', component: DeviceHandlingPage },
  { path: '/content/:id', name: 'Content', component: ContentPage, props: (route) => ({
      title: route.query.title,
      videoUrl: route.query.videoUrl,
      text: route.query.text ? route.query.text.split('|') : [],
      from: route.query.from,
      pageTitle: route.query.pageTitle
    })
  },
  { path: '/about', name: 'About', component: AboutPage }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;