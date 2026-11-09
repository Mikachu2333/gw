# ShadowFormat.ForeColor

返回或设置一个 **ColorFormat** 对象，它代表指定的前景填充色或纯色。



## 语法

express.**ForeColor**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

ColorFormat

## 示例


```JavaScript
/*本示例将活动工作表中第三个形状阴影的前景色设置为红色。*/
function test() {
    let shadow = ActiveSheet.Shapes.Item(3).Shadow
    shadow.ForeColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例将第一张工作表中第二个形状阴影的前景色设置为蓝色。*/
function test() {
    let shadow = Application.Worksheets.Item(1).Shapes.Item(2).Shadow
    shadow.ForeColor.RGB = RGB(0, 0, 255)
}
```
