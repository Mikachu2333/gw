# ThreeDFormat.BevelTopDepth

返回或设置对 **ThreeDFormat** 对象使用棱台效果时的台顶深度。可读/写 **Single** 类型。



## 语法

express.**BevelTopDepth**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*此示例对第一张工作表的第一个形状使用棱台效果时的台顶深度设置为20磅。*/
function test() {
    let shape = Worksheets.Item(1).Shapes.Item(1)
    shape.ThreeD.Visible = msoTrue
    shape.ThreeD.BevelTopDepth = 20
}
```


```JavaScript
/*本示例显示活动工作表中第二个形状使用棱台效果时的台顶深度。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    alert(shape.ThreeD.BevelTopDepth)
}
```
