import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import store from './store/index.js';
import router from './router.js';

const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");


// Function to adjust main content margin
function adjustMainMargin() {
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  if (header && main) {
    const headerHeight = header.offsetHeight;
    main.style.marginTop = `${headerHeight}px`;
  }
}

// Adjust margin on initial load
document.addEventListener("DOMContentLoaded", adjustMainMargin);

// Adjust margin on window resize
window.addEventListener("resize", adjustMainMargin);

