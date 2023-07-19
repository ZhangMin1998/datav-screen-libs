import Test from './components/Test/index'
import Test2 from './components/Test2/index'
import Test3 from './components/Test3/index'
import Icon from './components/Icon/index'
import SvgAnimation from './components/SvgAnimation'
import DatavLoading from './components/DatavLoading'
import DatavFlyBox from './components/DatavFlyBox'
import Container from './components/Container'

export default function(Vue) {
  // Vue.component(Test.name, Test)
  Vue.use(Test)
  Vue.use(Test2)
  Vue.use(Test3)
  Vue.use(Icon)
  Vue.use(SvgAnimation)
  Vue.use(DatavLoading)
  Vue.use(DatavFlyBox)
  Vue.use(Container)
}