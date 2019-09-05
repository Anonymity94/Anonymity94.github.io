<template>
  <div class="posts">
    <section
      class="post-preview"
      v-bind:class="{showYear: showYear}"
      v-for="(item, index) in articles"
    >
      <div
        class="seperator"
        v-if="showYear && (index === 0 || (index >=1 && item.createYear !== articles[index - 1].createYear))"
      >
        <span class="text">{{ item.createYear }}</span>
      </div>
      <div
        class="post-item"
        :data-tags="item.tags"
      >
        <h1
          class="post-item-title"
          itemprop="name headline"
        >
          <router-link
            :to="item.regularPath"
            class="post-item-title-link"
          >{{ item.title || '[标题丢失了]' }}</router-link>
        </h1>
        <span
          v-if="item.createTime"
          :datetime="item.createTime"
        >{{ new Date(item.createTime).format('YYYY-MM-DD') }}</span>
      </div>
    </section>
    <section v-if="articles.length === 0">
      <div class="empty">
        <img :src="emptyImg" />
      </div>
    </section>
  </div>
</template>

<script>
import emptyImg from '@static/assets/empty.svg'

export default {
  components: {},
  props: {
    'articles': {
      type: Array,
      required: true,
      default: []
    },
    'showYear': {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      emptyImg
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
  },
  mounted() {
  }
}
</script>
<style lang="less" scoped>
.posts {
  list-style: none;
  padding: 0;

  .post-preview {
    &.showYear .post-item {
      margin-left: 20px;
    }
    & > .seperator + .post-item {
      border-top: none;
    }
    &:first-child {
      .post-item {
        border-top: none;
      }
    }
  }

  .post-item {
    border-top: 1px solid #eee;
    padding: 5px 0;
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
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;

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

.seperator {
  margin: 30px 0 10px;
  .text {
    color: #0085a1;
    font-size: 20px;
  }
}

.empty {
  margin-top: 100px;
  text-align: center;

  img {
    box-shadow: none;
  }
}
</style>