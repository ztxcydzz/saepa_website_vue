<template>
  <div class="container">
    <div class="row">
      <div v-for="social in socials" class="box">
        <div class="title">{{ social.title }}</div>
        <div class="text">
          <div v-for="text in social.texts">{{ text }}</div>
        </div>
      </div>
      <div class="box">
        <div class="title">联系我们</div>
        <div class="text contactBox">
          <div class="qrcode"><img src="../images/contact/qrcode.jpg"></div>
          <div>邮箱: saepa_thu@163.com</div>
          <div>微博: 清华SAEPA</div>
        </div>
      </div>
    </div>
    <!--<div class="row">-->
      <!--<div class="box">-->
        <!--<div class="title">联系我们</div>-->
        <!--<div class="contactBox">-->
          <!--<div class="qrcode"><img src="../images/contact/qrcode.jpg"></div>-->
          <!--<div class="text">-->
            <!--<div>邮箱: saepa_thu@163.com</div>-->
            <!--<div>微博: 清华SAEPA</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
export default {
  name: 'footer',
  data() {
    return {
      socials: [
        {
          title: '社会认可',
          texts: ['北极光-清华全国大学生公益创业实践赛银奖', '清华百年树人德年公益文化奖', '北京高校优秀学生社团称号', '阿克苏诺贝尔奖', '北京市志愿服务大赛金奖'],
        },
        {
          title: '媒体报道',
          texts: ['社会媒体专题报道超过20篇，人物采访超过10篇。包含《参考消息》、《新京报》、《京华时报》、《中国青年报》、《中国教育报》、《紫荆报》、清华主页、新浪教育和网易公益等媒体报道。', '《清华最帅工科男》视频新浪播放次数达2,496,817，被酷6等各大视频网站、洛阳晚报等各大报纸转载报道。'],
        },
        {
          title: '合作单位',
          texts: ['清华大学扶贫办公室', '曾宪备基金会', '智行基金会', '途梦公益', '金雅拓', '萝卜太辣'],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  overflow: hidden;
  height: 100%;
  background: url("../images/1.jpg") no-repeat center center;
  background-size: cover;
  color: white;
  .row {
    margin: 20px 0;
    display: flex;
    .box {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 0 50px;
    }
    .title {
      border-bottom: 1px #aaa dashed;
      font-size: 25px;
      font-weight: bold;
      padding: 5px 0;
      margin: 10px 0;
    }
    .text {
      font-size: 14px;
      div {
        padding: 5px 0;
      }
    }
  }
  .contactBox {
    .qrcode {
      width: 100px;
      img {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .container {
    .row {
      padding: 0 40px;
      flex-direction: column;
      .box {
        padding-left: 0;
      }
      .title {
        font-size: 20px;
        padding: 5px 0;
      }
      .text {
        div {
          padding: 3px 0;
        }
      }
    }
  }
}
</style>
