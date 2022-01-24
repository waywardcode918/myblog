import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import axios from 'axios';



import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

//import '@/plugins/vue-md-editer.js';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import hljs from 'highlight.js';
VMdPreview.use(githubTheme, {
  Hljs: hljs,
});
//import Prism from 'prismjs';
Vue.use(VMdPreview);
import '@/plugins/index.js';
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
