# ThreeDFormat.Z

返回指定 **ThreeDFormat** 对象的 Z 次序。可读/写 **Single** 类型。



## 语法

express.**Z**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将第一张工作表中的第一个形状ThreeDFormat对象的 Z 次序设置成100。*/
function test() {
    let worksheet = Worksheets.Item(1)
    let threeDFormat = worksheet.Shapes.Item(1).ThreeD
    threeDFormat.Z = 100
}
```


```JavaScript
/*本示例显示活动工作表中第三个形状ThreeDFormat对象的 Z 次序。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(3)
    alert(shape.ThreeD.Z)
}
```
