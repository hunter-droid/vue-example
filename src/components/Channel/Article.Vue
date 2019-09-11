<template>
  <section class="ey-news animsition">
    <div class="container">
      <div class="row">
        <div class="col-md-9 ey-news-body">
          <div class="row">
            <div class="ey-news-list">
              <ul class="ulstyle ey-pager-ajax imagesize">
                <li
                  v-for="item in Articles.Items"
                  v-bind:key="item.id"
                  class="media media-lg border-bottom1"
                >
                  <div class="media-left">
                    <router-link
                      :to="{name:'Main',params:{id:item.typeid,detail:item.aid}}"
                      :title="item.title"
                    >
                      <img
                        class="media-object"
                        :src="item.litpic!=''?ImageBaseUrl+item.litpic:'/static/images/not_adv.jpg'"
                        :alt="item.title"
                        onerror="this.src='/static/images/not_adv.jpg'"
                      >
                    </router-link>
                  </div>
                  <div class="media-body">
                    <h4>
                      <router-link
                        :to="{name:'Main',params:{id:item.typeid,detail:item.aid}}"
                        :title="item.title"
                      >{{item.title}}</router-link>
                    </h4>
                    <p class="des font-weight-300">{{item.seo_description}}</p>
                    <p class="info font-weight-300">
                      <span>{{formatDate(item.update_time)}}</span>
                      <span></span>
                      <span>
                        <i class="icon fa-eye m-r-5 font-weight-300"></i>
                        {{item.click}}
                      </span>
                    </p>
                  </div>
                </li>
              </ul>
              <div class="m-t-20 text-xs-center hidden-sm-down">
                <ul class="tcdPageCode">
                  共
                  <strong>{{Articles.TotalPages}}</strong>页
                  <strong>{{Articles.TotalItems}}</strong>条
                </ul>
              </div>
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
  </section>
</template>
<script>
export default {
  props: ["ArcType"],
  data() {
    return {
      Articles: "",
      ImageBaseUrl: "http://localhost:53672/"
    };
  },
  methods: {
    async initData(id) {
      var res = await this.$httpData.getArchives(id);
      console.log(res);
      this.Articles = res;
    },
    formatDate(time){
      var date=new Date(time*1000);
      return this.$util.formatDate(date,'yyyy-MM-dd');
    }
  },
  created() {
    var id = this.ArcType.ArcType.id;
    // if (this.ArcType.ArcType.parent_id == 0) {
    //   id = this.ArcType.ArcType.Childs[0].id;
    // }
    this.initData(id);
  }
};
</script>
