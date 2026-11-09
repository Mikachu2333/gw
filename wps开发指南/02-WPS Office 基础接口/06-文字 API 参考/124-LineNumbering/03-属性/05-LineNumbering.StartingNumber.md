# LineNumbering.StartingNumber

返回或设置起始行号。 **Long** 类型，可读写。



## 语法

express.**StartingNumber**

express   一个代表 **LineNumbering** 对象的变量。

## 类型

number（int4 精度）

## 说明


只有在页面视图中才能看到行号。



## 示例


```JavaScript
/*本示例启用活动文档的行号，然后将起始编号设置为5，每5行编号一次，并且编号在每个部分的开头重新开始。*/
function test() {
    let lineNumbering = ActiveDocument.PageSetup.LineNumbering
    lineNumbering.Active = true
    lineNumbering.StartingNumber = 5
    lineNumbering.CountBy = 5
    lineNumbering.RestartMode = wdRestartSection
}
```


```JavaScript
/*本示例显示所选内容中第一节的起始行号。*/
function test() {
    let lineNumbering = Selection.Sections.Item(1).PageSetup.LineNumbering
    alert(lineNumbering.StartingNumber)
}
```
