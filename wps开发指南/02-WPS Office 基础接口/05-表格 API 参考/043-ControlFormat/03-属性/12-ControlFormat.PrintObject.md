# ControlFormat.PrintObject

如果打印文档时也打印指定对象，则为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**PrintObject**

express   一个代表 **ControlFormat** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将第一张工作表的第一个形状设置为打印文档时不打印该对象。*/
function test() {
    let shape = Worksheets.Item(1).Shapes.Item(1)
    shape.ControlFormat.PrintObject = false
}
```


```JavaScript
/*本示例显示活动工作表的第二个形状（列表框）打印文档时是否打印该对象。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    alert(shape.ControlFormat.PrintObject)
}
```
