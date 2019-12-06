<template>
  <div class="experimentationWrap">
    <div
      class="card"
      v-for="(item, index) in DATA"
    >
      <div class="card-cover"></div>
      <div class="card-body">
        <div class="card-meta">
          <div class="card-meta-title">{{ item.title }}</div>
          <div class="card-meta-description">{{ item.description }}</div>
        </div>
      </div>
      <ul class="card-actions">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            :href="item.github"
          >
            <span>
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                class=""
                data-icon="github"
                width="1.5em"
                height="1.5em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
              </svg></span>
          </a>
        </li>
        <li>
          <a
            v-if="item.preview"
            target="_blank"
            rel="noopener noreferrer"
            :href="item.preview"
          >
            <span>
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                class=""
                data-icon="eye"
                width="1.5em"
                height="1.5em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
              </svg>
            </span>
          </a>
          <span v-else>
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              class=""
              data-icon="eye-invisible"
              width="1.5em"
              height="1.5em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z"></path>
              <path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z"></path>
            </svg>
          </span>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import DATA from './experimentation.json'

export default {
  data() {
    return {
      DATA,
    }
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {
    console.log(DATA)
  }
}
</script>

<style lang="less" scoped>
@border-radis: 4px;
@border-color: #e8e8e8;

.clearfix() {
  zoom: 1;
  &:before,
  &:after {
    content: " ";
    display: table;
  }
  &:after {
    clear: both;
    visibility: hidden;
    font-size: 0;
    height: 0;
  }
}

.card {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: "tnum";
  position: relative;
  background: #fff;
  border-radius: @border-radis;
  transition: all 0.3s;
  border: 1px solid @border-color;
  width: 49%;
  display: inline-block;
  margin-bottom: 10px;
  &:nth-child(2n + 1) {
    margin-right: 2%;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
  }

  .card-cover {
    img {
      border-radius: @border-radis @border-radis 0 0;
    }

    & > * {
      display: block;
      width: 100%;
    }
  }

  .card-body {
    padding: 20px;

    .card-meta {
      margin: -4px 0;

      & > div:not(:last-child) {
        margin-bottom: 6px;
      }

      &-title {
        overflow: hidden;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 500;
        font-size: 16px;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      &-description {
        color: rgba(0, 0, 0, 0.45);
      }
    }
  }

  .card-actions {
    margin: 0;
    padding: 0;
    list-style: none;
    background: #fafafa;
    border-top: 1px solid @border-color;
    zoom: 1;

    .clearfix();
    & > li {
      float: left;
      width: 50%;
      margin: 12px 0;
      color: rgba(0, 0, 0, 0.45);
      text-align: center;
      box-sizing: border-box;

      &:not(:last-child) {
        border-right: 1px solid @border-color;
      }

      & > span {
        position: relative;
        display: block;
        min-width: 32px;
        font-size: 14px;
        line-height: 22px;
        cursor: pointer;
      }
    }
  }
}
</style>