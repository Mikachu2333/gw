# Document.FormattingShowNextLevel

返回或设置 **Boolean** 值，该值表示 WPS 在使用上一个标题级别时是否显示下一个标题级别。可读/写。



## 语法

express.**FormattingShowNextLevel**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置活动文档使用上一个标题级别时显示下一个标题级别。*/
function test() {
    ActiveDocument.FormattingShowNextLevel = true
}
```


```JavaScript
/*本示例判断第一个文档使用上一个标题级别时是否显示下一个标题级别，并通知用户。*/
function test() {
    if (Documents.Item(1).FormattingShowNextLevel) {
        alert("使用上一个标题级别时显示下一个标题级别")
    } else {
        alert("使用上一个标题级别时未显示下一个标题级别")
    }
}
```
