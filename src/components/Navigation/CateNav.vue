<!--分类导航-->
<template>
  <section class="ey-column-nav" m-id="subcolumn_nav" m-type="nocontent">
    <div class="container">
      <div class="row">
        <ul class="clearfix ey-column-nav-ul">
          <li>
            <router-link :to="{name:'Main',params:{id:ArcType.Root.id}}" title="全部">全部</router-link>
            <!-- <a href="/chanpinzhanshi/" title="全部" class="active">全部</a> -->
          </li>
          <!--二级菜单-->
          <li v-for="child1 in ArcType.Root.Childs" v-bind:key="child1.id" class="dropdown">
            <router-link
              :to="child1.HasChildren?'#':{name:'Main',params:{id:child1.id}}"
              :title="child1.typename"
              :class="child1.HasChildren?'dropdown-toggle':''"
              :data-toggle="child1.HasChildren?'dropdown':''"
            >{{child1.typename}}</router-link>
            <!--三级菜单-->
            <div v-if="child1.HasChildren" class="dropdown-menu animate">
              <router-link
                v-for="child2 in child1.Childs"
                v-bind:key="child2.id"
                class="dropdown-item"
                :to="{name:'Main',params:{id:child2.id}}"
                title="全部"
              >{{child2.typename}}</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["ArcType"]
};
</script>
