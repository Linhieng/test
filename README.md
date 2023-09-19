# Github 工作流

该仓库是用来练习 Github 工作流的，其中的 commit 历史记录没有任意意义，有价值的东西最终会抽离到笔记中。

[Github Actions 官方文档](https://docs.github.com/en/actions/quickstart)

碎碎记：

-   `.github\workflows` 中的 yml 文件会被自动认为是 actions
-   actions 中想要对仓库进行一些操作，比如 commit、push 时，记得[配置 `permissions` 权限](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#permissions)。

TODO:

-   [ ] `@actions/github` 案例
-   [ ] 制作自己的 actions，可参考 [尤雨溪的 release-tag](https://github1s.com/yyx990803/release-tag/blob/HEAD/action.yml)
-   [ ] 学习 Github 官方 [actions](https://github.com/actions)

已实现：

-   [x] 需求：主分支有新的 push 时，自动将 dist 中的文件更新到 page 分支上，page 分支将用于显示 Github page 页面。
