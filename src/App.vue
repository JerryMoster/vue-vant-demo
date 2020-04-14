<template>
  <div id="app">
    <van-button class="btn" type="default">默认按钮</van-button>
    <van-button class="btn" type="primary">主要按钮</van-button>
    <van-button class="btn" type="info">信息按钮</van-button>
    <van-button class="btn" type="warning">警告按钮</van-button>
    <van-button class="btn" type="danger">危险按钮</van-button>

    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
    <van-icon name="chat-o" size="40" badge="10" color="red" />
    <van-icon name="chat-o" size="large" />
    <van-icon name="phone-o" size="2rem" />
    <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" fit="cover" round lazy-load />
    <van-image src="https://img.yzcdn.cn/vant/cat.jpeg">
      <template v-slot:loading>图片加载中</template>
      <template v-slot:error>图片加载失败</template>
    </van-image>
    <van-row>
      <van-col span="6">6</van-col>
      <van-col span="6">6</van-col>
      <van-col span="8">8</van-col>
      <van-col span="4">4</van-col>
    </van-row>
    <van-row type="flex" justify="space-between">
      <van-col>1</van-col>
      <van-col>2</van-col>
      <van-col>3</van-col>
    </van-row>
    <van-cell is-link @click="model">展示弹出层</van-cell>
    <van-popup v-model="isShow" position="bottom" closeable :style="{height:'30%'}" close-icon="close"
      close-icon-position="top-left" round get-container="body" :overlay-style="{background:'red',opacity:0.5}"
      :safe-area-inset-bottom='true'>内容
    </van-popup>
    <van-cell title="单元格" is-link value="内容" />
    <van-cell title="单元格">
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #right-icon>
        <van-icon name="search" style="line-height: inherit;" />
      </template>
    </van-cell>
    <!-- 最多显示一行 -->
    <div class="van-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略。红红火火恍恍惚惚</div>
    <!-- 最多显示两行 -->
    <div class="van-multi-ellipsis--l2">
      这是一段最多显示两行的文字，多余的内容会被省略。红红火火恍恍惚惚这是一段最多显示两行的文字，多余的内容会被省略。红红火火恍恍惚惚这是一段最多显示两行的文字，多余的内容会被省略。红红火火恍恍惚惚</div>
    <!-- 最多显示三行 -->
    <div class="van-multi-ellipsis--l3">
      这是一段最多显示两行的文字，多余的内容会被省略。红红火火恍恍惚惚这是一段最多显示两行的文字，多余的内容会被省略。红红火火恍恍惚惚这是一段最多显示两行的文字，多余的内容会被省略。红红火火恍恍惚惚</div>

    <!-- 上边框 -->
    <div class="van-hairline--top" :style="{height:'40px'}">1</div>

    <!-- 下边框 -->
    <div class="van-hairline--bottom" :style="{height:'40px'}">2</div>

    <!-- 左边框 -->
    <div class="van-hairline--left" :style="{height:'40px'}">3</div>

    <!-- 右边框 -->
    <div class="van-hairline--right" :style="{height:'40px'}">4</div>
    <!-- <transition name="van-fade">
      <div
        :style="{width:'200px',height:'200px',backgroundColor:'red',position:'fixed',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}"
        v-show="visible">Fade</div>
    </transition> -->
    <!-- 上滑进入 -->
    <transition name="van-slide-left">
      <div v-show="visible"
        :style="{width:'200px',height:'200px',backgroundColor:'red',position:'fixed',top:'50%',left:'50%',transform:'translate(-100px,-100px)'}">
        动画效果</div>
    </transition>
    <!-- 上下边框 -->
    <div class="van-hairline--top-bottom" :style="{height:'40px'}">5</div>

    <!-- 全边框 -->
    <div class="van-hairline--surround" :style="{height:'40px'}">6</div>

    <van-cell is-link @click="fade">点击动画</van-cell>
    <!-- 每个元素的两侧间隔相等 -->
    <van-row type="flex" justify="space-around">
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
    </van-row>
    <!-- 每个元素的两侧间隔相等 -->
    <van-row type="flex" justify="space-around">
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
    </van-row>
    <!-- 每个元素的两侧间隔相等 -->
    <van-row type="flex" justify="space-around">
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
    </van-row>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      isShow: false,
      visible: false
    }
  },
  components: {
  },
  methods: {
    model () {
      this.isShow = !this.isShow
    },
    // 返回一个特定的 DOM 节点，作为挂载的父节点
    getContainer () {
      return document.querySelector('.my-container');
    },
    fade () {
      this.visible = true
    }
  }
}
</script>

<style scoped>
.btn {
  margin: 10px;
}
</style>
