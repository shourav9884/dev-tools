import { createRouter, createWebHistory } from 'vue-router';
import Base64Encoder from '../components/Base64Encoder.vue';
import MD5Hash from '../components/MD5Hash.vue';
import URLEncoder from '../components/URLEncoder.vue';
import JwtDecoder from '../components/JwtDecoder.vue';
import JsonFormatter from '../components/JsonFormatter.vue';
import SHA256Hash from '../components/SHA256Hash.vue';
import HexToRgbConverter from '../components/HexToRgbConverter.vue';
import TimestampConverter from '../components/TimestampConverter.vue';

const routes = [
  { path: '/', redirect: '/base64' },
  { path: '/base64', component: Base64Encoder },
  { path: '/md5', component: MD5Hash },
  { path: '/url', component: URLEncoder },
  { path: '/jwt-decoder', component: JwtDecoder },
  { path: '/json-formatter', component: JsonFormatter },
  { path: '/sha-256', component: SHA256Hash },
  { path: '/hex-to-rgb', component: HexToRgbConverter },
  { path: '/timestamp', component: TimestampConverter }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

