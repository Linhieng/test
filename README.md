# Github page

在 settings 中开启设置 page 部署方式为 Github actions，然后借助 `actions/upload-pages-artifact@v1` 和 `actions/deploy-pages@v1` 创建 workflows 就可以部署了。

配置域名：

- 在域名解析中添加一条解析，记录类型为 CNAME，记录值是 `linhieng.github.io`，主机记录为 `test`
- 在 Github 仓库的 settings - page 中添加对应的子域 `test.oonoo.cn`
