<template>
  <Layout style="height: 100%" class="main">
    <Sider
      hide-trigger
      collapsible
      :width="256"
      :collapsed-width="64"
      v-model="collapsed"
      class="left-sider"
      :style="{overflow: 'hidden'}"
    >
      <side-menu
        accordion
        ref="sideMenu"
        :active-name="$route.name"
        :collapsed="collapsed"
        @on-select="turnToPage"
        :menu-list="menuList"
      >
        <!-- 需要放在菜单上面的内容，如Logo，写在side-menu标签内部，如下 -->
        <!-- <div class="logo-con">
          <img v-show="!collapsed" :src="maxLogo" key="max-logo" />
          <img v-show="collapsed" :src="minLogo" key="min-logo" />
        </div>-->
      </side-menu>
    </Sider>
    <Layout>
      <Header class="header-con">
        <header-bar :collapsed="collapsed" @on-coll-change="handleCollapsedChange">
          <user :message-unread-count="unreadCount" :user-avator="userAvator"/>
          <div class="userinfo">{{loginScopeName}} / {{user_.userName}}</div>
          <fullscreen v-model="isFullscreen" style="margin-right: 10px;"/>
        </header-bar>
      </Header>
      <Content class="main-content-con">
        <Layout class="main-layout-con">
          <!-- <div class="tag-nav-wrapper">
            <tags-nav
              :value="$route"
              @input="handleClick"
              :list="tagNavList"
              @on-close="handleCloseTag"
            />
          </div>-->
          <Content class="content-wrapper">
            <!-- <keep-alive :include="cacheList"> -->
            <router-view class="router-view"/>
            <!-- </keep-alive> -->
            <ABackTop :height="100" :bottom="80" :right="50" container=".content-wrapper"></ABackTop>
          </Content>
        </Layout>
      </Content>
    </Layout>
  </Layout>
</template>
<script>
import SideMenu from "./components/side-menu";
import HeaderBar from "./components/header-bar";
import TagsNav from "./components/tags-nav";
import User from "./components/user";
import ABackTop from "./components/a-back-top";
import Fullscreen from "./components/fullscreen";
import { mapMutations, mapActions, mapGetters } from "vuex";
import { getNewTagList, routeEqual } from "@/libs/util";
import routers from "@/router/routers";
import minLogo from "@/assets/images/logo-min.jpg";
import maxLogo from "@/assets/images/logo.jpg";
import "./main.less";
import { mapState } from "vuex";

console.log("routers:::", routers);

export default {
  name: "Main",
  components: {
    SideMenu,
    HeaderBar,
    TagsNav,
    Fullscreen,
    User,
    ABackTop
  },
  data() {
    return {
      collapsed: true,
      minLogo,
      maxLogo,
      isFullscreen: false
    };
  },
  computed: {
    ...mapState(["user_", "loginScopeName", "menus"]),
    ...mapGetters(["errorCount"]),
    tagNavList() {
      return this.$store.state.app.tagNavList;
    },
    tagRouter() {
      return this.$store.state.app.tagRouter;
    },
    userAvator() {
      return this.$store.state.user.avatorImgPath;
    },
    cacheList() {
      const list = [
        "ParentView",
        ...(this.tagNavList.length
          ? this.tagNavList
              .filter(item => !(item.meta && item.meta.notCache))
              .map(item => item.name)
          : [])
      ];
      return list;
    },
    menuList() {
      console.log("menuList:111111", this.$store.getters.menuList);
      console.log("menus", this.menus);

      return this.$store.getters.menuList;

      // let menus = this.$store.getters.menuList;
      // let authMenus = this.menus;
      // return this.authMenus(menus, authMenus);
    },
    local() {
      return this.$store.state.app.local;
    },
    hasReadErrorPage() {
      return this.$store.state.app.hasReadErrorPage;
    },
    unreadCount() {
      return this.$store.state.user.unreadCount;
    }
  },
  methods: {
    ...mapMutations([
      "setBreadCrumb",
      "setTagNavList",
      "addTag",
      "setLocal",
      "setHomeRoute",
      "closeTag"
    ]),
    ...mapActions(["handleLogin", "getUnreadMessageCount"]),
    authMenus(menus, authMenus) {
      let arr = [];

      for (let i = 0; i < menus.length; i++) {
        for (let ii = 0; ii < authMenus.length; ii++) {
          if (authMenus[ii].name == menus[i].menuCode) {
            arr.push(menus[i]);
            break;
          }
        }
      }

      return arr;
    },
    turnToPage(route) {
      let { name, params, query } = {};
      if (typeof route === "string") name = route;
      else {
        name = route.name;
        params = route.params;
        query = route.query;
      }
      if (name.indexOf("isTurnByHref_") > -1) {
        window.open(name.split("_")[1]);
        return;
      }
      this.$router.push({
        name,
        params,
        query
      });
    },
    handleCollapsedChange(state) {
      this.collapsed = state;
    },
    handleCloseTag(res, type, route) {
      if (type !== "others") {
        if (type === "all") {
          this.turnToPage(this.$config.homeName);
        } else {
          if (routeEqual(this.$route, route)) {
            this.closeTag(route);
          }
        }
      }
      this.setTagNavList(res);
    },
    handleClick(item) {
      this.turnToPage(item);
    }
  },
  watch: {
    $route(newRoute) {
      const { name, query, params, meta } = newRoute;
      this.addTag({
        route: { name, query, params, meta },
        type: "push"
      });
      this.setBreadCrumb(newRoute);
      this.setTagNavList(getNewTagList(this.tagNavList, newRoute));
      this.$refs.sideMenu.updateOpenName(newRoute.name);
    }
  },
  mounted() {
    console.log("this.user_:", this.user_);

    /**
     * @description 初始化设置面包屑导航和标签导航
     * @zj 设置 tagNavList 到 state ，并且保存到 localStorage
     */
    // this.setTagNavList()

    // @zj 把home路由 保存到state中
    this.setHomeRoute(routers);

    // this.addTag({
    //   route: this.$store.state.app.homeRoute
    // });

    this.setBreadCrumb(this.$route);

    // 如果当前打开页面不在标签栏中，跳到homeName页
    // if (!this.tagNavList.find(item => item.name === this.$route.name)) {
    //   this.$router.push({
    //     name: this.$config.homeName
    //   });
    // }
    // 获取未读消息条数
    // this.getUnreadMessageCount();
  }
};
</script>

<style>
.userinfo {
  float: left !important;
  margin-right: 10px;
}
.router-view {
  /* height: 100%; */
}
.table-wrap {
  padding-bottom: 64px;
  position: relative;
}
</style>
