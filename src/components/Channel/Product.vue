<template>
  <div class="ey-product-list animsition">
    <div class="container">
      <div class="less-page-content">
        <ul
          class="ey-product blocks blocks-100 blocks-xlg-5 blocks-md-4 blocks-sm-3 blocks-xs-2 ulstyle ey-pager-ajax imagesize"
          data-scale="400x400"
        >
          <li v-for="item in Products.Items" v-bind:key="item.aid" class="shown">
            <div class="card card-shadow">
              <figure class="card-header cover">
                <router-link
                :to="{name:'Main',params:{id:item.typeid,detail:item.aid}}"
                :title="item.title">
                  <img
                    class="cover-image"
                   :src="item.litpic!=''?ImageBaseUrl+item.litpic:'/static/images/not_adv.jpg'"
                  :alt="item.title"
                    style
                  >
                </router-link>
              </figure>
              <h4 class="card-title m-0 p-x-10 font-size-16 text-xs-center">
                <router-link
                :to="{name:'Main',params:{id:item.typeid,detail:item.aid}}"
                :title="item.title"
                  class="block text-truncate"
                >{{item.title}}</router-link>
              </h4>
            </div>
          </li>          
        </ul>
        <div class="m-t-20 text-xs-center hidden-sm-down">
          <ul class="tcdPageCode">
            共
            <strong>{{Products.TotalPages}}</strong>页
            <strong>{{Products.TotalItems}}</strong>条
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
      Products: "",
      ImageBaseUrl: "http://localhost:53672/"
    };
  },
  methods: {
    async initData(id) {
      var res = await this.$httpData.getArchives(id);
      console.log(res);
      this.Products = res;
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
