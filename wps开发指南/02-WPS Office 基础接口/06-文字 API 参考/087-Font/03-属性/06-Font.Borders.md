# Font.Borders

返回一个 **Borders** 集合，该集合代表指定字体的所有边框。



## 语法

express.**Borders**

express   一个代表 **Font** 对象的变量。

## 类型

Borders

## 示例


```JavaScript
/*本示例为所选字体启用边框，并设置外部边框的颜色。*/
function test() {
    let borders = Selection.Font.Borders
    borders.Enable = msoTrue
    borders.OutsideColor = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例为活动文档的主文档文章的字体启用边框，并设置外边框的线条样式和线条宽度。*/
function test() {
    let borders = ActiveDocument.Content.Font.Borders
    borders.Enable = msoTrue
    borders.OutsideLineStyle = wdLineStyleDashDot
    borders.OutsideLineWidth = wdLineWidth150pt
}
```
