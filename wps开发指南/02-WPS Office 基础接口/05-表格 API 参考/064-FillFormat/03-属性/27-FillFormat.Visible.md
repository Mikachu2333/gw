# FillFormat.Visible

返回或设置一个 **MsoTriState** 值，它确定对象是否可见。可读写。



## 语法

express.**Visible**

express   一个代表 **FillFormat** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例将活动工作表中第二个形状的填充设置为不可见。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.Item(2).Fill
    fillFormat.Visible = msoFalse
}
```


```JavaScript
/*本示例将第一张工作表中第一个形状的填充设置为可见。*/
function test() {
    let fillFormat = Application.Worksheets.Item(1).Shapes.Item(1).Fill
    fillFormat.Visible = msoTrue
}
```
