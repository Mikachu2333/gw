# Hyperlink.Shape

返回一个 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象，它代表附加到指定超链接的形状。



## 语法

express.**Shape**

express   一个代表 **Hyperlink** 对象的变量。

## 类型

Shape

## 示例


```JavaScript
/*本示例获取第一个超链接所在的形状并设置填充颜色为红色*/
function test() {
    let shape = Application.Worksheets.Item("Sheet1").Hyperlinks.Item(1).Shape
    shape.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例获取第二个超链接所在的形状并显示其名称*/
function test() {
    let shape = Application.Worksheets.Item("Sheet1").Hyperlinks.Item(2).Shape
    MsgBox(`超链接所在形状的名称是 ${shape.Name}`)
}
```
