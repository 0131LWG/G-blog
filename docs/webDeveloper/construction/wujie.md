# wujie-router

## 一. 需要解决的事情
1. 需要考虑多种运行模式
2. 需要考虑是history还是hash

### 1.1 history
由主应用中注入的jump函数跳转 window.$wujie?.props.jump({ path: "/pathB" });
保活的运行模式需要WujieVue.bus.$emit和WujieVue.bus.$on


## 二. 方案可行性

1. 能否使用 router 或者其他的参数来统一进行跳转（统一方式）

## 三. 实践
