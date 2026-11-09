# FillFormat.Solid

将指定填充设置为统一的颜色。



## 语法

express.**Solid()**

express   一个代表 **FillFormat** 对象的变量。

## 返回值

void

## 说明


使用该方法将渐变、纹理、图案或背景填充转换为纯色填充。



## 示例


```JavaScript
/*本示例将活动文档上所有形状的填充格式设置为纯色填充，并设置所有形状的前景填充色。*/
function test() {
    let shapes = ActiveDocument.Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        let fillFormat = shapes.Item(i).Fill
        fillFormat.Solid()
        fillFormat.ForeColor.RGB = RGB(255, 0, 0)
    }
}
```


```JavaScript
/*本示例为第一个文档上第一个内嵌形状设置纯色填充。*/
function test() {
    let fillFormat = Documents.Item(1).InlineShapes.Item(1).Fill
    fillFormat.Solid()
}
```
