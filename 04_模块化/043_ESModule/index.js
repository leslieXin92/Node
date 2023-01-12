// 导入方式一：
import { user, age, printMsg } from './a.js'


// 导入方式二：
/*
import { user as moduleAUser, age as moduleAAge, printMsg as moduleAPrintMsg } from './a.js'
*/


// 导入方式三：
/*
import * as moduleA from './a.js'
*/

console.log(user)
console.log(age)
printMsg('cabbage')
