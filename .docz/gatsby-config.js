const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Next Gen Documentation',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root:
          'D:\\Usuarios\\Alondra\\Documents\\UNAB\\CICLO V -2025 - UNAB\\sPG3-25\\Periodo 2\\SpringBoot\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Next Gen Documentation',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root:
            'D:\\Usuarios\\Alondra\\Documents\\UNAB\\CICLO V -2025 - UNAB\\sPG3-25\\Periodo 2\\SpringBoot',
          templates:
            'D:\\Usuarios\\Alondra\\Documents\\UNAB\\CICLO V -2025 - UNAB\\sPG3-25\\Periodo 2\\SpringBoot\\node_modules\\docz-core\\dist\\templates',
          docz:
            'D:\\Usuarios\\Alondra\\Documents\\UNAB\\CICLO V -2025 - UNAB\\sPG3-25\\Periodo 2\\SpringBoot\\.docz',
          cache:
            'D:\\Usuarios\\Alondra\\Documents\\UNAB\\CICLO V -2025 - UNAB\\sPG3-25\\Periodo 2\\SpringBoot\\.docz\\.cache',
          app:
            'D:\\Usuarios\\Alondra\\Documents\\UNAB\\CICLO V -2025 - UNAB\\sPG3-25\\Periodo 2\\SpringBoot\\.docz\\app',
          appPackageJson:
            'D:\\Usuarios\\Alondra\\Documents\\UNAB\\CICLO V -2025 - UNAB\\sPG3-25\\Periodo 2\\SpringBoot\\package.json',
          appTsConfig:
            'D:\\Usuarios\\Alondra\\Documents\\UNAB\\CICLO V -2025 - UNAB\\sPG3-25\\Periodo 2\\SpringBoot\\tsconfig.json',
          gatsbyConfig:
            'D:\\Usuarios\\Alondra\\Documents\\UNAB\\CICLO V -2025 - UNAB\\sPG3-25\\Periodo 2\\SpringBoot\\gatsby-config.js',
          gatsbyBrowser:
            'D:\\Usuarios\\Alondra\\Documents\\UNAB\\CICLO V -2025 - UNAB\\sPG3-25\\Periodo 2\\SpringBoot\\gatsby-browser.js',
          gatsbyNode:
            'D:\\Usuarios\\Alondra\\Documents\\UNAB\\CICLO V -2025 - UNAB\\sPG3-25\\Periodo 2\\SpringBoot\\gatsby-node.js',
          gatsbySSR:
            'D:\\Usuarios\\Alondra\\Documents\\UNAB\\CICLO V -2025 - UNAB\\sPG3-25\\Periodo 2\\SpringBoot\\gatsby-ssr.js',
          importsJs:
            'D:\\Usuarios\\Alondra\\Documents\\UNAB\\CICLO V -2025 - UNAB\\sPG3-25\\Periodo 2\\SpringBoot\\.docz\\app\\imports.js',
          rootJs:
            'D:\\Usuarios\\Alondra\\Documents\\UNAB\\CICLO V -2025 - UNAB\\sPG3-25\\Periodo 2\\SpringBoot\\.docz\\app\\root.jsx',
          indexJs:
            'D:\\Usuarios\\Alondra\\Documents\\UNAB\\CICLO V -2025 - UNAB\\sPG3-25\\Periodo 2\\SpringBoot\\.docz\\app\\index.jsx',
          indexHtml:
            'D:\\Usuarios\\Alondra\\Documents\\UNAB\\CICLO V -2025 - UNAB\\sPG3-25\\Periodo 2\\SpringBoot\\.docz\\app\\index.html',
          db:
            'D:\\Usuarios\\Alondra\\Documents\\UNAB\\CICLO V -2025 - UNAB\\sPG3-25\\Periodo 2\\SpringBoot\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
