# LinearGradient.ColorStops

返回 **LinearGradient** 对象的 **ColorStops** 。只读。



## 语法

express.**ColorStops**

express   一个代表 **LinearGradient** 对象的变量。

## 类型

ColorStops

## 示例


```JavaScript
/*下例将第一张工作表上区域 B1:B10 线性渐变的第一个颜色停止点的颜色设置为蓝色。*/
function test() {
    let linearGradient = Worksheets.Item(1).Range("B1:B10").Interior.Gradient
    let colorStop1 = linearGradient.ColorStops.Item(1)
    colorStop1.Color = RGB(0, 0, 255)
}
```


```JavaScript
/*下例清除活动工作表上区域 B1:B10 中线性渐变所有已经设置的颜色停止点。*/
function test() {
    let linearGradient = ActiveSheet.Range("B1:B10").Interior.Gradient
    linearGradient.ColorStops.Clear()
}
```
