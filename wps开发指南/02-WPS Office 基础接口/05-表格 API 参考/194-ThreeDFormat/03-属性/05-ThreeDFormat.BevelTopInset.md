# ThreeDFormat.BevelTopInset

返回或设置一个值，该值指示是否应为 **ThreeDFormat** 对象抬高顶部插入棱台，用于 **ThreeDFormat** 对象，可读/写 **Single** 类型。



## 语法

express.**BevelTopInset**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*此示例设置第一张工作表的第一个形状ThreeDFormat的BevelTopInset属性。*/
function test() {
    let shape = Worksheets.Item(1).Shapes.Item(1)
    shape.ThreeD.BevelTopInset = 20
}
```


```JavaScript
/*本示例显示活动工作表中第三个形状ThreeDFormat的BevelTopInset属性值。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(3)
    alert(shape.ThreeD.BevelTopInset)
}
```
