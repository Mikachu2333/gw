# Tables.NestingLevel

返回指定表格的嵌套层。只读 **Long** 类型。



## 语法

express.**NestingLevel**

express   一个代表 **Tables** 对象的变量。

## 类型

number（int4 精度）

## 说明


最外围表格的嵌套层为 1。每一个相连嵌套表格的嵌套层比其前面表格的嵌套层高 1。



## 示例


```JavaScript
/*本示例显示活动文档中表格的嵌套层。*/
function test() {
    alert(Application.ActiveDocument.Tables.NestingLevel)
}
```


```JavaScript
/*本示例将第一个文档上新建段落的文本设置为表格的嵌套层。*/
function test() {
    let range = Application.Documents.Item(1).Paragraphs.Add().Range
    range.Text = Documents.Item(1).Tables.NestingLevel
}
```
