# LineFormat.ForeColor

返回或设置一个 **ColorFormat** 对象，它代表指定的前景填充色或纯色。



## 语法

express.**ForeColor**

express   一个代表 **LineFormat** 对象的变量。

## 类型

ColorFormat

## 示例


```JavaScript
/*本示例将活动工作表的第一个形状线条的前景色设置为绿色。*/
function test() {
    let line = ActiveSheet.Shapes.Item(1).Line
    line.ForeColor.RGB = RGB(0, 255, 0)
}
```


```JavaScript
/*本示例显示第一张工作表中第二个形状线条的前景色是否为红色。*/
function test() {
    let line = Worksheets.Item(1).Shapes.Item(2).Line
    alert(line.ForeColor.RGB == RGB(255, 0, 0))
}
```
