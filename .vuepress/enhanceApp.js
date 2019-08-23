export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // ...做一些其他的应用级别的优化
  Date.prototype.format = function(fmt) {
    var o = {
      'M+': this.getMonth() + 1, //月份
      'D+': this.getDate(), //日
      'H+': this.getHours(), //小时
      'm+': this.getMinutes(), //分
      's+': this.getSeconds(), //秒
      'q+': Math.floor((this.getMonth() + 3) / 3), //季度
      S: this.getMilliseconds() //毫秒
    }
    if (/(Y+)/.test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        (this.getFullYear() + '').substr(4 - RegExp.$1.length)
      )
    for (var k in o)
      if (new RegExp('(' + k + ')').test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ('00' + o[k]).substr(('' + o[k]).length)
        )
    return fmt
  }

  const articlePathKeyword = '/articles/'
  // 过滤出所有的文章
  const articles = siteData.pages
    .map(article => ({
      ...article,
      tags: article.frontmatter.tags || [],
      createTime: article.frontmatter.createTime || '',
      createYear: article.frontmatter.createTime
        ? new Date(article.frontmatter.createTime).format('YYYY')
        : '未知年份'
    }))
    .filter(
      page =>
        page.path.indexOf(articlePathKeyword) > -1 &&
        page.path !== articlePathKeyword
    )

  // 按时间排序
  siteData.themeConfig.articles = articles.sort(
    (a, b) => new Date(b.createTime) - new Date(a.createTime)
  )

  // 过滤出所有的标签
  let tags = []
  for (let i = 0; i < articles.length; i++) {
    const _tags = articles[i].frontmatter.tags
    if (Array.isArray(_tags) && _tags.length > 0) {
      tags.push(..._tags)
    }
  }
  // 去重
  tags = [...new Set(tags)]
  const NO_TAG_TEXT = '其它'
  tags.push(NO_TAG_TEXT)
  siteData.themeConfig.tags = tags

  // 按 tag 分组
  const groupByTag = {}
  for (let i = 0; i < tags.length; i++) {
    const currentTag = tags[i]
    const collection = articles.filter(article => {
      const articleTags = article.tags
      if (currentTag === NO_TAG_TEXT) {
        return !articleTags || articleTags.length === 0
      }
      return articleTags && articleTags.indexOf(currentTag) > -1
    })
    groupByTag[currentTag] = collection
  }
  siteData.themeConfig.groupByTag = groupByTag
}
