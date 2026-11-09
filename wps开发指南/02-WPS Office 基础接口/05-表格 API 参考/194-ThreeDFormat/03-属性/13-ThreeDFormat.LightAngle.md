# ThreeDFormat.LightAngle

返回或设置对 **ThreeDFormat** 对象设置的延伸灯光的角度。可读/写 **Single** 类型。



## 语法

express.**LightAngle**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*此示例将第一张工作表的第一个形状延伸灯光的角度设置为20度。*/
function test() {
    let shape = Worksheets.Item(1).Shapes.Item(1)
    shape.ThreeD.LightAngle = 20
}
```


```JavaScript
/*本示例显示活动工作表中第二个形状延伸灯光的角度。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    alert(shape.ThreeD.LightAngle)
}
```
