# ControlFormat.LockedText

当工作簿受保护时，指定对象中的文字是否被锁定以免发生更改，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**LockedText**

express   一个代表 **ControlFormat** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将第一张工作表的第一个形状（组合框）的文字锁定。*/
function test() {
    let shape = Worksheets.Item(1).Shapes.Item(1)
    shape.ControlFormat.LockedText = true
}
```


```JavaScript
/*本示例显示活动工作表的第二个形状（列表框）的文字是否被锁定。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    alert(shape.ControlFormat.LockedText)
}
```
