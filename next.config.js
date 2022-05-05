const withSourceMaps = require('@zeit/next-source-maps')
const withCSS = require('@zeit/next-css')
const withPWA = require('next-pwa')
const runtimeCaching = require("next-pwa/cache");

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [require('remark-abbr'), require('remark-sectionize')]
  }
})

module.exports = withPWA(
  withCSS(
    withMDX(
      withSourceMaps(
        {
          pageExtensions: ["md", "mdx", "tsx"],
          pwa: {
            dest: 'public',
            runtimeCaching,
            modifyURLPrefix: {
              'static/': '_next/static/',
            }
          }
        },
      )
    )
  )
)
