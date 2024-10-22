import Vue from 'vue'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import FormCreate from '../src'

Vue.use(ViewUI)
Vue.use(FormCreate)

//todo ------------------ Demo 用 ------------------

import VJsoneditor from 'v-jsoneditor'
import addressEffect from './addressEffect';
import App from './App.vue'
import wangEditor from '@form-create/component-wangeditor/src'


Vue.use(VJsoneditor)
FormCreate.register(addressEffect);
FormCreate.component('wangEditor', wangEditor);

//自定义组件
Vue.component('testSlot', {
    render(h) {
        return h('div', {}, [this.$slots.asd]);
    }
})

//todo ------------------ Demo 用 ------------------

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
