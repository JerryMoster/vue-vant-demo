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
    <!-- 每个元素的两侧间隔相等 -->
    <van-row type="flex" justify="space-around">
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
    </van-row>
    <van-cell title="活动时间" :value="date" @click="show = true" is-link></van-cell>
    <van-calendar v-model="show" type="range" @click="formatDate" @confirm="onConfirm" color="#07c160" confirm-text="完成"
      confirm-disabled-text="请选择结束时间" :formatter="formatter" />
    <van-checkbox v-model="check" shape="square" checked-color="#07c160" icon-size="24px">
      自定义复选框的图标
      <template #icon="props">
        <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
      </template>
    </van-checkbox>
    <van-checkbox-group v-model="result" direction="horizontal">
      <van-checkbox name="a">单选1</van-checkbox>
      <van-checkbox name="b">单选2</van-checkbox>
    </van-checkbox-group>
    <p>+++++++++++++++++++</p>
    <van-cell-group>
      <van-field required type="text" placeholder="请输入姓名" label="姓名" />
      <van-field required type="number" placeholder="请输入年龄" label="年龄" />
      <van-field required clearable type="tel" placeholder="请输入电话" label="电话" error-message="手机号格式错误" />
      <van-field required clearable type="password" placeholder="请输入密码" label="密码" />
      <van-field required clearable type="password" placeholder="请重新输入密码" label="重新输入密码" />
    </van-cell-group>

    <van-form @submit="onSubmit">
      <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]" />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    <van-form validate-first @failed="onFailed">
      <!-- 通过 pattern 进行正则校验 -->
      <van-field v-model="value1" name="pattern" placeholder="正则校验" :rules="[{ pattern, message: '请输入正确内容' }]" />
      <!-- 通过 validator 进行函数校验 -->
      <van-field v-model="value2" name="validator" placeholder="函数校验" :rules="[{ validator, message: '请输入正确内容' }]" />
      <!-- 通过 validator 进行异步函数校验 -->
      <van-field v-model="value3" name="asyncValidator" placeholder="异步函数校验"
        :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]" />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      username: '',
      password: '',
      isShow: false,
      visible: false,
      date: '请选择活动时间',
      show: false,
      check: false,
      activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
      inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png',
      result: [],
      value1: '',
      value2: '',
      value3: '',
      pattern: /\d{6}/,
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
    },
    formatDate (date) {
      return `${date.getFullYear()} /${date.getMonth() + 1} /${date.getDate()} `
    },
    onConfirm (date) {
      const [start, end] = date
      this.show = false;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`
      console.log(this.date)
    },
    // 自定义日期时间
    formatter (day) {
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();

      if (month === 5) {
        if (date === 1) {
          day.topInfo = '劳动节';
        } else if (date === 4) {
          day.topInfo = '青年节';
        } else if (date === 11) {
          day.text = '今天';
        }
      }

      if (day.type === 'start') {
        day.bottomInfo = '入住';
      } else if (day.type === 'end') {
        day.bottomInfo = '离店';
      }

      return day;
    },
    onSubmit (values) {
      console.log('submit', values);
    },
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator (val) {
      return /1\d{10}/.test(val);
    },
    // 异步校验函数返回 Promise
    asyncValidator (val) {
      return new Promise((resolve) => {
        Toast.loading('验证中...');

        setTimeout(() => {
          Toast.clear();
          resolve(/\d{6}/.test(val));
        }, 1000);
      });
    },
    onFailed (errorInfo) {
      console.log('failed', errorInfo);
    },

  }
}
</script>

<style scoped>
.btn {
  margin: 10px;
}
.img-icon {
  height: 20px;
}
</style>
    <!-- æ¯ä¸ªåç´ çä¸¤ä¾§é´éç¸ç­ -->
    <van-row type="flex" justify="space-around">
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
    </van-row>
    <!-- æ¯ä¸ªåç´ çä¸¤ä¾§é´éç¸ç­ -->
    <van-row type="flex" justify="space-around">
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
      <van-col span="6">span: 6</van-col>
    </van-row>
