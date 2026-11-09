# ColorStops.Clear

清除指定对象。



## 语法

express.**Clear()**

express   一个代表 **ColorStops** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例清除选定区域当前 ColorStops。*/
function test() {
    Range("A1:A10").Select()
    let interior = Selection.Interior
    interior.Pattern = xlPatternLinearGradient
    interior.Gradient.Degree = 90
    interior.Gradient.ColorStops.Clear()
}
```


```JavaScript
/*本示例清除活动单元格当前 ColorStops。*/
function test() {
    ActiveCell.Interior.Gradient.ColorStops.Clear()
}
```
