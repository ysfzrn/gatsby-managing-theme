module.exports = ({
  contentPath = `${__dirname}/contents`,
  title = "itsalljs",
  description = `Be Hero`
}) => ({
  siteMetadata: {
    title: title,
    description: description,
    author: `@ysfzrn`,
    basePath: "/"
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: [`itsalljs-theme`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: contentPath
      }
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: contentPath
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          contents: require.resolve("./src/components/MarkdownLayout.js")
        }
      }
    }
  ]
});
