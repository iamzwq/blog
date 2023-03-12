# 乱七八蕉

## Git(记不住的一些git命令，我TM给你记下来)

#### git branch
- git checkout -b dev origin/dev
- git branch -u origin/dev
- git branch --set-upstream-to origin/dev
- git branch --track dev origin/dev
- git checkout dev
- git branch -vv  查看本地分支及追踪的分支
- git fetch origin 远程分支名:本地分支名（自动切换到该本地分支，需要手动checkout）
