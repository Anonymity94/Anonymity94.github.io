<template>
  <div class="post-wrap">
    <div v-if="currentNav">
      <h1>{{ currentNav.text }}<span class="post-number">[共计{{ articles.length }}篇文章]</span>
      </h1>
      <ArticleList :articles="articles" />
    </div>
    <div v-else>
      <p>error category</p>
    </div>
  </div>
</template>

<script>
import ArticleList from './ArticleList'
export default {
  components: {
    ArticleList: ArticleList
  },
  props: ['tabKey'],
  data() {
    return {
      currentNav: undefined,
      articles: [],
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    },
  mounted() {
    // 当前的分类
    const tabKey = this.tabKey;
    // 所有的分类
    const navs = this.$themeLocaleConfig.nav
    const currentNav = navs.find(item => item.link === tabKey)
    this.currentNav = currentNav
    if (currentNav) {
      // 查找此分类下的文章
      const { articles } = this.$site.themeConfig
      this.articles = articles;
    }
  }
}
</script>
<style lang="less" scoped>
.post-number {
  font-size: 1.35rem;
  margin-left: 10px;
}
</style>