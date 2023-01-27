/*!

=========================================================
* Black Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Accueil from "views/pages/Accueil.js";
import CV from "views/pages/CV.js";
import Realisation from "views/pages/Realisation.js";

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
  
];

export default routes;
