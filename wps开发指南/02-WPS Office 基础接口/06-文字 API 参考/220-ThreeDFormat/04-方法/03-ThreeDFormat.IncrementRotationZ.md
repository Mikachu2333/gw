# ThreeDFormat.IncrementRotationZ

按照指定的增量在 z 轴上旋转形状。



## 语法

express.**IncrementRotationZ(Increment)**

express   一个代表 **ThreeDFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Increment | 必选 | number（float 精度） | 指定增量值。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将活动文档中的第一个形状在 Z 轴上旋转 -15 度。*/
function test() {
    ActiveDocument.Shapes.Item(1).ThreeD.IncrementRotationZ(-15)
}
```


```JavaScript
/*本示例将所选形状在 Z 轴上旋转 45 度。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    threeDFormat.IncrementRotationZ(45)
}
```
