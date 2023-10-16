import type { GatsbyConfig, PluginRef } from 'gatsby';
import 'dotenv/config';

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

const config: GatsbyConfig = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog/gatsby-config.mjs
    siteTitle: `PHP Argentina 🐘`,
    siteTitleAlt: `PHP Argentina 🐘 - Inicio`,
    siteHeadline: `PHP Argentina 🐘`,
    siteUrl: `https://php.ar`,
    siteDescription: `¿Te apasiona la programación en PHP y quieres aprender más sobre este lenguaje? En este blog encontrarás tutoriales, consejos, trucos y recursos para mejorar tus habilidades y crear aplicaciones web dinámicas y seguras. Descubre las últimas novedades, las mejores prácticas y los ejemplos más prácticos de PHP. ¡Suscríbete y no te pierdas ningún artículo!`,
    siteImage: `/banner.jpg`,
    siteLanguage: `es`,
    author: `@backendrulz`,
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `phpar`,
        language: 'es_ES',
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-HBRZNMGVF8', // Google Analytics / GA
        ],
        pluginConfig: {
          // Avoids sending pageview hits from custom paths
          exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Acerca de`,
            slug: `/acerca-de`,
          },
        ],
        externalLinks: [
          //   {
          //     name: `Twitter`,
          //     url: `https://twitter.com/lekoarts_de`,
          //   },
          //   {
          //     name: `Homepage`,
          //     url: `https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Starter`,
          //   },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PHP Argentina`,
        short_name: `php-argentina`,
        description: `¿Te apasiona la programación en PHP y quieres aprender más sobre este lenguaje? En este blog encontrarás tutoriales, consejos, trucos y recursos para mejorar tus habilidades y crear aplicaciones web dinámicas y seguras. Descubre las últimas novedades, las mejores prácticas y los ejemplos más prácticos de PHP. ¡Suscríbete y no te pierdas ningún artículo!`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({
              query: { site, allPost },
            }: {
              query: {
                allPost: IAllPost;
                site: { siteMetadata: ISiteMetadata };
              };
            }) =>
              allPost.nodes.map((post) => {
                const url = site.siteMetadata.siteUrl + post.slug;
                const content = `<p>${post.excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${url}">Seguir leyendo</a>.</strong></div><br /> <br />`;

                return {
                  title: post.title,
                  date: post.date,
                  excerpt: post.excerpt,
                  url,
                  guid: url,
                  custom_elements: [{ 'content:encoded': content }],
                };
              }),
            query: `{
  allPost(sort: {date: DESC}) {
    nodes {
      title
      date(formatString: "MMMM D, YYYY")
      excerpt
      slug
    }
  }
}`,
            output: `rss.xml`,
            title: `PHP Argentina`,
          },
        ],
      },
    },
    // shouldAnalyseBundle && {
    //   resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
    //   options: {
    //     analyzerMode: `static`,
    //     reportFilename: `_bundle.html`,
    //     openAnalyzer: false,
    //   },
    // },
  ].filter(Boolean) as Array<PluginRef>,
};

export default config;

interface IPostTag {
  name: string;
  slug: string;
}

interface IPost {
  slug: string;
  title: string;
  defer: boolean;
  date: string;
  excerpt: string;
  contentFilePath: string;
  html: string;
  timeToRead: number;
  wordCount: number;
  tags: Array<IPostTag>;
  banner: any;
  description: string;
  canonicalUrl: string;
}

interface IAllPost {
  nodes: Array<IPost>;
}

interface ISiteMetadata {
  siteTitle: string;
  siteTitleAlt: string;
  siteHeadline: string;
  siteUrl: string;
  siteDescription: string;
  siteImage: string;
  author: string;
}
