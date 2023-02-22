import Dashboard from "views/Dashboard.js";
import Accueil from "views/pages/Accueil.js";
import CV from "views/pages/CV.js";
import Realisation from "views/pages/Realisation.js";
import Login from "views/Login";


const routes = [

  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    collapse: true,
    name: "Pages",
    rtlName: "صفحات",
    icon: "tim-icons icon-image-02",
    state: "pagesCollapse",
    views: [
      {
        path: "/accueil",
        name: "Accueil",
        rtlName: "تيالجدول الزمني",
        mini: "A",
        rtlMini: "تي",
        component: Accueil,
        layout: "/admin",
      },
      {
        path: "/realisation",
        name: "Realisation",
        rtlName: "تيالجدول الزمني",
        mini: "R",
        rtlMini: "تي",
        component: Realisation,
        layout: "/admin",
      },
      {
        path: "/cv",
        name: "CV",
        rtlName: "تيالجدول الزمني",
        mini: "CV",
        rtlMini: "تي",
        component: CV,
        layout: "/admin",
      },
      
    ],
  },
  {
    path: "/login",
    component: Login,
    layout: "/auth",
  },
  
];

export default routes;
