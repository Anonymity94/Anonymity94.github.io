<template>
  <div class="post-wrap">
    <div v-if="currentNav">
      <h1>{{ currentNav.text }}<span class="post-number">[共计{{ articles.length }}篇文章]</span>
      </h1>
      <ul class="posts">
        <li
          v-for="item in articles"
          class="post-item"
          :data-tags="item.frontmatter.tags"
        >
          <h1
            class="post-item-title"
            itemprop="name headline"
          >
            <router-link
              :to="item.regularPath"
              class="post-item-title-link"
            >{{ item.title }}</router-link>
          </h1>
          <span
            v-if="item.frontmatter.createTime"
            :datetime="item.frontmatter.createTime"
          >{{ new Date(item.frontmatter.createTime).format('YYYY-MM-DD') }}</span>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>error category</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
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
      console.log(this.$site.pages)
      const articles = this.$site.pages.filter(item => item.path.indexOf(currentNav.link) > -1 && item.path !== currentNav.link)
      this.articles = articles.sort((a, b) => new Date(b.frontmatter.createTime) - new Date(a.frontmatter.createTime));
    }
  }
}
</script>
<style lang="less" scoped>
.post-number {
  font-size: 1.35rem;
  margin-left: 10px;
}

.posts {
  list-style: none;
  padding: 0;

  & > li + li {
    border-top: 1px solid #eee;
  }

  .post-item {
    list-style: none;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > span {
      font-size: 14px;
      color: #909399;
    }
  }
}

.post-item-title {
  position: relative;
  font-size: 20px;
  font-weight: 400;

  .post-item-title-link {
    display: inline-block;
    position: relative;
    color: #555;
    border-bottom: none;
    line-height: 1.2;
    vertical-align: top;
    text-decoration: none !important;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -8px;
      left: 0;
      background-color: #555;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      -moz-transform: scaleX(0);
      -ms-transform: scaleX(0);
      -o-transform: scaleX(0);
      transform: scaleX(0);
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
      transition-delay: 0s;
    }
    &:hover::before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      -moz-transform: scaleX(1);
      -ms-transform: scaleX(1);
      -o-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
}
</style>