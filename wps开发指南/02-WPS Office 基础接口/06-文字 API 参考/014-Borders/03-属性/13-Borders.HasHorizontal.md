# Borders.HasHorizontal

如果可将水平方向的边框应用于对象，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**HasHorizontal**

express   一个代表 **Borders** 对象的变量。

## 类型

boolean

## 说明


水平边框可以应用于包含两行或多行单元格的表格区域，或包含两个或多个段落的区域。



## 示例


```JavaScript
/*本示例判断如果选定内容支持水平方向的边框，则为其设置单线型的水平边框。*/
function test() {
    if (Selection.Borders.HasHorizontal) {
        Selection.Borders.Enable = msoTrue
        Selection.Borders.Item(wdBorderHorizontal).LineStyle = wdLineStyleSingle
    }
}
```


```JavaScript
/*本示例显示活动文档第一节是否支持水平方向的边框。*/
function test() {
    alert(ActiveDocument.Sections.Item(1).Borders.HasHorizontal)
}
```
