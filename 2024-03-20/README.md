# 测试 push 功能

进行 push 操作时，如果出现下面报错：

```
remote: Permission to Linhieng/test-actions.git denied to github-actions[bot].
fatal: unable to access 'https://github.com/Linhieng/test-actions/': The requested URL returned error: 403
Error: Process completed with exit code 128.
```

则需要检查下面两项内容：

1. 添加 content write 权限

    在 yaml 中添加

    ```yaml
    permissions:
      contents: write
    ```

1. 创建并添加 KEY

    在仓库的 Settings -> Environments -> New environment 中新建一个环境变量，名为 PUSH_KEY
    创建后使用默认配置就可以了，相关配置有需要时再去改。

    在 yaml 部署中，添加刚刚创建的 KEY，名称和刚刚创建的名称一致

    ```yaml
    env:
      github_token: ${{ secrets.PUSH_KEY }}
    ```

此外，在搜索过程中找到的一些其他无用解决方案，无用指的时和我们的核心需求不太相关！

- Settings -> Actions -> General -> Workflow permissions -> 勾选为 Read and write permissions
- actions/checkout 版本升级为 @3

然后就是只提取 dist 文件夹的方式了：

```sh
node bundle.js
# 首先生成 dist 文件

git config user.name github-action
git config user.email github-action@github.com
# 要 push 时，需要提供一个用户，这里随便写成一个就可以了

git rm -r --ignore-unmatch -- *
# 先将所有被追踪的文件删除，这里的 * 并不会匹配 . 开头的文件
git rm -r .github/*
# 然后继续删除 .github 文件夹
mv dist/* .
# 此时目录中只剩下 dist 文件夹，将内容全部提出来

# 然后就是正常的流程了：
git add .
git commit -m "github action auto push"
git switch -c dist
git push -f origin dist
```
