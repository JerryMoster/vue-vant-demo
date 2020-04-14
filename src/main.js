import Vue from 'vue'
import App from './App.vue'
import { Button } from 'vant'
import { Cell, CellGroup } from 'vant'
import { Icon } from 'vant'
import { Image } from 'vant'
import { Lazyload } from 'vant'
import { Col, Row } from 'vant'
import { Popup } from 'vant'

Vue.use(Button)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Icon)
Vue.use(Image)
Vue.use(Lazyload)
Vue.use(Col)
Vue.use(Row)
Vue.use(Popup)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
