// // // // // // // // //

  <!-- <div> -->
  // //
  <!-- Se utiliza la etiqueta router-link en lugar de <a> </a> para que se aplique la navegacion entre paginas
// //     Vue transformará el <routerLink></routerLink> en <a></a> para que el html lo acepte -->
  // //
  <!-- <router-link :to="{ name: 'home' }">Pokemon List</router-link>
// //     <router-link :to="{ name: 'pokemon-id', params: { id: 85 } }"
// //       >Pokemon Id</router-link
// //     >
// //     <router-link :to="{ name: 'about' }">About</router-link> -->
  // //
  <!-- hacemos un vforpara barrer cada link del data .. el key es el valor de cada link osea link.to -->
  // // <CustomLink v-for="link in links" :key="link.to" :link="link" /> // //
  <!-- </div> -->
  // //
  <!-- // </template> -->
<!-- // // <template>  -->
  <!-- // <script>
// import { defineAsyncComponent } from "vue";

// export default {
//   data() {
//     return {
//       links: [
//         { to: "/pokemon-home", name: "Pokemon" },
//         { to: "/pokemon-id", name: "Por ID", id: 151 },
//         { to: "/pokemon-about", name: "About" },
//         { to: "/dbz-characters", name: "Personajes" },
//         { to: "/dbz-about", name: "DBZ-About" },
//         { to: "https://google.com", name: "Google" },
//       ],
//     };
//   },
//   components: {
//     CustomLink: defineAsyncComponent(() => import("./CustomLink.vue")),
//   },
// };
// </script> -->

  // // Scoped solo se enfoca en este archivo de Vue solo en el Navbar y le
  // asigna un // hash para aislar o scopear nuestros estilos para este archivo en
  // especifico
  // <!-- // <style scoped> -->
  // // div { // padding: 0 3rem; // } // div a { // font-weight: bold; // color:
  // #2c3e50; // margin: 0.5rem 1rem; // } // /* el router-linkexacactive nos
  // mostrara la pagina actual de nuestro a y lo maquillara con el color asignado
  // */ // /* a.router-link-exact-active { // color: #42b983; // } */

  <!-- // .NavBar { -->
  // display: flex;
  <!-- //   justify-content: center; -->
  <!-- //   flex-direction: column; -->
  <!-- // } -->
  <!-- // @media (min-width: 480px) { -->
  <!-- //   .NavBar { -->
  // flex-direction: row;
  <!-- //     justify-content: space-evenly; -->
  <!-- //   } -->
  <!-- // } -->
  <!-- // </style> -->

  <template>
    <div>
      <!-- <router-link :to="{ name: 'home' }">Pokemon List</router-link>
        <router-link :to="{ name: 'pokemon-id', params: { id: 85 }}">Pokemon por id</router-link>
        <router-link :to="{ name: 'about' }">About</router-link> -->
      <CustomLink v-for="link in links" :key="link.to" :link="link" />
    </div>
  </template>

  <script>
    import { defineAsyncComponent } from "vue";

    export default {
      data() {
        return {
          links: [
            { to: "pokemon-home", name: "Pokemons" },
            { to: "pokemon-id", name: "Por ID", id: 151 },
            { to: "pokemon-about", name: "About" },

            { to: "dbz-characters", name: "Personajes" },
            { to: "dbz-about", name: "DBZ-About" },

            { to: "https://google.com", name: "Google" },
          ],
        };
      },

      components: {
        CustomLink: defineAsyncComponent(() => import("./CustomLink.vue")),
      },
    };
  </script>

  <style scoped>
    div {
      padding: 0 30px;
    }

    div a {
      font-weight: bold;
      color: #2c3e50;
      margin: 0 10px;
    }

    /* a.router-link-exact-active {
    color: #42b983;
} */
  </style>
</template>
