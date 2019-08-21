<template>
  <div class="post-meta">
    <span class="post-time">
      <span class="post-meta-item-text">
        发布于:
      </span>
      <time
        itemprop="dateCreated"
        :datetime="$frontmatter.createTime"
      >
        {{ new Date($frontmatter.createTime).format('YYYY-MM-DD') }}
      </time>
    </span>
    <span
      class="post-meta-item-icon"
      v-if="$page.frontmatter.tags"
    >
      &nbsp; | &nbsp;
    </span>
    <span
      v-if="$page.frontmatter.tags"
      class="post-category"
    >
      <span itemprop="tag">
        <router-link
          :to="'/archive/?tag=' + tag"
          v-for="tag in $page.frontmatter.tags"
        >
          <span class="tag">
            {{tag}}
          </span>
        </router-link>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created() { },
  mounted() {
    console.log('$page', this.$page)
  }
}
</script>
<style lang="less" scoped>
.post-meta {
  margin-bottom: 20px;
  color: #909399;
}
</style>