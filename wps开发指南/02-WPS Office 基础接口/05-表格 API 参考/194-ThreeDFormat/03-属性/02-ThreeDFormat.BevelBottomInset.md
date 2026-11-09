# ThreeDFormat.BevelBottomInset

返回或设置一个值，该值指示是否应为 **ThreeDFormat** 对象抬高底部插入棱台，可读/写 **Single** 类型。



## 语法

express.**BevelBottomInset**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*此示例修改第一张工作表的第一个形状ThreeDFormat的BevelBottomInset属性。*/
function test() {
    let worksheet = Worksheets.Item(1)
    let shape = worksheet.Shapes.Item(1)
    shape.ThreeD.BevelBottomInset = 20
}
```


```JavaScript
/*本示例显示活动工作表中第三个形状ThreeDFormat的BevelBottomInset属性值。*/
function test() {
    let shapes = ActiveSheet.Shapes
    let shape = shapes.Item(3)
    alert(shape.ThreeD.BevelBottomInset)
}
```
