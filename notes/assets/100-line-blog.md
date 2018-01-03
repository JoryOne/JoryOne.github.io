# 100行代码能做什么

> 100行代码能做什么，这要从一个很长很长的故事说起

有了要搭建一个自己的笔记网站想法后，查阅了一些主流的方案，包括`Hexo`，`WordPress`，`Jeklly`：

> * WordPress 需要有服务器，配置比较复杂，架子过于重，第一个被淘汰
> * Jeky基于Ruby实现，安装Jeky需要搭建Ruby环境，也不够简单
> * Hexo是一个很不错的静态博客架子，可以基于原生的主题高度优化自己的博客，官网也可以查到各种免费炫酷的主题，Hexo+GitPage方案简直不要太爽


创建GitPage工程，到选择Hexo主题，发布一篇文章，编译打包，一天搞定，确实很方便，然而这个过程还是觉着碰到了很多麻烦，比如新建文章、发布博客流程还是比较繁琐。

即使Hexo的静态网站已经很轻，对于一个资深强迫症的我还是无法接受，既然都是使用Markdown写文章，问什么还要编译呢，现在手机性能这么强，前段渲染也不会有什么问题，当然这些想法都是基于`markdown-it.js`，能够把Markdown格式的内容转换成html，然后动态插入到Dom中。

### 目录页面
   简单粗暴-直接使用markdown文档，建一个sumary.md,这个想法来源于GitBook
### 处理目录与文章的内容切换
   写几个简单的Hash处理方法
#### Http 请求部分
```
    function httpGet( url, callback ){
        var request = new XMLHttpRequest();
        request.open( "GET", url );
        request.onreadystatechange = function(){
            if( request.readyState !== 4 ) return;
            if( request.status === 200 ){
                document.title = request.responseText.trim().split('\n')[0].replace('#','');
                callback( request.responseText );
            }
            else{
                callback( null );
            }
        }
        request.send( null );
    }
```
#### 通过Hash实现内容的替换
```
    function goHash(hash){
        var url = '/notes/assets/'+ (hash || "sumary") + '.md';
        httpGet(url, function(rsp){
            if(rsp){
                var md = window.markdownit();
                var html = md.render(rsp);
                document.getElementById("md_result").innerHTML = html;
            }
            else{
                window.location.hash = "";
            }
        });
    };

    function handleHash(){
      goHash(window.location.hash.replace('#',''))
    };  
 
    window.onhashchange = function(){
      handleHash();
    };
```
#### Markdown解析lib库
[markdown-it](https://markdown-it.github.io/)

#### 样式调整
直接引入[GitHub Markdown CSS](https://sindresorhus.com/github-markdown-css/)

#### 写文章
1. 手动创建一个`.md`格式文件
2. 在目录sumary.md添加基本内容介绍
3. 使用带有本地MD预览功能的编辑器，比如VS Code\Sublime等
