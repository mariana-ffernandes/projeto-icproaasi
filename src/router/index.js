import { createRouter, createWebHistory } from 'vue-router';
//import MenuPage from '@/pages/MenuPage';
import SelectDevicePage from '@/pages/SelectDevicePage';
import IntroductionPage from '@/pages/IntroductionPage';
import CommunicationStrategiesPage from '@/pages/CommunicationStrategiesPage';
import DeviceHandlingPage from '@/pages/DeviceHandlingPage';
import ContentPage from '@/pages/ContentPage';
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage';
import ResetPasswordPage from '@/pages/ResetPasswordPage';
import RegisterPage from '@/pages/RegisterPage';
import TermsPage from '@/pages/TermsPage';
import RegistrationSuccessPage from '@/pages/RegistrationSuccessPage';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/select-device', name: 'SelectDevice', component: SelectDevicePage },
  { path: '/introduction', name: 'Introduction', component: IntroductionPage },
  { path: '/communication-strategies', name: 'CommunicationStrategies', component: CommunicationStrategiesPage },
  { path: '/device-handling', name: 'DeviceHandling', component: DeviceHandlingPage },
  {
    path: '/content/:id',
    name: 'Content',
    component: ContentPage,
    props: (route) => ({
      title: route.query.title,
      videoUrl: route.query.videoUrl,
      text: route.query.text ? route.query.text.split('|') : []
    })
  },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/reset-password', name: 'ResetPassword', component: ResetPasswordPage },
  { path: '/register', name: 'Register', component: RegisterPage },
  { path: '/terms', name: 'Terms', component: TermsPage },
  { path: '/registration-success', name: 'RegistrationSuccess', component: RegistrationSuccessPage }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
