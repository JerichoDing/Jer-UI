import Vue from 'vue'
import App from './App'

import Icon from './components/basic/icon.vue'
import Button from './components/basic/button.vue'
import Input from './components/basic/input'

import Popover from './components/middle/popover'
import Collapse from './components/middle/collapse'
import CollapseItem from './components/middle/collapse-item'
import Cascader from './components/middle/cascader'
import CascaderItems from './components/middle/cascader-items'
import Pager from './components/middle/pager'
import Toast from './components/middle/toast/index'
import Table from './components/middle/table'

import Col from './components/layout/col'
import Row from './components/layout/row'
import Layout from './components/layout/layout'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import Content from './components/layout/content'
import Sider from './components/layout/sider'


Vue.component('g-icon',Icon)
Vue.component('g-button',Button)
Vue.component('g-input',Input)

Vue.component('g-popover',Popover)
Vue.component('g-collapse',Collapse)
Vue.component('g-collapse-item',CollapseItem)
Vue.component('g-cascader',Cascader)
Vue.component('g-cascader-items',CascaderItems)
Vue.component('g-pager',Pager)
Vue.component('g-table',Table)

Vue.component('g-col',Col)
Vue.component('g-row',Row)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-footer',Footer)
Vue.component('g-content',Content)
Vue.component('g-sider',Sider)

Vue.config.productionTip = false
Vue.use(Toast)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
