(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{310:function(t,a,e){"use strict";e.r(a);var r=e(17),_=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"git介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git介绍"}},[t._v("#")]),t._v(" Git介绍")]),t._v(" "),e("ul",[e("li",[t._v("Git是分布式版本控制系统")]),t._v(" "),e("li",[t._v("集中式VS分布式：\n"),e("ol",[e("li",[t._v("集中式版本控制系统，版本库集中存放在中央服务器，必须要联网才能工作,没有历史版本库。")]),t._v(" "),e("li",[t._v("分布式版本控制系统，版本控制系统没有“中央服务器”，每个人电脑上都是一个完整的版本库。")]),t._v(" "),e("li",[t._v("分布式系统优势：安全性更高，不需要联网，如果中央服务器故障，任何其他一个开发人员的本地都有最新的带有历史记录的版本库。")])])]),t._v(" "),e("li",[t._v("主要区别在于历史版本库的存放，集中式系统历史版本只存在于中央服务器，而分布式控制系统中每个本地库都有历史记录存放。")])]),t._v(" "),e("h2",{attrs:{id:"git命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git命令"}},[t._v("#")]),t._v(" Git命令")]),t._v(" "),e("hr"),t._v(" "),e("h3",{attrs:{id:"git配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git配置"}},[t._v("#")]),t._v(" Git配置")]),t._v(" "),e("pre",[e("code",[t._v('$ git config --global user.name "Your Name"\n$ git config --global user.email "email@example.com"  \n')])]),t._v(" "),e("p",[t._v("注意"),e("code",[t._v("git config")]),t._v("命令的"),e("code",[t._v("--global")]),t._v("参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址。")]),t._v(" "),e("h3",{attrs:{id:"免密提交"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#免密提交"}},[t._v("#")]),t._v(" 免密提交")]),t._v(" "),e("p",[t._v("在 git 文件夹的 config 配置文件修改 url")]),t._v(" "),e("pre",[e("code",[t._v("url = https://gitee.com/chen2114/studyNotes.git\n改成:\nurl = https://账号:密码@gitee.com/chen2114/studyNotes.git\n")])]),t._v(" "),e("h3",{attrs:{id:"创建版本库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建版本库"}},[t._v("#")]),t._v(" 创建版本库")]),t._v(" "),e("h4",{attrs:{id:"在当前目录创建git仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在当前目录创建git仓库"}},[t._v("#")]),t._v(" 在当前目录创建git仓库")]),t._v(" "),e("pre",[e("code",[t._v("$ git init \n")])]),t._v(" "),e("h4",{attrs:{id:"把文件添加到仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#把文件添加到仓库"}},[t._v("#")]),t._v(" 把文件添加到仓库")]),t._v(" "),e("pre",[e("code",[t._v("$ git add <file-name>\n添加全部\n$ git add .\n$ git commit\n添加描述\n$ git commit -m '描述' \n")])]),t._v(" "),e("p",[e("code",[t._v("git add")]),t._v("可以反复多次使用，添加多个文件，"),e("code",[t._v("git commit")]),t._v("可以一次提交很多文件，在"),e("code",[t._v("git commit")]),t._v("命令后添加(-m '····')方便从历史记录里找到修改记录。")]),t._v(" "),e("h3",{attrs:{id:"查看工作区当前状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看工作区当前状态"}},[t._v("#")]),t._v(" 查看工作区当前状态")]),t._v(" "),e("pre",[e("code",[t._v("$ git status \n")])]),t._v(" "),e("h3",{attrs:{id:"查看文件修改内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看文件修改内容"}},[t._v("#")]),t._v(" 查看文件修改内容")]),t._v(" "),e("pre",[e("code",[t._v("$ git diff\n")])]),t._v(" "),e("h3",{attrs:{id:"版本回退"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本回退"}},[t._v("#")]),t._v(" 版本回退")]),t._v(" "),e("pre",[e("code",[t._v("$ git reset -- hard HEAD^\n")])]),t._v(" "),e("p",[t._v("HEAD指向的版本是当前版本，回到上一版本使用以上命令，如果回退上两个版本使用"),e("code",[t._v("HEAD^^")]),t._v("，如果回退版本数较大（如往上50个版本），使用"),e("code",[t._v("HEAD~50")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"回退指定版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回退指定版本"}},[t._v("#")]),t._v(" 回退指定版本")]),t._v(" "),e("pre",[e("code",[t._v("$ git reset --hard commit_id\n")])]),t._v(" "),e("p",[e("code",[t._v("commit_id")]),t._v("是指定版本号，是由SHA1计算出来的数字")]),t._v(" "),e("h3",{attrs:{id:"查看提交历史"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看提交历史"}},[t._v("#")]),t._v(" 查看提交历史")]),t._v(" "),e("pre",[e("code",[t._v("$ git log   \n")])]),t._v(" "),e("h3",{attrs:{id:"查看命令历史"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看命令历史"}},[t._v("#")]),t._v(" 查看命令历史")]),t._v(" "),e("pre",[e("code",[t._v("$ git reflog\n")])]),t._v(" "),e("h3",{attrs:{id:"工作区、暂存区和版本库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工作区、暂存区和版本库"}},[t._v("#")]),t._v(" 工作区、暂存区和版本库")]),t._v(" "),e("blockquote",[e("p",[t._v("git与其他版本控制系统的不同之处就是有暂存区的概念，工作区就是电脑中能看到的目录，工作区有一个隐藏目录[.git]，这是git的版本库。版本库里有许多东西，最重要的是称为stage的暂存区。")])]),t._v(" "),e("p",[t._v("将文件往版本库里添加时是分两步执行的:"),e("br"),t._v(" "),e("ul",[e("li",[t._v("第一步是用"),e("code",[t._v("git add")]),t._v("把文件添加进去，实际上就是把文件修改添加到暂存区。")]),t._v(" "),e("li",[t._v("第二步是用"),e("code",[t._v("git commit")]),t._v("提交修改，实际上就是把暂存区的所有内容提交到当前分支。")])]),t._v("\nGit是如何跟踪修改的，每次修改，如果不用git add到暂存区，那就不会加入到commit中。")]),t._v(" "),e("h3",{attrs:{id:"撤销修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#撤销修改"}},[t._v("#")]),t._v(" 撤销修改")]),t._v(" "),e("h4",{attrs:{id:"丢弃工作区的修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#丢弃工作区的修改"}},[t._v("#")]),t._v(" 丢弃工作区的修改")]),t._v(" "),e("pre",[e("code",[t._v("$ git checkout -- <file>\n")])]),t._v(" "),e("p",[t._v("该命令是将文件在工作去的修改全部撤销，这里有两种情况：\n"),e("ol",[e("li",[t._v("一种是file自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；")]),t._v(" "),e("li",[t._v("一种是file已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。")])]),t._v("\n总之，就是让这个文件回到最近一次git commit或git add时的状态。")]),t._v(" "),e("h4",{attrs:{id:"丢弃暂存区的修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#丢弃暂存区的修改"}},[t._v("#")]),t._v(" 丢弃暂存区的修改")]),t._v(" "),e("p",[t._v("改乱了工作区某个文件的内容同时还添加到了暂存区，想丢弃修改时，先使用命令"),e("code",[t._v("git reset HEAD <file>")]),t._v("，之后按撤销工作区修改进行操作。")]),t._v(" "),e("h4",{attrs:{id:"进行了commit命令提交的修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进行了commit命令提交的修改"}},[t._v("#")]),t._v(" 进行了commit命令提交的修改")]),t._v(" "),e("p",[t._v("已经提交了不合适的修改到版本库时，想要撤销修改，使用版本回退命令，前提是没有推送到远程库.")]),t._v(" "),e("h3",{attrs:{id:"删除文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除文件"}},[t._v("#")]),t._v(" 删除文件")]),t._v(" "),e("pre",[e("code",[t._v("$ git rm <file>\n")])]),t._v(" "),e("p",[t._v("当你要删除文件"),e("code",[t._v("text.txt")]),t._v("的时候，可以采用命令："),e("code",[t._v("rm test.txt")]),t._v("\n这个时候有两种情况："),e("br"),t._v("\n第一种情况:的确要把"),e("code",[t._v("test.txt")]),t._v("删掉，那么可以执行\n"),e("code",[t._v("$ git rm test.txt")]),t._v(" "),e("code",[t._v('$ git commit -m "remove test.txt"')]),t._v("\n此时文件被删除，且删除记录上传本地库。"),e("br"),t._v("\n第二种情况:误删文件，想恢复，这时候还没有"),e("code",[t._v('commit -m "remove test.txt"')]),t._v("，执行"),e("code",[t._v("git checkout test.txt")]),t._v("将文件恢复。"),e("br"),t._v("\n如果执行完"),e("code",[t._v('git commit -m "remove test.txt"')]),t._v("后就不能用"),e("code",[t._v("checkout")]),t._v("恢复了，得用"),e("code",[t._v("git reset --hard HEAD^")]),t._v("，再从版本库写回到工作区。"),e("br"),t._v(" "),e("code",[t._v("git rm")]),t._v("用于删除一个文件。如果一个文件已经被提交到版本库，那么你永远不用担心误删，但是要小心，你只能恢复文件到最新版本，你会丢失最近一次提交后你修改的内容。")]),t._v(" "),e("h3",{attrs:{id:"远程仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库"}},[t._v("#")]),t._v(" 远程仓库")]),t._v(" "),e("h4",{attrs:{id:"创建ssh-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建ssh-key"}},[t._v("#")]),t._v(" 创建SSH Key")]),t._v(" "),e("pre",[e("code",[t._v('$ ssh-keygen -t rsa -C "youremail@example.com"\n')])]),t._v(" "),e("h4",{attrs:{id:"查看远程库信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看远程库信息"}},[t._v("#")]),t._v(" 查看远程库信息")]),t._v(" "),e("pre",[e("code",[t._v("$ git remote -v\n")])]),t._v(" "),e("h4",{attrs:{id:"关联远程仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关联远程仓库"}},[t._v("#")]),t._v(" 关联远程仓库")]),t._v(" "),e("pre",[e("code",[t._v("$ git remote add origin https://github.com/username/repositoryname.git\n")])]),t._v(" "),e("h4",{attrs:{id:"推送到远程仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#推送到远程仓库"}},[t._v("#")]),t._v(" 推送到远程仓库")]),t._v(" "),e("pre",[e("code",[t._v("$ git push -u origin master\n")])]),t._v(" "),e("p",[t._v("-u 表示第一次推送master分支的所有内容，此后，每次本地提交后，只要有必要，就可以使用命令"),e("code",[t._v("$ git push origin master")]),t._v("推送最新修改。")]),t._v(" "),e("h4",{attrs:{id:"推送指定文件-文件夹到指定分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#推送指定文件-文件夹到指定分支"}},[t._v("#")]),t._v(" 推送指定文件/文件夹到指定分支")]),t._v(" "),e("pre",[e("code",[t._v("git subtree push --prefix 文件或文件夹路径 origin 推送到的分支名\n")])]),t._v(" "),e("h4",{attrs:{id:"从远程克隆"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从远程克隆"}},[t._v("#")]),t._v(" 从远程克隆")]),t._v(" "),e("pre",[e("code",[t._v("$ git clone https://github.com/usern/repositoryname.git\n$ git clone -b 分支名 仓库地址\n")])]),t._v(" "),e("p",[e("strong",[t._v("注意:")]),t._v("当你不能使用"),e("code",[t._v("git@github.com")]),t._v("命令来进行推送和克隆，是因为没有安装密钥。添加私秘钥到"),e("code",[t._v("$ ssh-add ~/.ssh/id_rsa")]),e("br"),t._v("\n如果添加失败可以先执行命令"),e("code",[t._v("$ eval `ssh-agent`")]),t._v(" `是～键上的那个符号，然后再次添加私秘钥。"),e("br"),t._v("\n用"),e("code",[t._v("$ ssh -T git@github.com")]),t._v("判断是否绑定成功。如果返回"),e("code",[t._v("successfully")]),t._v("表示成功。")]),t._v(" "),e("h4",{attrs:{id:"删除已经关联的远程库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除已经关联的远程库"}},[t._v("#")]),t._v(" 删除已经关联的远程库")]),t._v(" "),e("pre",[e("code",[t._v("& git remote rm remote-name\n")])]),t._v(" "),e("p",[t._v("若远程库默认名字为origin，则")]),t._v(" "),e("pre",[e("code",[t._v("$ git remote rm origin\n")])]),t._v(" "),e("h4",{attrs:{id:"本地库既关联github，又关联码云"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地库既关联github，又关联码云"}},[t._v("#")]),t._v(" 本地库既关联GitHub，又关联码云")]),t._v(" "),e("p",[t._v("如原来已经关联了默认名origin的GitHub")]),t._v(" "),e("p",[t._v("1.先删除已关联的名为origin的远程库：")]),t._v(" "),e("pre",[e("code",[t._v("$ git remote rm origin\n")])]),t._v(" "),e("p",[t._v("2.然后，先关联GitHub的远程库：")]),t._v(" "),e("pre",[e("code",[t._v("$ git remote add github git@github.com:username/repositoryname.git\n")])]),t._v(" "),e("p",[t._v("3.接着，再关联码云的远程库：")]),t._v(" "),e("pre",[e("code",[t._v("$ git remote add gitee git@gitee.com:username/repositoryname.git\n")])]),t._v(" "),e("p",[t._v("同样注意，远程库的名称叫gitee，不叫origin了")]),t._v(" "),e("p",[e("strong",[t._v("注意")]),t._v("多个关联后以上所以命令含的origin都换成相应的github或gitee")]),t._v(" "),e("p",[t._v("如果要推送到GitHub，使用命令：")]),t._v(" "),e("pre",[e("code",[t._v("$ git push github master\n")])]),t._v(" "),e("p",[t._v("如果要推送到码云，使用命令：")]),t._v(" "),e("pre",[e("code",[t._v("$ git push gitee master\n")])]),t._v(" "),e("h3",{attrs:{id:"分支管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支管理"}},[t._v("#")]),t._v(" 分支管理")]),t._v(" "),e("h4",{attrs:{id:"查看分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看分支"}},[t._v("#")]),t._v(" 查看分支")]),t._v(" "),e("pre",[e("code",[t._v("$ git branch\n")])]),t._v(" "),e("h4",{attrs:{id:"创建分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建分支"}},[t._v("#")]),t._v(" 创建分支")]),t._v(" "),e("pre",[e("code",[t._v("$ git branch <name>\n")])]),t._v(" "),e("h4",{attrs:{id:"切换分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#切换分支"}},[t._v("#")]),t._v(" 切换分支")]),t._v(" "),e("pre",[e("code",[t._v("$　git checkout <name>\n")])]),t._v(" "),e("h4",{attrs:{id:"创建-切换分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建-切换分支"}},[t._v("#")]),t._v(" 创建+切换分支")]),t._v(" "),e("pre",[e("code",[t._v("$ git checkout -b <name>\n")])]),t._v(" "),e("h4",{attrs:{id:"创建-切换分支并从远处拉取该分支代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建-切换分支并从远处拉取该分支代码"}},[t._v("#")]),t._v(" 创建+切换分支并从远处拉取该分支代码")]),t._v(" "),e("pre",[e("code",[t._v("$ git checkout -b <name> origin/<name>\n")])]),t._v(" "),e("h4",{attrs:{id:"将指定分支的指定文件合并到当前所在分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将指定分支的指定文件合并到当前所在分支"}},[t._v("#")]),t._v(" 将指定分支的指定文件合并到当前所在分支")]),t._v(" "),e("pre",[e("code",[t._v("$ git checkout 指定分支名称 指定文件/文件夹路径\n")])]),t._v(" "),e("h4",{attrs:{id:"给分支重命名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#给分支重命名"}},[t._v("#")]),t._v(" 给分支重命名")]),t._v(" "),e("pre",[e("code",[t._v("git branch -m oldName newName\n")])]),t._v(" "),e("h4",{attrs:{id:"合并某分支到当前name分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#合并某分支到当前name分支"}},[t._v("#")]),t._v(" 合并某分支到当前name分支")]),t._v(" "),e("pre",[e("code",[t._v("$ git merge <name>\n")])]),t._v(" "),e("h3",{attrs:{id:"将某分支指定文件或文件夹替换当前分支的相应文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将某分支指定文件或文件夹替换当前分支的相应文件"}},[t._v("#")]),t._v(" 将某分支指定文件或文件夹替换当前分支的相应文件")]),t._v(" "),e("pre",[e("code",[t._v("$ git checkout <name> <filePath>\n")])]),t._v(" "),e("h4",{attrs:{id:"删除分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除分支"}},[t._v("#")]),t._v(" 删除分支")]),t._v(" "),e("pre",[e("code",[t._v("$ git branch -d <name>\n")])]),t._v(" "),e("h4",{attrs:{id:"强行删除分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强行删除分支"}},[t._v("#")]),t._v(" 强行删除分支")]),t._v(" "),e("pre",[e("code",[t._v("$ git branch -D <name>\n")])]),t._v(" "),e("p",[t._v("如果要丢弃一个没有被合并过的分支，可以通过以上命令来实现。")]),t._v(" "),e("h4",{attrs:{id:"查看分支合并图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看分支合并图"}},[t._v("#")]),t._v(" 查看分支合并图")]),t._v(" "),e("pre",[e("code",[t._v("$ git log --graph\n")])]),t._v(" "),e("p",[t._v("当Git无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。\n用"),e("code",[t._v("git log --graph")]),t._v("命令可以看到分支合并图。")]),t._v(" "),e("h4",{attrs:{id:"普通模式合并分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#普通模式合并分支"}},[t._v("#")]),t._v(" 普通模式合并分支")]),t._v(" "),e("pre",[e("code",[t._v('$ git merge --no-ff -m "description" <branchname>\n')])]),t._v(" "),e("p",[t._v("通常进行分支合并时，git会使用Fast forward模式，删除分支后，分支信息会丢失，可以使用"),e("code",[t._v("--on-ff")]),t._v("参数，禁用Fast forward，需要时加上一个"),e("code",[t._v("-m")]),t._v("参数把commit描述写进去。这样进行合并后的历史有分支，能看出来曾经做过合并。")]),t._v(" "),e("h4",{attrs:{id:"保存工作现场"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#保存工作现场"}},[t._v("#")]),t._v(" 保存工作现场")]),t._v(" "),e("pre",[e("code",[t._v("$ git stash  \n")])]),t._v(" "),e("h4",{attrs:{id:"查看工作现场"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看工作现场"}},[t._v("#")]),t._v(" 查看工作现场")]),t._v(" "),e("pre",[e("code",[t._v("$ git stash list\n")])]),t._v(" "),e("h4",{attrs:{id:"恢复工作现场"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#恢复工作现场"}},[t._v("#")]),t._v(" 恢复工作现场")]),t._v(" "),e("pre",[e("code",[t._v("$ git stash pop\n")])]),t._v(" "),e("h4",{attrs:{id:"在新建分支中修改bug时的推荐操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在新建分支中修改bug时的推荐操作"}},[t._v("#")]),t._v(" 在新建分支中修改bug时的推荐操作")]),t._v(" "),e("p",[t._v("转自"),e("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000",target:"_blank",rel:"noopener noreferrer"}},[t._v("教程"),e("OutboundLink")],1),t._v("讨论区“我有疫苗”用户的"),e("a",{attrs:{href:"https://www.liaoxuefeng.com/discuss/001409195939432748a2c9fae3846bc98b3c2a547fa321b000/0015444271534391cee28ca27ed474d97b30b2b0ad6b534000",target:"_blank",rel:"noopener noreferrer"}},[t._v("评论"),e("OutboundLink")],1),t._v(" "),e("pre",[t._v("首先理清两个概念：\n未被追踪的文件:指的是新建的文件或文件夹且还没加入到暂存区(新建的还没有被git add)\n未加入到暂存区的文件:指的是已经被追踪过，但是没有加入到暂存区(已经执行过git add/commit的但是这次修改后还没有git add)\n举例:\nreadme.md  已经被git add/git commit过，但是呢,我这次只是修改了,而且没有修改完,不能commit;\ntest    新建的文件夹,没有被git add/git commit;\n有个bug需要处理,这时候我需要切换分支，去处理bug\n正确的步骤:\ngit add test（让git去追踪这个新文件）\ngit stash保留现场\n如果不执行这两个命令，那么在修改BUG完成之后git status，就会发现readme.md没有添加到暂存区，同时又多了个test文件,\n但是自己的readme.md没有完成，万万不可以提交，这样导致bug的修改代码也提交不了。\n所以需要git stash，这样在提交修改bug代码的时候 ，就不会看见readme.md 和 test。可以安心提交修改bug的代码。\n")])]),t._v(" "),e("h4",{attrs:{id:"从本地推送分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从本地推送分支"}},[t._v("#")]),t._v(" 从本地推送分支")]),t._v(" "),e("pre",[e("code",[t._v("$ git push origin branch-name\n")])]),t._v(" "),e("p",[t._v("如果推送失败，先用git pull抓取远程的新提交；")]),t._v(" "),e("h4",{attrs:{id:"在本地创建和远程分支对应的分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在本地创建和远程分支对应的分支"}},[t._v("#")]),t._v(" 在本地创建和远程分支对应的分支")]),t._v(" "),e("pre",[e("code",[t._v("$ git checkout -b branch-name origin/branch-name\n")])]),t._v(" "),e("p",[t._v("本地和远程分支的名称最好一致；")]),t._v(" "),e("h4",{attrs:{id:"建立本地分支和远程分支的关联"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#建立本地分支和远程分支的关联"}},[t._v("#")]),t._v(" 建立本地分支和远程分支的关联")]),t._v(" "),e("pre",[e("code",[t._v("$ git branch --set-upstream branch-name origin/branch-name\n")])]),t._v(" "),e("h4",{attrs:{id:"从远程抓取分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从远程抓取分支"}},[t._v("#")]),t._v(" 从远程抓取分支")]),t._v(" "),e("pre",[e("code",[t._v("$ git pull\n")])]),t._v(" "),e("p",[t._v("如果有冲突，要先处理冲突。")]),t._v(" "),e("h3",{attrs:{id:"标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标签"}},[t._v("#")]),t._v(" 标签")]),t._v(" "),e("p",[t._v("git标签是版本库的快照，实际就是某个commit的指针，如果要找到某次版本的commit号，数字复杂不好找，使用tag取一个易于记住和理解的名字就方便许多，它跟某个commit绑在一起。（类似于域名和IP地址的关系？）")]),t._v(" "),e("h4",{attrs:{id:"新建标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建标签"}},[t._v("#")]),t._v(" 新建标签")]),t._v(" "),e("pre",[e("code",[t._v("$ git tag <tagname> \n")])]),t._v(" "),e("p",[t._v("默认为HEAD，也可以指定一个commit id。")]),t._v(" "),e("h4",{attrs:{id:"查看标签信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看标签信息"}},[t._v("#")]),t._v(" 查看标签信息")]),t._v(" "),e("pre",[e("code",[t._v("$ git show <tagname>\n")])]),t._v(" "),e("h4",{attrs:{id:"创建带有说明的标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建带有说明的标签"}},[t._v("#")]),t._v(" 创建带有说明的标签")]),t._v(" "),e("pre",[e("code",[t._v("$ git tag -a <tagname> -m <description> <branchname> or commit_id\n")])]),t._v(" "),e("p",[t._v("用-a指定标签名，-m指定说明文字")]),t._v(" "),e("h4",{attrs:{id:"查看所有标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看所有标签"}},[t._v("#")]),t._v(" 查看所有标签")]),t._v(" "),e("pre",[e("code",[t._v("$ git tag\n")])]),t._v(" "),e("h4",{attrs:{id:"推送某个标签到远程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#推送某个标签到远程"}},[t._v("#")]),t._v(" 推送某个标签到远程")]),t._v(" "),e("pre",[e("code",[t._v("$ git push origin <tagname>\n")])]),t._v(" "),e("h4",{attrs:{id:"一次性推送全部尚未推送到远程的本地标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一次性推送全部尚未推送到远程的本地标签"}},[t._v("#")]),t._v(" 一次性推送全部尚未推送到远程的本地标签")]),t._v(" "),e("pre",[e("code",[t._v("$ git push origin --tags\n")])]),t._v(" "),e("h4",{attrs:{id:"删除一个本地标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除一个本地标签"}},[t._v("#")]),t._v(" 删除一个本地标签")]),t._v(" "),e("pre",[e("code",[t._v("$ git tag -d <tagname>\n")])]),t._v(" "),e("h4",{attrs:{id:"删除一个远程标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除一个远程标签"}},[t._v("#")]),t._v(" 删除一个远程标签")]),t._v(" "),e("pre",[e("code",[t._v("$ git push origin :refs/tags/<tagname>\n")])])])}),[],!1,null,null,null);a.default=_.exports}}]);