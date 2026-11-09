# ThreeDFormat.PresetMaterial

返回或设置延伸的表面材料。 **MsoPresetMaterial** 类型，可读写。



## 语法

express.**PresetMaterial**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoPresetMaterial

## 示例


```JavaScript
/*本示例设置活动文档中第一个形状的延伸表面为线框。*/
function test() {
    let threeDFormat = ActiveDocument.Shapes.Item(1).ThreeD
    threeDFormat.Visible = msoTrue
    threeDFormat.PresetMaterial = msoMaterialWireFrame
}
```


```JavaScript
/*本示例显示所选形状的延伸表面的材料是否为msoMaterialSoftEdge。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    alert(threeDFormat.PresetMaterial == msoMaterialSoftEdge)
}
```
