# git 常见问题

### 1. 撤回 commit

撤回 commit 使用到 git reset 指令

一般我们在使用 reset 命令时，git reset --hard 会被提及的比较多，它能让 commit 记录强制回溯到某一个节点。而 git reset --soft 的作用正如其名，--soft (柔软的) 除了回溯节点外，还会保留节点的修改内容。

```bash
# 恢复最近一次 commit
git reset --soft HEAD^

git reset --soft <commitId>
```

以上说的是还未 push 的commit。对于已经 push 的 commit，也可以使用该命令，不过再次 push 时，由于远程分支和本地分支有差异，需要强制推送 git push -f 来覆盖被 reset 的 commit。

### 2. 修改 commit

- 刚刚commit，还没有push，使用`git commit --amend`，这个命令会**合并提交到上一次的commit里** <https://zhuanlan.zhihu.com/p/100243017>
- 对于已经 push 到远程仓库的，需要使用 git rebase -i 交互式变基

```bash
# 基于 commitId 进行 rebase
git rebase -i <commitId>

# 如果要修改第一次commit信息，则执行
git rebase -i --root
```

具体步骤如下:

1.  git rebase -i [<commitId> | --root]
2.  键入 i 进入输入模式
3.  可用键盘上下键转到描述所在的那一行
4.  将要修改的那一条commit的 pick 改为 edit
5.  按下 Esc键退出编辑模式
6.  再键入 :wq 回车退出
7.  执行git commit --amend，修改commit信息
8.  执行git rebase --continue 结束rebase
9.  git push -f，强制push上去

### 3. 本地分支和远程分支关联

首先可以通过 `git branch -vv`  查看本地分支及追踪的分支

-   在创建本地分支的时候就关联远程分支：`git checkout -b dev origin/dev`
-   `git branch (--set-upstream-to=<upstream> | -u <upstream>) [<branchname>]`
-   `git branch [--set-upstream | --track | --no-track] <branchname>`
-   如果分支只有本地有，远程仓库没有，可以使用这个：`git push [-u | --set-upstream] <remoteName> <branchName>`，会在远程仓库新建一个分支并和本地分支关联

## git 常用指令

### git remote

```bash
# 查看连接的远程仓库地址
git remote -v
# 添加远程地址
git remote add origin <url>
# 修改远程地址
git remote set-url origin <newUrl>
# 删除远程仓库连接
git remote rm origin
# 查看远程仓库的分支
git remote show origin
# 本地删除远程不存在的分支
git remote prune origin
```

### git branch

<https://www.yiibai.com/git/git_branch.html>

```bash
# 切换分支
git checkout <branchName>
# 新建分支并切换到该分支
git checkout -b <branchName>
# 创建且切换到本地分支，并和远程分支关联
git checkout -b dev origin/dev

# 查看本地分支及追踪的分支
git branch -vv
# 关联远程分支
git branch (--set-upstream-to=<upstream> | -u <upstream>) [<branchname>]
git branch [--set-upstream | --track | --no-track] <branchname>
# 重命名分支
git branch (-m | -M) <oldbranch> <newbranch>
# 删除分支 -d => --delete, -D => --delete --force
git branch (-d | -D) <branchName>

# 将dev合并到当前分支
git merge dev

# 将当前分支的base分支变成dev
git rebase dev
```

### git tag

```bash
# 新建标签
git tag [tagName]
# 查看标签列表
git tag
# 删除标签
git tag -d [tagName]
# 推送标签到远程仓库
git push origin [tagName]
```

### git commit

```bash
# 将暂存区文件添加到本地仓库，并记录下备注
git commit -m 'xxx'
# 跳过 husky hooks 设置的规则校验
git commit -m 'xxx' -n
# 将文件添加到暂存区，再添加到本地仓库，并记录下备注 = git add + git commit
git commit -am 'xxx'

# 修改commit信息
git commit --amend
```

<https://zhuanlan.zhihu.com/p/100243017>

### git push

```bash
# git push [--all | --mirror | --tags] [--follow-tags] [--atomic] [-n | --dry-run]
#          [--receive-pack=<git-receive-pack>] [--repo=<repository>] [-f | --force]
#          [-d | --delete] [--prune] [-v | --verbose] [-u | --set-upstream]
#          [--push-option=<string>] [--[no-]signed|--sign=(true|false|if-asked)] 
#          [--force-with-lease[=<refname>[:<expect>]]] 
#          [--no-verify] [<repository> [<refspec>…]] 
# 推送分支
git push <remoteName> <branchName>
# 推送分支并建立关联关系
git push [-u | --set-upstream] <remoteName> <branchName>
# 删除远程分支
git push [-d | --delete] <remoteName> <branchName>
```

### git pull

```bash
# 从远程仓库拉取代码合并到本地，等同于 git fetch && git merge
git pull
# 使用rebase的模式进行合并
git pull --rebase
```

### git merge

```bash
# 将其他分支的内容合并到当前分支中
git merge <branchName>
```

### git rebase

```bash
# 将当前分支变基到 master 分支上
git rebase master
```

### git reset

```bash
# 回退所有内容到上一个版本
git reset HEAD^ 
# 回退某文件到上一个版本
git reset HEAD^ [filename]
# 回退所有内容到指定版本
git reset [commitId]
# 回退本地仓库到上一个版本
git reset --soft HEAD~1
# 回退本地仓库到上一个版本，并删除工作区所有未提交的修改内容
git reset --hard HEAD~1
```

### git stash

```bash
# 暂存文件
git stash
# 暂存文件，添加备注
git stash save 'aa'
# 应用最近一次暂存文件，并删除暂存记录
git stash pop
# 应用最近一次暂存，但不删除该暂存记录
git stash apply
# 应用某一次暂存，但不删除该暂存记录；
git stash apply stash@{第几次暂存的代码，例如0}
# 暂存记录
git stash list
# 删除所有暂存记录
git stash clear
```

### git flow

<https://juejin.cn/post/6982166300806086692#heading-18>

```bash
git flow init
     
# Branch name for production releases: [master]
# Branch name for "next release" development: [develop]
# How to name your supporting branch prefixes?
# Feature branches? [feature/] 
# Bugfix branches? [bugfix/] 
# Release branches? [release/] 
# Hotfix branches? [hotfix/] 
# Support branches? [support/] 
# Version tag prefix? []

# 基于你本地的develop分支创建功能分支feature/baseinfo并切换过去
git flow feature start baseinfo
# =========上面指令等价于===========
# git checkout -b feature/baseinfo develop
# ==================================

# 若需要将feature分支发送到远程仓库，可以使用如下指令
git flow feature publish baseinfo
# =========上面指令等价于===========
# git checkout feature/baseinfo
# git push origin feature/baseinfo
# ==================================
```

######
