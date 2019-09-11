<!--内容-->
<template>
  <div v-if="ArcType!=''">
    <div class="ey-banner-ny vertical-align text-center">
      <h1 class="vertical-align-middle">{{ArcType.ArcType.typename}}</h1>
    </div>
    <!--面包屑导航-->
    <Crumb v-bind:crumb="ArcType.ArcType.Crumb"></Crumb>
    <!--分类筛选标签-->
    <CateNav
      v-if="ArcType.ArcType.parent_id!=0||ArcType.ArcType.HasChildren"
      v-bind:ArcType="ArcType"
    ></CateNav>
    <component :is="Channel" v-if="!$route.params.detail" v-bind:ArcType="ArcType"></component>
    <component :is="Detail" v-else v-bind:ArcType="ArcType" v-bind:aid="$route.params.detail"></component>
    <!--分类内容-->
  </div>
</template>
<script>
import Crumb from "./Navigation/Crumb.vue";
import CateNav from "./Navigation/CateNav.vue";
import Download from "./Channel/Download.vue";
import Guestbook from "./Channel/Guestbook.vue";
import Images from "./Channel/Images.vue";
import Product from "./Channel/Product.vue";
import Single from "./Channel/Single.vue";
import Article from "./Channel/Article.vue";
import ArticleDetail from "./Detail/ArticleDetail.vue";
import ImagesDetail from "./Detail/ImagesDetail.vue";
import { formatDate } from "@/util/util.js";

export default {
  components: {
    Crumb,
    CateNav,
    Download,
    Guestbook,
    Images,
    Product,
    Single,
    Article,
    ArticleDetail,
    ImagesDetail
  },
  data() {
    return {
      ArcType: "",
      Channel: "",
      Detail: ""
    };
  },
  watch: {
    // 方法1
    $route(to, from) {
      //监听路由是否变化
      if (this.$route.params.id) {
        this.getData();
      }
    }
  },
  methods: {
    async getData() {
      this.Channel = "";
      this.Detail = "";
      var data = await this.$httpData.getArcType(this.$route.params.id);
      this.ArcType = data;
      this.Channel = data.ArcType.ctl_name;
      this.Detail = data.ArcType.ctl_name + "Detail";
      console.log(this.Channel);
    }
  },
  created() {
    this.getData();
  }
};
</script>
