<script>
import { mapGetters ,mapMutations } from "vuex";
export default {
  computed:{
      ...mapGetters(["hasLogin"])
  },
  methods: {
    ...mapMutations(["SET_SYSTEMINFO","SET_INIT"])
  },
  onLaunch: async function(o) {
    console.log('是否登陆',this.hasLogin)
    console.log("App Launch", o);
    let init = await this.$apis.ShopInit()
    if(init.code==0){
      this.SET_INIT(init.result.siteInfo)
    }
    // 进入应用获取系统信息
    try {
      const systemInfo = uni.getSystemInfoSync();
      console.log(systemInfo);
      this.SET_SYSTEMINFO(systemInfo);
    } catch (e) {
      console.log("获取系统信息", e);
    }
  },
  onShow: function(o) {
    console.log("App Show", o);
  },
  onHide: function() {
    console.log("App Hide");
  }
};
</script>

<style lang="scss">
/*每个页面公共css */
@import "@/common.scss";
button{
  &[disabled]:not([type]),
  &[disabled][type="default"] {
    background-color: #d1d1d1 !important;
    color: $t-f !important;
  }
}
.social-button {
  width: 694upx;
  padding: 0 28upx;
  background-color: #141414;
  text-align: center;
  border-radius: 4upx;
  font-size: 38upx;
  color: $t-f;
  border: 0;
  &:after {
    display: none;
  }
}

@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_1222817_2xwunkjhc6e.eot?t=1562208166818'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1222817_2xwunkjhc6e.eot?t=1562208166818#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('//at.alicdn.com/t/font_1222817_2xwunkjhc6e.woff?t=1562208166818') format('woff'),
  url('//at.alicdn.com/t/font_1222817_2xwunkjhc6e.ttf?t=1562208166818') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1222817_2xwunkjhc6e.svg?t=1562208166818#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-jia:before {
  content: "\e65a";
}

.icon-gou:before {
  content: "\e677";
}

.icon-map:before {
  content: "\e601";
}

.icon-qianjin:before {
  content: "\e647";
}

.icon-time:before {
  content: "\e600";
}

.icon-guanbi:before {
  content: "\e732";
}

.icon-xiaoxi:before {
  content: "\e652";
}

.icon-guanbi1:before {
  content: "\e660";
}

.icon-reduce:before {
  content: "\e71b";
}

.icon-add:before {
  content: "\e636";
}

.icon-favorate:before {
  content: "\e60d";
}

.icon-search:before {
  content: "\e60e";
}

.icon-scan:before {
  content: "\e60f";
}

.icon-back:before {
  content: "\e610";
}

.icon-share:before {
  content: "\e611";
}


</style>
