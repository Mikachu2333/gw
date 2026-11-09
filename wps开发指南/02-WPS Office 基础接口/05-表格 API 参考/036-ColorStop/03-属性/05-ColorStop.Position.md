# ColorStop.Position

返回或设置 **ColorStop** 对象的位置。可读/写。



## 语法

express.**Position**

express   一个代表 **ColorStop** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动单元格的第二个ColorStop对象的位置。*/
function test() {
    let colorStop = ActiveCell.Interior.Gradient.ColorStops.Item(2)
    alert(colorStop.Position)
}
```


```JavaScript
/*本示例将当前选定区域的第一个ColorStop对象的位置设置为0.8。*/
function test() {
    Range("A1:A10").Select()
    let colorStop = Selection.Interior.Gradient.ColorStops.Item(1)
    colorStop.Position = 0.8
}
```
