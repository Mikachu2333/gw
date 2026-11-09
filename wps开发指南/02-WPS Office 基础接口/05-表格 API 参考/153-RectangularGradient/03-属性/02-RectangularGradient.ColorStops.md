# RectangularGradient.ColorStops

返回 **RectangularGradient** 对象的 **ColorStops** 集合。只读。



## 语法

express.**ColorStops**

express   一个代表 **RectangularGradient** 对象的变量。

## 类型

ColorStops

## 示例


```JavaScript
/*本示例显示单元格区域 A1:A10 中渐变填充的ColorStop对象的数量。*/
function test() {
    let gradient = Range("A1:A10").Interior.Gradient
    alert(gradient.ColorStops.Count)
}
```


```JavaScript
/*本示例设置活动工作表上单元格区域 A1:A5 中渐变填充第一个ColorStop的颜色。*/
function test() {
    let gradient = ActiveSheet.Range("A1:A5").Interior.Gradient
    gradient.ColorStops.Item(1).Color = RGB(255, 0, 0)
}
```
