# ThreeDFormat.PresetExtrusionDirection

返回形状（指延伸部分的正面）延伸的方向。 **MsoPresetExtrusionDirection** 类型，只读。



## 语法

express.**PresetExtrusionDirection**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoPresetExtrusionDirection

## 说明


该属性为只读。要设置该属性的值，请使用 **SetExtrusionDirection** 方法。



## 示例


```JavaScript
/*本示例将活动文档中正面向左上角延伸的形状更改为正面向右下角延伸。*/
function test() {
    for (let i = 1; i <= ActiveDocument.Shapes.Count; i++) {
        let threeDFormat = ActiveDocument.Shapes.Item(i).ThreeD
        if (threeDFormat.PresetExtrusionDirection == msoExtrusionTopLeft) {
            threeDFormat.SetExtrusionDirection(msoExtrusionBottomRight)
        }
    }
}
```


```JavaScript
/*本示例显示所选形状的延伸方向是否为msoPresetExtrusionDirectionMixed。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    alert(threeDFormat.PresetExtrusionDirection == msoPresetExtrusionDirectionMixed)
}
```
