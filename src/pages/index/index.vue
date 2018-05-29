<template>
  <div>
    <div class="container">
      <div class="userinfo">
        <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      </div>
      <picker @change="bindPickerChange" :value="index" :range="array">
        <button size="mini" class="btn">已选中: {{array[index]}}</button>
      </picker>
    </div>
    <div class="weui-cells__title">{{channelData[4] && channelData[4].text}}</div>
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>标题文字</p>
        </div>
        <div class="weui-cell__ft">{{homeData.article && homeData.article[2].subtitle}}</div>
      </div>
    </div>
    <div class="page">
      <div class="weui-progress">
        <div class="weui-progress__bar">
          <progress percent="80" stroke-width="3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {},
      array: ["美国", "中国", "巴西", "日本"],
      index: 0,
    };
  },

  computed: {
    // Vuex状态管理
    homeData() {
      return this.$store.state.home.homeData;
    },
    channelData() {
      return this.$store.state.home.channelData;
    },
    isLoading() {
      return this.$store.state.home.isLoading;
    },
  },

  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();

    // 测试
    const { dispatch } = this.$store;

    dispatch({
      type: "home/getHomeData",
    });
  },

  components: {},

  methods: {
    bindPickerChange(e) {
      console.log("picker发送选择改变，携带值为", e.target.value);
      this.index = e.target.value;
    },
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo;
            },
          });
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../../static/css/index.less";

.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: @primary-hui;
}

.btn {
  background-color: @primary-theme;
  color: @primary-white;
}

// Progress
.page {
  margin-top: 50px;
  padding: 15px;
  box-sizing: border-box;
}
.weui-progress {
  margin-bottom: 25px;
}
</style>
