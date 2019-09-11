<template>
  <div class="ey-showimg">
    <div class="container">
      <div class="row">
        <div class="ey-showimg-body col-md-9" m-id="noset">
          <div class="row">
            <section class="details-title border-bottom1">
              <h1 class="m-t-10 m-b-5">{{Archive.title}}</h1>
              <div class="info">
                <span>{{formatDate(Archive.update_time)}}</span>
                <span></span>
                <span>
                  <i class="icon fa-eye m-r-5"></i>
                  <i
                    id="eyou_arcclick"
                    class="eyou_arcclick"
                    style="font-style:normal"
                  >{{Archive.click}}</i>
                </span>
              </div>
            </section>
            <section class="ey-showimg-con">
              <div class="ey-showimg-list fngallery cover text-xs-center" id="ey-imgs-slick">
                <div class="slick-slide">
                  <a
                    v-for="item in Images"
                    v-bind:key="item.image_id"
                    :href="ImageBaseUrl+item.image_url"
                    class="lg-item-box"
                    data-exthumbimage="/uploads/allimg/20190114/546f502c79cf1b653816006be5d9e3fd.jpg"
                  >
                    <img
                      :src="item.image_url!=''?ImageBaseUrl+item.image_url:'/static/images/not_adv.jpg'"
                      class="img-fluid"
                      :alt="item.title"
                    >
                  </a>
                </div>
              </div>
            </section>
            <section v-html="Content.content" class="ey-editor clearfix m-t-20"></section>
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
          <div class="row"></div>
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
      Content: "",
      Images: "",
      Archive: "",
      Prev: "",
      Next: "",
      ImageBaseUrl: "http://localhost:53672/"
    };
  },
  methods: {
    async initData(aid) {
      var res = await this.$httpData.getImagesDetail(aid);
      console.log(res);
      this.Content = res.Content;
      this.Archive = res.Archive;
      this.Images = res.Images;
      this.Prev = res.Prev == null ? "" : res.Prev;
      this.Next = res.Next == null ? "" : res.Next;
      this.Content.content = this.$util.toHtml(this.Content.content);
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