const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  base: '/',
  title: 'Anonymity94',
  port: 8080,
  dest: 'build',
  head: [
    ['link', { rel: 'icon', href: '/avatar.png' }],
    ['meta', { author: 'anonymity94' }]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@static': resolve('../static')
      }
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      description: 'Just do IT.'
    }
  },
  serviceWorker: {},
  themeConfig: {
    repo: 'Anonymity94',
    sidebar: 'auto',

    docsRepo: 'Anonymity94/Anonymity94.github.io',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'v2',
    lastUpdated: '上次更新',
    editLinks: true,
    editLinkText: '发现错误？在 GitHub 上编辑此页',
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
          { text: '试验场', link: '/experimentation/' },
          { text: '关于', link: '/about/' }
        ]
      }
    }
  },
  plugins: [['@vuepress/back-to-top', true], ['@vuepress/medium-zoom', true]],
  markdown: {
    lineNumbers: true // 是否显示行号
  }
}
