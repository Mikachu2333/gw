# Table.Descr

返回或设置包含指定表格的说明的 **String** 类型值。可读/写。



## 语法

express.**Descr**

express   一个代表 **Table** 对象的变量。

## 类型

string

## 说明


使用 **Descr** 属性可提供表格的可选文字说明。该属性将文本添加到 **“表格属性”** 对话框的 **“可选文字”** 选项卡上的 **“说明”** 文本框中。

Web 浏览器在加载表格的过程中或表格丢失时显示可选文字。Web 搜索引擎利用可选文字帮助查找网页。可选文字也可用来帮助残障人士。



## 示例


```JavaScript
/*本示例向活动文档的第一个表格中添加可选文字表格说明。*/
function test() {
    let table = ActiveDocument.Tables.Item(1)
    table.Descr = "This is a table description."
}
```


```JavaScript
/*本示例显示选中的第一个表格的可选文字表格说明。*/
function test() {
    alert(Selection.Tables.Item(1).Descr)
}
```
