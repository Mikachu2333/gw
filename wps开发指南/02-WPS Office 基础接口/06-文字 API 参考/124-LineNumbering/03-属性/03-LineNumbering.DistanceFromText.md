# LineNumbering.DistanceFromText

返回或设置行号右边和文档正文左边界之间的距离（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**DistanceFromText**

express   一个代表 **LineNumbering** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例开启活动文档的行号，并设置行号右边与正文左边界的距离为36磅。*/
function test() {
    let lineNumbering = ActiveDocument.PageSetup.LineNumbering
    lineNumbering.Active = true
    lineNumbering.CountBy = 5
    lineNumbering.DistanceFromText = 36
}
```


```JavaScript
/*本示例显示所选内容中第一节的行号右边与正文左边界的距离。*/
function test() {
    let lineNumbering = Selection.Sections.Item(1).PageSetup.LineNumbering
    alert(lineNumbering.DistanceFromText)
}
```
