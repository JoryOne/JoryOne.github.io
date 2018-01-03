# MarkDown语法

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

## 图片
```
![](http://static.jory.wang/assets/img/dalian-donggang.png)
```
![](http://static.jory.wang/assets/img/dalian-donggang.png)
> 图为：大连 东港国际会议中心 - 2015/10/10

![](http://static.jory.wang/assets/img/dalian-snowLg.png)
> 图为：大连理工大学 - 2015/11/22

*目录 (Table of Contents)*

# Heading 1 link [Heading link](http://jory.wang)
## Heading 2 link [Heading link](https://github.com/pandao/editor.md "Heading link")
### Heading 3 link [Heading link](https://github.com/pandao/editor.md "Heading link")
#### Heading 4 link [Heading link](https://github.com/pandao/editor.md "Heading link") Heading link [Heading link](https://github.com/pandao/editor.md "Heading link")
##### Heading 5 link [Heading link](https://github.com/pandao/editor.md "Heading link")
###### Heading 6 link [Heading link](https://github.com/pandao/editor.md "Heading link")

#### 标题（用底线的形式）Heading (underline)

This is an H1
=============

This is an H2
-------------

### 字符效果和横线等
                
----

~~删除线~~
*斜体字* _斜体字_
**粗体**  __粗体__
***粗斜体*** ___粗斜体___

**缩写(同HTML的abbr标签)**

### 引用 Blockquotes

> 引用文本 Blockquotes

引用的行内混合 Blockquotes
                    
> 引用：如果想要插入空白换行`即<br />标签`，在插入处先键入两个以上的空格然后回车即可，[普通链接](http://jory.wang)。

### 锚点与链接 Links

[普通链接](http://jory.wang)

[普通链接带标题](http://jory.wang "普通链接带标题")

直接链接：<http://jory.wang>

[锚点链接][anchor-id] 

[anchor-id]: http://jory.wang


### 多语言代码高亮 Codes

#### 行内代码 Inline code

执行命令：`npm install`

#### 缩进风格

即缩进四个空格，也做为实现类似`<pre>`预格式化文本(Preformatted Text)的功能。

    <?php
        echo "Hello world!";
    ?>
    
预格式化文本：

    | First Header  | Second Header |
    | ------------- | ------------- |
    | Content Cell  | Content Cell  |
    | Content Cell  | Content Cell  |

#### JS代码　

```javascript
    function test(){
        console.log("Hello world!");
    }
```

#### HTML代码 HTML codes

```html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
        <title>Hello world!</title>
    </head>
    <body>
        <h1>Hello world!</h1>
    </body>
</html>
```
> * 列表1
> * 列表2
> * 列表3
> * 列表4

###  绘制表格

| 项目        | 价格   |  数量  |
| --------   | -----:  | :----:  |
| 计算机     | \$1600 |   5     |
| 手机        |   \$12   |   12   |
| 管线        |    \$1    |  234  |