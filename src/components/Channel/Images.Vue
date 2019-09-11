<template>
  <div class="ey-img animsition">
    <div class="container">
      <div class="row">
        <ul
          class="blocks-100 blocks-md-2 blocks-lg-4 blocks-xxl-4 no-space ey-pager-ajax imagesize ey-img-list"
        >
          <li v-for="item in Images.Items" v-bind:key="item.id" class="widget">
            <div class="cover overlay overlay-hover">
              <router-link
                :to="{name:'Main',params:{id:item.typeid,detail:item.aid}}"
                :title="item.title"
                class="btn btn-outline btn-inverse ey-img-showbtn"
              >
                <img
                  class="cover-image overlay-scale"
                  :src="item.litpic!=''?ImageBaseUrl+item.litpic:'/static/images/not_adv.jpg'"
                  :alt="item.title"
                >
              </router-link>
            </div>
            <div class="cover-title">
              <h3>
                <router-link
                  :to="{name:'Main',params:{id:item.typeid,detail:item.aid}}"
                  :title="item.title"
                >{{item.title}}</router-link>
              </h3>
            </div>
          </li>
        </ul>
        <div class="m-t-20 text-xs-center hidden-sm-down">
          <ul class="tcdPageCode">
            共
            <strong>{{Images.TotalPages}}</strong>页
            <strong>{{Images.TotalItems}}</strong>条
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["ArcType"],
  data() {
    return {
      Images: "",
      ImageBaseUrl: "http://localhost:53672/"
    };
  },
  methods: {
    async initData(id) {
      var res = await this.$httpData.getArchives(id);
      console.log(res);
      this.Images = res;
    },
    formatDate(time) {
      var date = new Date(time * 1000);
      return this.$util.formatDate(date, "yyyy-MM-dd");
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
