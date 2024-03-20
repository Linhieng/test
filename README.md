# 测试 push 功能

想要 push 操作，核心在于：

- 添加 content write 权限

  在 yaml 中添加

  ```yaml
  permissions:
    contents: write
  ```

- 创建并添加 KEY

  在仓库的 Settings -> Environments -> New environment 中新建一个环境变量，名为 PUSH_KEY
  创建后使用默认配置就可以了，相关配置有需要时再去改。

  在 yaml 部署中，添加刚刚创建的 KEY，名称和刚刚创建的名称一致

  ```yaml
  env:
    github_token: ${{ secrets.PUSH_KEY }}
  ```

此外，在搜索过程中找到的一些其他无用解决方案（仅仅代表对当前需求无用）

- Settings -> Actions -> General -> Workflow permissions -> 勾选为 Read and write permissions
- actions/checkout@v3
