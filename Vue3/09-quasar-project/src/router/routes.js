const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "typography",
        name: "typography",
        component: () => import("pages/Typography.vue"),
      },
      {
        path: "flex",
        name: "flex",
        component: () => import("src/pages/FlexVue.vue"),
      },
      {
        path: "dialogs",
        name: "dialogs",
        component: () => import("src/pages/DiaLogs.vue"),
      },
      {
        path: "forms",
        name: "forms",
        component: () => import("src/pages/Forms.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
