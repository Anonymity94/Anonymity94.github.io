<template>
  <main class="page">
    <slot name="top" />
    <ArticleMeta #top />

    <Content class="theme-default-content" />
    <ParentPageEdit />

    <ParentPageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import ParentPageEdit from '@parent-theme/components/PageEdit.vue'
import ParentPageNav from '@parent-theme/components/PageNav.vue'
import ArticleMeta from '@theme/components/ArticleMeta.vue'

export default {
  components: { ParentPageEdit, ParentPageNav, ArticleMeta },
  props: ['sidebarItems']
}
</script>
