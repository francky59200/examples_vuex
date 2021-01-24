import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from "@/store";
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

const mocks = {
  auth: { POST: { token: "12345789" } },
};

const apiCall = ({ url, method }) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(mocks[url][method || "POST"]);
          console.log(`Mocked '${url}' - ${method || "POST"}`);
          console.log("response: ", mocks[url][method || "POST"]);
        } catch (err) {
          reject(new Error(err));
        }
      }, 1000);
    });

export default apiCall


new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
