1. 骨架屏
2. 完善 axios 封装
3. 日历实现拖拽生成自定义日程
4. 冻结和函数式优化
5. 后续将 icon 改为本地 png 或 svg，前者先使用 tinypng 压缩
6. 配置 babel 和 optimization
7. 切面处理

   - 所有的组件必须解耦即单个组件负责完自身所有的数据和逻辑，包括对于 utils 的导入
   - page 仅用于展示而不负责任何的逻辑处理，但由于 asyncData 不存在与 component 内所以可以在 fetch 内保存在 vuex 内或在 component 内的 created 进行 http 请求
   - 并非所有的组件都采用懒加载如 login 内的输入框

8. 对于游客，进入首页展示 dialog
9. 对于设置了 overflow 类的 card 等组件先看能否只通过 vuetify 实现自定义滚动条否采用 overlayscrollbar 或 vuebar
10. 进行 keep-alive 暂存状态
11. 通知系统
    - 新成员的 register 的审核
    - 有关自己组的成员变动
    - 他人发送通知
    - 新任务
    - 当日日程
12. 注意子路由的定义：游客则子路由为非 office，否则为 board
13. 由于 vuetify 和 nuxt 的限制目前整个项目仍基于 vue2 即函数式组件和 v-once 仍存在一定的优化效果
14. 页面安排：
    - user
    - project
    - schedule
    - office
    - login
      - recruit
      - register
      - login
    - release
      - project
      - schedule
15. 浮动按钮第一次点击没有反应，第二次才行
