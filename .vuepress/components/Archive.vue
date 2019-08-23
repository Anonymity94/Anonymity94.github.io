<template>
  <div class="archive">
    <!-- tags -->
    <div class="tags">
      <div v-if="tags">
        <span itemprop="tag">
          <router-link to="/archive/">
            <span
              class="tag"
              v-bind:class="{ selected: !currentTag }"
            >
              Show All
              <sup>{{ allArticles.length }}</sup>
            </span>
          </router-link>
        </span>
        <span
          itemprop="tag"
          v-for="tag in tags"
        >
          <router-link :to="'/archive/?tag=' + tag">
            <span
              class="tag"
              v-bind:class="{ selected: currentTag === tag }"
            >
              {{ tag }}
              <sup>{{ groupByTag[tag].length }}</sup>
            </span>
          </router-link>
        </span>
      </div>
    </div>

    <!-- articles -->
    <div class="container">
      <ArticleList
        :articles="articles"
        :showYear="true"
      />
    </div>
  </div>
</template>

<script>
import ArticleList from './ArticleList'

export default {
  components: {
    ArticleList: ArticleList
  },
  props: {},
  data() {
    return {
      currentTag: '',
      tags: [],
      allArticles: [],
      articles: [],
      groupByTag: [],
    }
  },
  watch: {
    '$route': 'changeRoute'
  },
  computed: {},
  methods: {
    changeRoute() {
      const currentTag = this.$route.query.tag || '';
      this.currentTag = currentTag;

      const { articles: allArticles, tags, groupByTag } = this.$site.themeConfig;
      this.allArticles = allArticles
      this.groupByTag = groupByTag

      // 没有标签，就显示全部的
      if (!currentTag) {
        this.articles = allArticles
        return;
      }

      // 找不到相关的标签
      if (tags.indexOf(currentTag) === -1) {
        this.articles = []
        return;
      }

      // 查找该标签下的文章
      this.articles = groupByTag[currentTag]

    }
  },
  created() { },
  mounted() {
    this.tags = this.$site.themeConfig.tags;
    this.changeRoute()
  }
}
</script>
<style lang="less" scoped>
.archive {
  .tags {
    margin-bottom: 30px;
    .tag {
      margin-bottom: 10px;
    }
  }
}
</style>