# ColorStop.Color

返回或设置指定对象的颜色。可读/写。



## 语法

express.**Color**

express   一个代表 **ColorStop** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例显示活动单元格的第二个ColorStop对象颜色是否为蓝色。*/
function test() {
    let colorStop = ActiveCell.Interior.Gradient.ColorStops.Item(2)
    alert(colorStop.Color == RGB(0, 0, 255))
}
```


```JavaScript
/*本示例将当前选定区域的第一个ColorStop对象的颜色设置为红色。*/
function test() {
    Range("A1:A10").Select()
    let colorStop = Selection.Interior.Gradient.ColorStops.Item(1)
    colorStop.Color = RGB(255, 0, 0)
}
```
