
import GuluToast from './toast.vue'// 引入先前写好的vue
const Toast = {};
// 注册Toast
Toast.install = function (Vue) {
    // 生成一个Vue的子类
    const ToastConstructor = Vue.extend(GuluToast)
    // 通过Vue的原型注册一个方法
    Vue.prototype.$toast = (msg,position) => {
      // 生成一个该子类的实例
      const instance = new ToastConstructor();
      // 将这个实例挂载创建的div上
      instance.$mount()
      console.log('toast 创建成功！',instance)

      // 并将此div加入全局挂载点内部
      document.body.appendChild(instance.$el)
        instance.msg = msg;
        instance.position = position;
    }
}
export default Toast
