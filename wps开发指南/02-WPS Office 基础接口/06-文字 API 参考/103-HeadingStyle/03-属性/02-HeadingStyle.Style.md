# HeadingStyle.Style

返回或设置标题的样式。可读写 **Variant** 类型。



## 语法

express.**Style**

express   一个代表 **HeadingStyle** 对象的变量。

## 类型

any

## 说明


要设置该属性，请指定样式的本地名称、一个整数、一个 **WdBuiltinStyle** 常量或一个代表样式的对象。



## 示例


```JavaScript
/*本示例在活动文档开头添加一个根据标题（Title）样式建立的图表目录，然后显示该图表目录第一个样式的名称。*/
function test() {
    let tableOfFigures = ActiveDocument.TablesOfFigures.Add(ActiveDocument.Range(0, 0), "example", null, null, null, null, null, null, null, null, "Title")
    alert(tableOfFigures.HeadingStyles.Item(1).Style)
}
```


```JavaScript
/*本示例设置活动文档上第一个图表目录的第一个标题样式。*/
function test() {
    let tableOfFigures = ActiveDocument.TablesOfFigures.Item(1)
    tableOfFigures.HeadingStyles.Item(1).Style = "正文"
}
```
