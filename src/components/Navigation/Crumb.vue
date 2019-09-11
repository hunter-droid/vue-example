<!--面包屑导航-->
<template>
  <section class="ey-crumbs hidden-sm-down" m-id="met_position" m-type="nocontent">
    <div class="container">
      <div class="row">
        <div class="border-bottom clearfix">
          <ol class="breadcrumb m-b-0 subcolumn-crumbs breadcrumb-arrow">
            <li class="breadcrumb-item">
              你的位置：
              <router-link :to="{name:'Home'}" class="crumb">首页</router-link>
              &gt;
              <router-link :to="{name:'Main',params:{id:item.Id}}"
                v-for="(item,index) in crumb"
                class="crumb"
                v-bind:key="item.Id"
              >
                {{item.Name}}
                <span v-if="index!=crumb.length-1">&gt;</span>
              </router-link>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
    props:['crumb']
}
</script>
