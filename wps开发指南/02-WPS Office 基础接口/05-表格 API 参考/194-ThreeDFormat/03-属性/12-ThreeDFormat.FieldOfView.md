# ThreeDFormat.FieldOfView

返回或设置可以查看 **ThreeDFormat** 对象的角度。可读/写 **Single** 类型。



## 语法

express.**FieldOfView**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*此示例设置第一张工作表的第一个形状ThreeDFormat对象的角度。*/
function test() {
    let shape = Worksheets.Item(1).Shapes.Item(1)
    shape.ThreeD.FieldOfView = 20
}
```


```JavaScript
/*本示例显示活动工作表中第三个形状ThreeDFormat对象的角度。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(3)
    alert(shape.ThreeD.FieldOfView)
}
```
