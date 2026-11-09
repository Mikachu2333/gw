# Find.MatchControl

如果在从右向左语言的文档中，查找操作按照匹配双向控制字符来匹配文字，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**MatchControl**

express   一个代表 **Find** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将当前的查找操作设定为匹配双向控制字符。*/
function test() {
    Selection.Find.MatchControl = true
}
```


```JavaScript
/*此示例显示活动文档的主文档文章的搜索选项中是否匹配双向控制字符。*/
function test() {
    alert(ActiveDocument.Content.Find.MatchControl)
}
```
