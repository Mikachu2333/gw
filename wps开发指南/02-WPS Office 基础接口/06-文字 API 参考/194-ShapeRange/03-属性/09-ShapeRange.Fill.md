# ShapeRange.Fill

返回一个 **[FillFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/obj)** 对象，该对象包含指定图形的填充格式属性。只读。



## 语法

express.**Fill**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

FillFormat

## 示例


```JavaScript
/*本示例为活动文档中第一个形状和第二个形状设置填充格式的前景色、背景色和双色渐变。*/
function test() {
    let fill = Application.ActiveDocument.Shapes.Range([1, 2]).Fill
    fill.ForeColor.RGB = RGB(128, 0, 0)
    fill.BackColor.RGB = RGB(170, 170, 170)
    fill.TwoColorGradient(msoGradientHorizontal, 1)
}
```


```JavaScript
/*本示例将活动文档中所有形状的前景色设置为红色。*/
function test() {
    ActiveDocument.Shapes.SelectAll()
    Selection.ShapeRange.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```
