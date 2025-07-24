// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-18', 
  devtools: { enabled: true },
  devServer: {
    host: '0.0.0.0', // e.g., '0.0.0.0' for external access
    port: 3000, // or your desired port
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts' // Add the new module here
  ],

  image: {
    provider: 'static', // Use the static provider for GitHub Pages
    static: {
      baseURL: '/', // Ensure paths are correct for the root domain
    }
  },

  googleFonts: {
    families: {
      // Display Font (for titles)
      'Faculty Glyphic': true,
      // Cursive Font (for sub titles)
      'Dancing Script': {
        wght: [400, 500, 600, 700]
      },
      // Body Font (for paragraphs and general UI)
      Inter: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      }, 
      // Number Font (for statistics, etc.)
      Cinzel: {
        wght: [400, 500, 600, 700, 800, 900]
      }
    }
  },

  app: {
    baseURL: '/',
    buildAssetsDir: 'assets', // This can also help with caching. Best practice
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, user-scalable=no',
      title: 'Hotel CAPS - Rooms, Multi-Cuisine Restaurant, Auditorium Hall - Palakkad, Kerala, India',
      meta: [
        // SEO and Page Information
        { name: 'description', content: 'Hotel CAPS offers luxury rooms, a multi-cuisine restaurant, and a spacious auditorium hall in the heart of Palakkad, Kerala. Experience premium hospitality and comfort.' },
        { name: 'keywords', content: 'Hotel CAPS, hotel in palakkad, best hotel kerala, luxury rooms palakkad, multi-cuisine restaurant palakkad, auditorium hall palakkad, accommodation kerala, palakkad hotels' },
        { name: 'author', content: 'Hotel CAPS' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://capsfamily.in/' },
        { property: 'og:title', content: 'Hotel CAPS - Rooms, Multi-Cuisine Restaurant, Auditorium Hall - Palakkad, Kerala, India' },
        { property: 'og:description', content: 'Experience premium hospitality at Hotel CAPS, Palakkad. We offer luxury rooms, fine dining, and event spaces.' },
        { property: 'og:image', content: '/images/caps-solid-logo.png' }, // Using local public image

        // Twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://capsfamily.in/' },
        { property: 'twitter:title', content: 'Hotel CAPS - Rooms, Multi-Cuisine Restaurant, Auditorium Hall - Palakkad, Kerala, India' },
        { property: 'twitter:description', content: 'Experience premium hospitality at Hotel CAPS, Palakkad. We offer luxury rooms, fine dining, and event spaces.' },
        { property: 'twitter:image', content: '/images/caps-solid-logo.png' }, // Using local public image
      ],
      link: [
        // Favicon
        { rel: 'icon', type: 'image/png', href: '/images/caps-solid-logo.png' }
      ],
      script: [
        {
          
        }
      ]
    }
  }
})