import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

/*createApp(App).mount('#app')*/
const app = createApp(App);
app.component("ButtonVue", Button);
app.component("InputText", InputText);

app.use(PrimeVue);
app.mount('#app');
