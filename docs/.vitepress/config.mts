import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Docs CodiceFiscale.dev",
  description: "Documentazione API CodiceFiscale.dev",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentazione", link: "/intro" },
    ],

    sidebar: [
      {
        text: 'Introduzione',
        link: '/intro',
      },
      {
        text: "API",
        items: [
          {
            text: "Verifica Codice Fiscale",
            link: "/api/v1/verifica/codice-fiscale",
          },
          {
            text: "Verifica Persona Fiscale",
            link: "/api/v1/verifica/persona",
          },
          {
            text: "Verifica Partita IVA",
            link: "/api/v1/verifica/partita-iva",
          },
        ],
      },
    ],
  },
});
