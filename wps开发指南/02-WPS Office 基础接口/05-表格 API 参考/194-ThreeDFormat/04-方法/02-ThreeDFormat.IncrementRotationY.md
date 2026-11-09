# ThreeDFormat.IncrementRotationY

按指定度数更改指定形状绕 Y 轴的旋转角度。可以使用 **[RotationY](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/RotationY)** 属性设置形状绕 Y 轴的绝对旋转角度。



## 语法

express.**IncrementRotationY(Increment)**

express   一个代表 **ThreeDFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Increment | 必选 | number（float 精度） | 指定形状绕 Y 轴旋转角度的改变量（以度为单位）。取值范围在 -90 到 90 之间。正值表示形状向左旋转，负值表示形状向右旋转。 |

## 返回值

void

## 说明


要更改形状绕 X 轴的旋转量，请使用 **[IncrementRotationX](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/IncrementRotationX)** 方法。要更改图形绕 Z 轴的旋转量，请使用 **[IncrementRotationZ](#TODO)** 方法。

不能使指定形状绕 Y 轴的转角超出 **RotationY** 属性值的上下界（90 度到 -90 度）。例如，如果 **RotationY** 属性初始值设置为 80，并将 _Increment_ 参数指定为 40，那么结果转角将为 90 度（即 **RotationY** 属性值的上界），而不是 120 度。



## 示例


```JavaScript
/*本示例将第一张工作表中的第一个形状向右倾斜 10 度。该形状必须是挤制形状才能看到本示例代码的效果。*/
function test() {
    let worksheet = Worksheets.Item(1)
    worksheet.Shapes.Item(1).ThreeD.IncrementRotationY(-10)
}
```


```JavaScript
/*本示例将活动工作表第三个形状向左倾斜 50 度。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(3)
    shape.ThreeD.IncrementRotationY(50)
}
```
