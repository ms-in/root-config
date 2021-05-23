import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

// import microfrontendLayout from "./microfrontend-layout.html";
// const routes = constructRoutes(microfrontendLayout);
const routes = constructRoutes(document.querySelector('#single-spa-layout') as HTMLTemplateElement);

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications, active: false });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
