const path = require('path')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});


module.exports = {
  siteMetadata: {
    title: `wall_Flower_Full`,
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-breakpoints", "gatsby-plugin-layout", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-recaptcha", `gatsby-plugin-catch-links`, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
   resolve: `gatsby-transformer-remark`,
   options: {
     // Footnotes mode (default: true)
     footnotes: true,
     // GitHub Flavored Markdown mode (default: true)
     gfm: true,
     // Plugins configs
     plugins: [],
   },
 },

   {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src/'),
      }
    },
    {
     resolve: `gatsby-source-datocms`,
     options: {
       apiToken: process.env.DATO_ENDPOINT,
       previewMode: false,
       disableLiveReload: false,
     },},

  {
        resolve: "gatsby-plugin-web-font-loader",
        options: {
          typekit: {
            id: process.env.TYPEKIT_ID,
          },
      },
  },]
};
