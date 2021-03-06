const path = require('path');

module.exports = {
  pathPrefix: `/gatsby-mermaid-test/`,
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve(__dirname, 'markdown'),
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        pedantic: false,
        plugins: [
          'gatsby-remark-graph',
        ],
      },
    }
  ],
}
