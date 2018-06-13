import MainView from "../components/pages/MainView.vue";
import Login from "../components/components/Login.vue";
import TheGrid from "../components/components/TheGrid.vue";

export const routes = [
  {
    path: "/",
    component: MainView,
    children: [
      // { path: "", component: Login },
      { path: "", component: TheGrid }
    ]
  }
];
