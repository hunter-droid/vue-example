<template>
  <div class="container" v-if="Article!=''">
    <div class="row">
      <div class="col-md-9 ey-shownews-body">
        <div class="row">
          <section class="details-title">
            <h1 class="m-t-10 m-b-5">{{Archive.title}}</h1>
            <div class="info font-weight-300">
              <span>{{formatDate(Archive.update_time)}}</span>
              <span></span>
              <span>
                <i class="icon fa-eye m-r-5"></i>
                <i id="eyou_arcclick" class="eyou_arcclick" style="font-style:normal">378</i>
              </span>
            </div>
          </section>
          <section v-html="Article.content" class="ey-editor clearfix"></section>
          <div class="ey-page ey-shownews-footer border-top1">
            <ul class="pagination block blocks-2">
              <li v-if="Prev!=''" class="page-item m-b-0">
                <router-link
                  :to="{name:'Main',params:{id:Prev.typeid,detail:Prev.aid}}"
                  :title="Prev.title"
                  class="page-link text-truncate"
                >
                  上一篇
                  <span class="hidden-xs-down">: {{Prev.title}}</span>
                </router-link>
              </li>
              <li v-else class="page-item m-b-0">
                <a class="page-link text-truncate">上一篇：暂无</a>
              </li>
              <li v-if="Next!=''" class="page-item m-b-0">
                <router-link
                  :to="{name:'Main',params:{id:Next.typeid,detail:Next.aid}}"
                  :title="Next.title"
                  class="page-link pull-xs-right text-truncate"
                >
                  下一篇
                  <span class="hidden-xs-down">: {{Next.title}}</span>
                </router-link>
              </li>
              <li v-else class="page-item m-b-0">
                <a class="page-link pull-xs-right text-truncate">下一篇：暂无</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="row">
          <!--搜索推荐-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["aid"],
  data() {
    return {
      Article: "",
      Archive: "",
      Prev: "",
      Next: ""
    };
  },
  methods: {
    async initData(aid) {
      var res = await this.$httpData.getArticle(aid);
      console.log(res);
      this.Article = res.Article;
      this.Archive = res.Archive;
      this.Prev = res.Prev == null ? "" : res.Prev;
      this.Next = res.Next == null ? "" : res.Next;
      this.Article.content = this.$util.toHtml(this.Article.content);
    },
    formatDate(time) {
      var date = new Date(time * 1000);
      return this.$util.formatDate(date, "yyyy-MM-dd hh:mm:ss");
    }
  },
  created() {
    this.initData(this.aid);
  }
};
</script>
