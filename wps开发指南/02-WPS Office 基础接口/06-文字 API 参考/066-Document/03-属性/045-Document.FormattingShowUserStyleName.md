# Document.FormattingShowUserStyleName

返回或设置 **Boolean** 值，该值表示是否显示用户定义的样式。可读/写。



## 语法

express.**FormattingShowUserStyleName**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 说明


当存在可选的用户定义样式时，将 **FormattingShowUserStyleName** 属性设置为 **True** 会隐藏内置样式。例如，如果用户创建标题样式（如“标题 1”或“标题 2”）以利用 WPS 的其他内置功能（例如，目录），则用户定义的样式优先，并且在样式名称列表中不会显示以相似方式命名的内置样式。



## 示例


```JavaScript
/*本示例设置活动文档显示用户定义的样式。*/
function test() {
    ActiveDocument.FormattingShowUserStyleName = true
}
```


```JavaScript
/*本示例判断第一个文档是否显示用户定义的样式，并通知用户。*/
function test() {
    if (Documents.Item(1).FormattingShowUserStyleName) {
        alert("显示用户定义的样式")
    } else {
        alert("未显示用户定义的样式")
    }
}
```
