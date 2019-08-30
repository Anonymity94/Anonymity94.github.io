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
    <div
      v-if="$page.frontmatter.tags"
      class="post-category"
    >
      <span itemprop="tag">
        <router-link
          :to="'/archive/?tag=' + tag"
          v-for="tag in $page.frontmatter.tags"
        >
          <span class="tag sm">
            {{tag}}
          </span>
        </router-link>
      </span>
    </div>
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
  }
}
</script>
<style lang="less" scoped>
.post-meta {
  margin-bottom: 10px;
  color: #909399;
}
.post-time {
  display: inline-block;
  line-height: 24px;
}
.post-category {
  display: inline-block;
  margin-left: 10px;
  vertical-align: top;
}
@media (max-width: 719px) {
  .post-time {
    margin-bottom: 10px;
  }
  .post-category {
    display: block;
    margin-left: 0;
  }
}
</style>