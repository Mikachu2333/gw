# Shape.Visible

返回或设置一个 **MsoTriState** 值，它确定对象是否可见。可读写。



## 语法

express.**Visible**

express   一个代表 **Shape** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例将第一张工作表中的第二个形状设置为不可见。*/
function test() {
    let shape = Worksheets.Item(1).Shapes.Item(2)
    shape.Visible = msoFalse
}
```


```JavaScript
/*本示例将活动工作表上所有形状设置为可见。*/
function test() {
    let shapes = ActiveSheet.Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        shapes.Item(i).Visible = msoTrue
    }
}
```
