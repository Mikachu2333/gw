# LineNumbering.RestartMode

返回或设置行号的编排方式，即是从新页或节的开头开始编号、还是连续编号。 **WdNumberingRule** 类型，可读写。



## 语法

express.**RestartMode**

express   一个代表 **LineNumbering** 对象的变量。

## 类型

WdNumberingRule

## 说明


只有在页面视图中才能看到行号。



## 示例


```JavaScript
/*本示例启用活动文档的行号，然后将起始编号设置为1，每10行编号一次，并且编号在每个部分的开头重新开始。*/
function test() {
    let lineNumbering = ActiveDocument.PageSetup.LineNumbering
    lineNumbering.Active = true
    lineNumbering.StartingNumber = 1
    lineNumbering.CountBy = 10
    lineNumbering.RestartMode = wdRestartSection
}
```


```JavaScript
/*本示例显示所选内容中第一节的行号的编排方式是否为wdRestartContinuous。*/
function test() {
    let lineNumbering = Selection.Sections.Item(1).PageSetup.LineNumbering
    alert(lineNumbering.RestartMode == wdRestartContinuous)
}
```
