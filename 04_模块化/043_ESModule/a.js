// 导出方式一：
export const user = 'Leslie'
export const age = 24
export const printMsg = (msg) => {
  console.log(msg)
}


// 导出方式二：
/*
  const user = 'Leslie'
  const age = 24
  const printMsg = (msg) => {
    console.log(msg)
  }
  export { user, age, printMsg }
*/


// 导出方式三：
/*
  const user = 'Leslie'
  const age = 24
  const printMsg = (msg) => {
    console.log(msg)
  }
  export {
    user as ModuleAUser,
    age as ModuleAAge,
    printMsg as ModuleAPrintMsg
  }
*/
