# LineNumbering.Active

如果指定文档、一节或多节的行号处于活动状态，则该属性值为 **True** 。 **Long** 类型，可读写。



## 语法

express.**Active**

express   一个代表 **LineNumbering** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例激活所选内容中第一节的行号。*/
function test() {
    let lineNumbering = Selection.Sections.Item(1).PageSetup.LineNumbering
    lineNumbering.Active = true
    lineNumbering.CountBy = 5
    lineNumbering.StartingNumber = 1
}
```


```JavaScript
/*本示例关闭活动文档上的行号。*/
function test() {
    let lineNumbering = ActiveDocument.PageSetup.LineNumbering
    lineNumbering.Active = false
}
```
