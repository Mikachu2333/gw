# ColorStop.Delete

删除指定对象。



## 语法

express.**Delete()**

express   一个代表 **ColorStop** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将活动单元格的第一个ColorStop对象删除。*/
function test() {
    let colorStop = ActiveCell.Interior.Gradient.ColorStops.Item(1)
    colorStop.Delete()
}
```


```JavaScript
/*本示例将当前选定区域的第二个ColorStop对象删除。*/
function test() {
    Range("A1:A10").Select()
    let colorStop = Selection.Interior.Gradient.ColorStops.Item(2)
    colorStop.Delete()
}
```
