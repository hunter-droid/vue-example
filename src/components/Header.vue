<!--网站头-->
<template>
  <nav v-if="arcList!=''" class="navbar navbar-default box-shadow-none ey-nav">
    <div class="container">
      <div class="row">
        <h1 hidden>VTeam-CMS</h1>
        <div class="navbar-header pull-xs-left">
          <a
            href="http://demo.eyoucms.com/"
            class="navbar-logo vertical-align block pull-xs-left"
            title="VTeam-CMS"
          >
            <div class="vertical-align-middle">
              <img src="/static/images/logo.png" alt="VTeam-CMS">
            </div>
          </a>
        </div>
        <button
          type="button"
          class="navbar-toggler hamburger hamburger-close collapsed p-x-5 ey-nav-toggler"
          data-target="#ey-nav-collapse"
          data-toggle="collapse"
        >
          <span class="sr-only"></span>
          <span class="hamburger-bar"></span>
        </button>
        <div
          class="collapse navbar-collapse navbar-collapse-toolbar pull-md-right p-0"
          id="ey-nav-collapse"
        >
          <!--菜单导航-->
          <ul class="nav navbar-nav navlist">
            <!--一级菜单-->
            <li class="nav-item">
              <router-link :to="{name:'Home'}" title="网站首页" class="nav-link">网站首页</router-link>
            </li>
            <li
              v-on:mouseover="mouseover($event)"
              v-on:mouseout="mouseout($event)"
              v-for="item1 in arcList"
              :class="'nav-item dropdown m-l-10'"
              v-bind:key="item1.id"
            >
              <router-link
                :to="{name:'Main',params:{id:item1.id}}"
                v-if="item1.parent_id==0"
                :class="'nav-link dropdown-toggle'"
                data-toggle="dropdown"
                data-hover="dropdown"
                aria-haspopup="true"
                aria-expanded="false"                
              >
                {{item1.typename}}
                <span v-if="item1.HasChildren" class="fa fa-angle-down p-l-5"></span>
              </router-link>
              <!--二级菜单-->
              <div
                v-if="item1.HasChildren"
                class="dropdown-menu dropdown-menu-right dropdown-menu-bullet"
              >
                <div
                  v-for="item2 in item1.Childs"
                  v-bind:key="item2.id"
                  class="dropdown-item dropdown-submenu"
                >
                  <router-link
                    :to="{name:'Main',params:{id:item2.id}}"
                    class="dropdown-item"
                  >{{item2.typename}}</router-link>
                  <!--三级菜单-->
                  <div v-if="item2.HasChildren" class="dropdown-menu animate">
                    <router-link
                      v-for="item3 in item2.Childs"
                      :to="{name:'Main',params:{id:item3.id}}"
                      class="dropdown-item"
                      :key="item3.id"
                    >{{item3.typename}}</router-link>
                  </div>
                </div>
              </div>
            </li>

            <!--<li class="nav-item m-l-10 ey-login">
              <a
                href="http://demo.eyoucms.com/user"
                id="62e41987df362b971fa89d8973bc33a9"
                class="navlog"
                style="display: inline;"
              >登录</a>
              <span>|</span>
            </li>

            <li class="nav-item dropdown m-l-10">
              <a
                href="http://demo.eyoucms.com/login.php"
                class="nav-link dropdown-toggle"
                data-hover="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <strong style="color: red; font-weight: bold;">后台管理</strong>
              </a>
            </li>-->
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      arcList: ''
    };
  },
  methods: {
    mouseover(event) {
      var el = event.currentTarget;
      $(el).toggleClass("open");
    },
    mouseout(event) {
      var el = event.currentTarget;
      $(el).toggleClass("open", false);
    },
    async initData() {
      var res = await this.$httpData.getArcType();
      console.log(res);
      this.arcList = res;
    }
  },
  created() {
    this.initData();
  }
};
</script>

<style scoped>
</style>