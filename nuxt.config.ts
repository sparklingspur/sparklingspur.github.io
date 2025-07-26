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
  ],

  // This tells Nuxt to build self-contained pages for static hosting.
  experimental: {
    payloadExtraction: false
  },

  // This tells Nuxt to render the interactive homepage on the client-side only.
  routeRules: {
    '/': { ssr: false },
  },

  app: {
    baseURL: '/',
    buildAssetsDir: 'assets', // This can also help with caching. Best practice
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Hotel CAPS - Rooms, Multi-Cuisine Restaurant, Auditorium Hall - Koduvayur, Palakkad, Kerala',
      meta: [
        // SEO and Page Information
        { name: 'description', content: 'Hotel CAPS offers luxury rooms, a multi-cuisine restaurant, and a spacious auditorium hall in the heart of Palakkad, Kerala. Experience premium hospitality and comfort.' },
        { name: 'keywords', content: 'Hotel CAPS, hotel in palakkad, best hotel kerala, best hotels palakkad, best hotels koduvayur, luxury rooms palakkad, multi-cuisine restaurant palakkad, auditorium hall palakkad, accommodation kerala, palakkad hotels' },
        { name: 'author', content: 'kriz - https://www.brandsta.in' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://capsfamily.in/' },
        { property: 'og:title', content: 'Hotel CAPS - Rooms, Multi-Cuisine Restaurant, Auditorium Hall - Koduvayur, Palakkad, Kerala' },
        { property: 'og:description', content: 'Experience premium hospitality at Hotel CAPS, Palakkad. We offer luxury rooms, fine dining, and event spaces.' },
        { property: 'og:image', content: 'https://sparklingspur.github.io/images/favicons/caps-og-image.jpg' },

        // Twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://capsfamily.in/' },
        { property: 'twitter:title', content: 'Hotel CAPS - Rooms, Multi-Cuisine Restaurant, Auditorium Hall - Koduvayur, Palakkad, Kerala' },
        { property: 'twitter:description', content: 'Experience premium hospitality at Hotel CAPS, Palakkad. We offer luxury rooms, fine dining, and event spaces.' },
        { property: 'twitter:image', content: 'https://sparklingspur.github.io/images/favicons/caps-og-image.jpg' },

        // PWA & Mobile Meta Tags
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'msapplication-TileImage', content: '/images/favicons/ms-icon-144x144.png' },
        { name: 'theme-color', content: '#ffffff' },
        // --- NEW: Link to browserconfig.xml ---
        { name: 'msapplication-config', content: '/images/favicons/browserconfig.xml' }
      ],
      link: [
        // PWA & Favicon Links
        { rel: 'apple-touch-icon', sizes: '57x57', href: '/images/favicons/apple-icon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/images/favicons/apple-icon-60x60.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/images/favicons/apple-icon-72x72.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/images/favicons/apple-icon-76x76.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/images/favicons/apple-icon-114x114.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/images/favicons/apple-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/images/favicons/apple-icon-144x144.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/images/favicons/apple-icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicons/apple-icon-180x180.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/images/favicons/android-icon-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/images/favicons/favicon-96x96.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicons/favicon-16x16.png' },
        { rel: 'manifest', href: '/images/favicons/manifest.json' },
      ],
      script: [
        {
          
        }
      ]
    }
  }
})

