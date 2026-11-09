# ThreeDFormat.PresetMaterial

返回或设置延伸部分的表面材料。可读/写。



## 语法

express.**PresetMaterial**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoPresetMaterial

## 说明


 **PresetMaterial** 属性的值可以是下列 **MsoPresetMaterial** 常量之一：

| 常量 |
| -------------------------- |
| **msoMaterialMatte**       |
| **msoMaterialMetal**       |
| **msoMaterialPlastic**     |
| **msoMaterialWireFrame**   |
| **msoPresetMaterialMixed** |



## 示例


```JavaScript
/*本示例指定活动演示文稿的第一张幻灯片中第一个形状的延伸表面为线框。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let threeDFormat = slide.Shapes.Item(1).ThreeD
    threeDFormat.Visible = msoTrue
    threeDFormat.PresetMaterial = msoMaterialWireFrame
}
```


```JavaScript
/*本示例显示第一篇演示文稿第一张幻灯片中第一个形状的延伸表面材料是否为msoMaterialFlat。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    alert(shape.ThreeD.PresetMaterial == msoMaterialFlat)
}
```
