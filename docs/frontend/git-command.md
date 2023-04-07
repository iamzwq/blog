# Git 常用指令

## git init

```bash
# 创建新的 Git 仓库，在当前路径下生成 .git 目录
git init
```

## git remote

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

## git branch

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
git branch -u origin/dev
git branch --set-upstream-to origin/dev
git branch --track dev origin/dev

# 重命名分支
git branch (-m | -M) <oldbranch> <newbranch>
# 删除远程分支
git push --delete origin <branchName>
git push origin <newBranchName>
# 删除分支
# -d => --delete, -D => --delete --force
git branch (-d | -D) dev

# 将dev合并到当前分支
git merge dev

# 将当前分支的base分支变成dev
git rebase dev
```

## git tag

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

## git commit

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

## git push

```bash
# 推送分支
git push <remoteName> <branchName>
# 推送分支并建立关联关系
git push --set-upstream <remoteName> <branchName> 
```

## git pull

```bash
# 从远程仓库拉取代码合并到本地，等同于 git fetch && git merge
git pull
# 使用rebase的模式进行合并
git pull --rebase
```

## git fetch

```bash
# 从指定远程仓库拉取当前分支代码
git fetch <remoteName>
# 获取所有远程仓库所有分支的更新
git fetch --all
```

## git merge

```bash
# 将其他分支的内容合并到当前分支中
git merge <branchName>
```

## git rebase

```bash
# 将当前分支变基到 master 分支上
git rebase master


# 交互式变基
# 基于 commitId 进行 rebase
git rebase -i <commitId>



# 修改历史push的commit信息
git rebase -i commitId, commitId待修改的前一个
# 键入 i 进入输入模式
# 可用键盘上下键转到描述所在的那一行，然后进行修改
# 将要修改的那一条commit的 pick 改为 edit
# 修改完成后，按下 Esc键退出编辑模式
# 再键入 :wq 回车退出并保存修改，完成提交。
git commit --amend
git rebase --continue
git push -f
```

## git reset

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

## git stash

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

## git log

```bash
# 查看所有 commit 记录
git log
# 搜索 commit msg 有瀑布流关键字的 记录
git  log  --grep
```

## git修改commit信息

1. 刚刚commit，还没有push，使用git commit --amend;


## git flow

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
