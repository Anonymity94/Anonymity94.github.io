<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="copyright">
        ©
        <span itemprop="copyrightYear">2019</span>
        🧐
        <span class="author" itemprop="copyrightHolder">Anonymity94</span>
      </div>

      <div class="powered-by">
        由
        <a class="theme-link" href="https://vuepress.vuejs.org/zh/">VuePress</a>
        强力驱动
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="less">
.footer {
  margin-top: 80px;
  padding: 10px 0;
  color: #666;
  font-size: 14px;
  .footer-inner {
    margin: 0 auto;
    box-sizing: border-box;
  }
  .with-love {
    display: inline-block;
    margin: 0 5px;
  }
  .powered-by {
    margin-top: 10px;
  }
}
</style>>