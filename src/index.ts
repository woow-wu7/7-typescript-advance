// 1
// tsc src/*.ts 编译所有scr文件夹中的ts文件

// 2
// 测试 tsconfig.json中的 target 和 module，即 ( 编译后的js的版本类型和模块类型 )

import { other } from './other'
import { reverse } from '@/util/index'
import { reverse2 } from '@/util/index2'

const str = 'string'
const fn = () => {
  // return reverse([other + str])
  return reverse2(reverse([other + str]));
}
fn()