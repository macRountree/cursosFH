// // En este archivo definimos las rutas de cada pagina que usaremos en nuestre proyecto

// //route es un arreglo de objetos, el cual designaremos nuestro HOME/about como componente y la ruta como string

// //Aqui importamos los paquetes yarn de Vue-Router
// import { createRouter, createWebHashHistory } from "vue-router";
// import isAuthenticatedGuard from "./auth-guard";

// //Aqui importamos las paginas que utilizaremos
// // import AboutPage from "../modules/pokemon/pages/AboutPage";
// // import ListPage from "../modules/pokemon/pages/ListPage";
// // import PokemonPage from "../modules/pokemon/pages/PokemonPage";
// // import NoPageFound from "../modules/shared/pages/NoPageFound";

// const routes = [
//   //Se recomienda realizar lazyLoads en cada path en lugar de hacer las importaciones de cada pagina
//   //el component recibe una funcion que importará la ruta de cada pagina

//   {
//     path: "/",

//     redirect: "/pokemon",
//   },
//   {
//     path: "/pokemon",
//     name: "pokemon",
//     component: () =>
//       import(
//         /* webpackChunkName:"PokemonLayout" */ "../modules/pokemon/layouts/PokemonLayout"
//       ),

//     children: [
//       {
//         path: "home",
//         name: "pokemon-home",
//         component: () =>
//           import(
//             /* webpackChunkName:"ListPage" */ "../modules/pokemon/pages/ListPage"
//           ),
//       },
//       {
//         path: "about",
//         name: "pokemon-about",
//         component: () =>
//           import(
//             /* webpackChunkName:"AboutPage" */ "../modules/pokemon/pages/AboutPage"
//           ),
//       },
//       {
//         path: "pokemon-id/:id",
//         name: "pokemon-id",
//         component: () =>
//           import(
//             /* webpackChunkName:"PokemonPage" */ "../modules/pokemon/pages/PokemonPage"
//           ),
//         props: (route) => {
//           const id = Number(route.params.id);
//           return isNaN(id) ? { id: 1 } : { id };
//         },
//       },
//       {
//         path: "",
//         redirect: { name: "pokemon-about" },
//       },
//     ],
//   },
//   /*DBz */

//   {
//     path: "/dbz",
//     name: "dbz",
//     beforeEnter: [isAuthenticatedGuard],
//     component: () =>
//       import(
//         /* webpackChunkName:"DragonBallLayout" */ "@/modules/dbz/layouts/DragonBallLayout"
//       ),
//     children: [
//       {
//         path: "characters",
//         name: "dbz-characters",
//         component: () =>
//           import(
//             /* webpackChunkName:"Characters" */ "@/modules/dbz/pages/Characters"
//           ),
//       },
//       {
//         path: "about",
//         name: "dbz-about",
//         component: () =>
//           import(/* webpackChunkName:"About" */ "@/modules/dbz/pages/About"),
//       },
//       {
//         path: "",
//         redirect: { name: "dbz-characters" },
//       },
//     ],
//   },
//   //Este path es para redireccione a una pagina que no existe y arroje el error
//   //Nos dice que si no coincide con los paths de arriba .. muestre el 404 not found
//   {
//     path: "/:pathMatch(.*)*",
//     // component: () =>
//     //   import(
//     //     /* webpackChunkName:"NoPageFound" */ "../modules/shared/pages/NoPageFound"
//     //   ),
//     redirect: "/home",
//   },
// ];

// const router = createRouter({
//   // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//   history: createWebHashHistory(),
//   routes, // short for `routes: routes`
// });

// //guard global

// // router.beforeEach((to, from, next) => {
// //   const random = Math.random() * 100;

// //   if (random > 50) {
// //     console.log("Auth");
// //     next();
// //   } else {
// //     console.log(random, "Block");
// //     next({ name: "pokemon-home" });
// //   }
// // });

// // const canAccess = (to, from, next) => {
// //   return new Promise((resolve) => {
// //     const random = Math.random() * 100;
// //     if (random > 50) {
// //       console.log("Auth -can Accsess");
// //       resolve(true);
// //     } else {
// //       console.log(random, "Block");
// //       resolve(false);
// //     }
// //   });
// // };

// // router.beforeEach(async (to, from, next) => {
// //   const auth = await canAccess();
// //   auth ? next() : next({ name: "pokemon-home" });
// // });

// export default router;

import { createRouter, createWebHashHistory } from "vue-router";
import isAuthenticatedGuard from "./auth-guard";

const routes = [
  {
    path: "/",
    redirect: "/pokemon",
  },

  {
    path: "/pokemon",
    name: "pokemon",
    component: () =>
      import(
        /* webpackChunkName: "PokemonLayout" */ "@/modules/pokemon/layouts/PokemonLayout"
      ),
    children: [
      {
        path: "home",
        name: "pokemon-home",
        component: () =>
          import(
            /* webpackChunkName: "ListPage" */ "@/modules/pokemon/pages/ListPage"
          ),
      },
      {
        path: "about",
        name: "pokemon-about",
        component: () =>
          import(
            /* webpackChunkName: "AboutPage" */ "@/modules/pokemon/pages/AboutPage"
          ),
      },
      {
        path: "pokemonid/:id",
        name: "pokemon-id",
        component: () =>
          import(
            /* webpackChunkName: "PokemonPage" */ "@/modules/pokemon/pages/PokemonPage"
          ),
        props: (route) => {
          const id = Number(route.params.id);
          return isNaN(id) ? { id: 1 } : { id };
        },
      },
      {
        path: "",
        redirect: { name: "pokemon-about" },
      },
    ],
  },

  // DBZ Layout
  {
    path: "/dbz",
    name: "dbz",
    beforeEnter: [isAuthenticatedGuard],
    component: () =>
      import(
        /* webpackChunkName: "DragonBallLayout" */ "@/modules/dbz/layouts/DragonBallLayout"
      ),
    children: [
      {
        path: "characters",
        name: "dbz-characters",
        component: () =>
          import(
            /* webpackChunkName: "ListPage" */ "@/modules/dbz/pages/Characters"
          ),
      },
      {
        path: "about",
        name: "dbz-about",
        component: () =>
          import(
            /* webpackChunkName: "ListPage" */ "@/modules/dbz/pages/About"
          ),
      },
      {
        path: "",
        redirect: { name: "dbz-characters" },
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    component: () =>
      import(
        /* webpackChunkName: "NoPageFound" */ "@/modules/shared/pages/NoPageFound"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// Guard Global - Síncrono
// router.beforeEach( ( to, from, next ) => {
//     // console.log({ to, from, next });

// const random = Math.random() * 100
// if( random > 50 ) {
//     console.log('autenticado')
//     next()
// } else {
//     console.log(random, 'bloqueado por el beforeEach Guard')
//     next({ name: 'pokemon-home' })
// }
//     // next()
// })

// const canAccess = () => {
//     return new Promise( resolve => {

//         const random = Math.random() * 100
//         if( random > 50 ) {
//             console.log('Autenticado - canAccess')
//             resolve(true)
//         } else {
//             console.log(random, 'bloqueado por el beforeEach Guard - canAccess')
//             resolve(false)
//         }

//     })
// }

// router.beforeEach( async(to, from, next) => {

//     const authorized = await canAccess()

//     authorized
//         ? next()
//         : next({ name: 'pokemon-home' })

// })

export default router;
