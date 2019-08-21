const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  base: '/',
  title: 'Anonymity94',
  port: 8080,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('../static')
      }
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      description: '232323'
    }
  },
  serviceWorker: {},
  themeConfig: {
    repo: 'Anonymity94',
    sidebar: 'auto',
    lastUpdated: '',
    editLinks: false,
    editLinkText: '在 GitHub 上编辑此页',
    serviceWorker: {
      updatePopup: {
        message: 'New content is available.',
        buttonText: 'Refresh'
      }
    },
    locales: {
      '/': {
        label: '简体中文',
        nav: [
          { text: '文章', link: '/articles/' },
          { text: '收藏夹', link: '/collections/' },
          { text: '归档', link: '/archive/' },
          { text: '关于', link: '/about/' }
        ]
      }
    }
  },
  plugins: [['@vuepress/back-to-top', true], ['@vuepress/medium-zoom', true]],
  markdown: {
    lineNumbers: true
  }
}
