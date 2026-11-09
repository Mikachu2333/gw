# InlineShape.Title

返回或设置包含指定内嵌形状的标题的 **String** 类型值。可读/写。



## 语法

express.**Title**

express   一个代表 **InlineShape** 对象的变量。

## 类型

string

## 说明


使用 **Title** 属性可为内嵌形状提供可选文字标题。该属性将标题文本添加到 **“设置形状格式”** 对话框的 **“可选文字”** 窗格上的 **“标题”** 文本框中。

Web 浏览器在加载表格的过程中或表格丢失时显示可选文字。Web 搜索引擎利用可选文字帮助查找网页。可选文字也可用来帮助残障人士。



## 示例


```JavaScript
/*本示例向活动文档的第一个内嵌形状中添加可选文字标题。*/
function test() {
    ActiveDocument.InlineShapes.Item(1).Title = "Desktop screenshot."
}
```


```JavaScript
/*本示例显示所选的第二个内嵌形状的标题。*/
function test() {
    let inlineShape = Selection.InlineShapes.Item(2)
    alert(inlineShape.Title)
}
```
