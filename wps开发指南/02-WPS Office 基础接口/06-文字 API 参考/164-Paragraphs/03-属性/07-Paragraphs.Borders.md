# Paragraphs.Borders

返回一个 **Borders** 集合，该集合代表指定对象的所有边框。



## 语法

express.**Borders**

express   一个代表 **Paragraphs** 对象的变量。

## 类型

Borders

## 示例


```JavaScript
/*本示例为活动文档所有段落添加双线下边框。*/
function test() {
    let borders = Application.ActiveDocument.Paragraphs.Borders.Item(wdBorderBottom)
    borders.LineStyle = wdLineStyleDouble
    borders.LineWidth = wdLineWidth025pt
}
```


```JavaScript
/*本示例设置所选段落显示边框。*/
function test() {
    Selection.Paragraphs.Borders.Enable = true
}
```
