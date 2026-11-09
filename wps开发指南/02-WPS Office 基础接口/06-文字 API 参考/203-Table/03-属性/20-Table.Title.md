# Table.Title

返回或设置包含指定表格的标题的 **String** 类型值。可读/写。



## 语法

express.**Title**

express   一个代表 **Table** 对象的变量。

## 类型

string

## 说明


使用 **Title** 属性可为表格提供可选文字标题。该属性将标题文本添加到 **“表格属性”** 对话框的 **“可选文字”** 选项卡上的 **“标题”** 文本框中。

Web 浏览器在加载表格的过程中或表格丢失时显示可选文字。Web 搜索引擎利用可选文字帮助查找网页。可选文字也可用来帮助残障人士。



## 示例


```JavaScript
/*本示例向活动文档中的第一个表格中添加可选文字表格标题。*/
function test() {
    ActiveDocument.Tables.Item(1).Title = "Table 1."
}
```


```JavaScript
/*本示例显示第一个文档中第一个表格的可选文字表格标题。*/
function test() {
    alert(Documents.Item(1).Tables.Item(1).Title)
}
```
