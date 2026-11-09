# Paragraphs.NoLineNumber

如果取消指定段的行号，则该属性值为 **msoTrue** 。该属性值可以是 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。可读写 **Long** 类型。



## 语法

express.**NoLineNumber**

express   一个代表 **Paragraphs** 对象的变量。

## 类型

number（int4 精度）

## 说明


使用 **PageSetup** 对象的 **LineNumbering** 属性可设置行号。



## 示例


```JavaScript
/*本示例为活动文档设置行号。起始编号设置为 1，并且在文档中的所有节都连续编号。然后取消选中区域所有段落的行号。*/
function test() {
    let linenum = ActiveDocument.PageSetup.LineNumbering
    linenum.Active = true
    linenum.StartingNumber = 1
    linenum.CountBy = 1
    linenum.RestartMode = wdRestartContinuous
    Selection.Paragraphs.NoLineNumber = msoTrue
}
```


```JavaScript
/*本示例显示活动文档是否取消所有段落的行号。*/
function test() {
    alert(ActiveDocument.Paragraphs.NoLineNumber == msoTrue)
}
```
