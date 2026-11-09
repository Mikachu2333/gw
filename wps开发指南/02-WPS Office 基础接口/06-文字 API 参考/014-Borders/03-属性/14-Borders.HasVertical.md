# Borders.HasVertical

如果可将垂直边框应用于指定对象，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**HasVertical**

express   一个代表 **Borders** 对象的变量。

## 类型

boolean

## 说明


垂直边框可以应用于包含两列或多列单元格的表格区域。



## 示例


```JavaScript
/*本示例判断如果选定内容支持垂直方向的边框，则为其设置单线型垂直边框。*/
function test() {
    if (Selection.Borders.HasVertical) {
        Selection.Borders.Item(wdBorderVertical).LineStyle = wdLineStyleSingle
    }
}
```


```JavaScript
/*本示例显示活动文档第一节是否支持垂直方向的边框。*/
function test() {
    alert(ActiveDocument.Sections.Item(1).Borders.HasVertical)
}
```
