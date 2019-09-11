<template>
  <section class="ey-show-body" m-id="noset">
    <div class="container">
      <div v-html="Single.content" class="ey-editor clearfix"></div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["ArcType"],
  data() {
    return {
      Single: ""
    };
  },
  methods: {
    async initData(id) {
      var res = await this.$httpData.getSingle(id);
      this.Single = res;
    }
  },
  created() {
    var id = this.ArcType.ArcType.id;
    if (this.ArcType.ArcType.parent_id == 0) {
      id = this.ArcType.ArcType.Childs[0].id;
    }
    this.initData(id);
  }
};
</script>
