# Git 指令笔记

## git branch 相关指令

```shell
# 新建并切换到本地分支，并和远程分支关联
git checkout -b dev origin/dev

# 本地分支和远程分支关联
git branch -u origin/dev
git branch --set-upstream-to origin/dev
git branch --track dev origin/dev

# 看本地分支及追踪的分支
git branch -vv

# 将dev合并到当前分支
git merge dev

# 将当前分支的base分支变成dev
git rebase dev

# 删除分支
# -d => --delete, -D => --delete --force
git branch (-d | -D) dev

# 重命名分支
git branch (-m | -M) <oldbranch> <newbranch>
```

## git flow 相关指令

git-flow 备忘清单: [http://danielkummer.github.io/git-flow-cheatsheet/index.zh_CN.html](http://danielkummer.github.io/git-flow-cheatsheet/index.zh_CN.html)

```shell
# 创建一个git项目，并创建master和develop分支
git flow init
# 初始的配置保持默认即可，这里保持分支命名规范与上面相同
Initialized empty Git repository in /home/ygr/codes/github/gitflow2/.git/
No branches exist yet. Base branches must be created now.
Branch name for production releases: [master]
Branch name for "next release" development: [develop]

How to name your supporting branch prefixes?
Feature branches? [feature/]
Bugfix branches? [bugfix/]
Release branches? [release/]
Hotfix branches? [hotfix/]
Support branches? [support/]
Version tag prefix? []
Hooks and filters directory? [/home/ygr/codes/github/gitflow2/.git/hooks]


# 在develop的基础上创建功能分支feature/baseinfo并切换过去
git flow feature start baseinfo
# =========上面指令等价于===========
# git checkout -b feature/baseinfo develop
# ================================

# ... 开发功能 feature/baseinfo
# feature/baseinfo 开发完成
git flow feature finish baseinfo
# =========上面指令等价于===========
# git checkout develop
# git merge --no-ff feature/baseinfo
# git branch -d feature/baseinfo
# 如果远程仓库有feature/baseinfo，则会删除该远程分支
# git push origin :feature/baseinfo
# ================================
git push origin develop

# 若需要将feature分支发送到远程仓库，可以使用如下指令
git flow feature publish baseinfo
# =========上面指令等价于===========
# git checkout feature/baseinfo
# git push origin feature/baseinfo
# ================================

git flow hotfix start v0.1.1
# =========上面指令等价于===========
# git checkout -b hotfix/v0.1.1 master
# ================================

git push origin hotfix/v0.1.1
git flow hotfix finish v0.1.1
# =========上面指令等价于===========
# git checkout master
# git merge --no-ff hotfix/v0.1.1
# git tag v0.1.1# git checkout develop
# git merge --no-ff hotfix/v0.1.1
# git branch -d hotfix/v0.1.1
# git push origin :hotfix/v0.1.1
# ================================

git checkout mastergit push origin mastergit push origin v0.1.1
git checkout developgit push origin develop
```
