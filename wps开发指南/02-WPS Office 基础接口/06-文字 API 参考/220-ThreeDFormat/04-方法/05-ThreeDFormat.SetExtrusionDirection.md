# ThreeDFormat.SetExtrusionDirection

设置延伸经过的路径偏离延伸形状的方向。



## 语法

express.**SetExtrusionDirection(PresetExtrusionDirection)**

express   一个代表 **ThreeDFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PresetExtrusionDirection | 必选 | MsoPresetExtrusionDirection | 设置延伸方向。 |

## 返回值

void

## 说明


此方法将 **PresetExtrusionDirection** 属性设置为由 _PresetExtrusionDirection_ 参数指定的方向。



## 示例


```JavaScript
/*本示例将活动文档中第一个形状的延伸方向指定为形状的上方，延伸部分的照明方向设在左侧。*/
function test() {
    let threeDFormat = ActiveDocument.Shapes.Item(1).ThreeD
    threeDFormat.Visible = msoTrue
    threeDFormat.SetExtrusionDirection(msoExtrusionTop)
    threeDFormat.PresetLightingDirection = msoLightingLeft
}
```


```JavaScript
/*本示例将所选形状的延伸方向设置为msoExtrusionBottomLeft，并显示是否设置成功。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    threeDFormat.SetExtrusionDirection(msoExtrusionBottomLeft)
    alert(threeDFormat.PresetExtrusionDirection == msoExtrusionBottomLeft)
}
```
