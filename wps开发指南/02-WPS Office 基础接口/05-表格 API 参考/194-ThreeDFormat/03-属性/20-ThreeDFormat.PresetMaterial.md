# ThreeDFormat.PresetMaterial

返回或设置延伸部分的表面材料。 **MsoPresetMaterial** ，可读写。



## 语法

express.**PresetMaterial**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoPresetMaterial

## 说明


| **MsoPresetMaterial** 可以是下列 **MsoPresetMaterial** 常量之一。 |
| ------------------------------------------------------- |
| **msoMaterialMatte**                                    |
| **msoMaterialMetal**                                    |
| **msoMaterialPlastic**                                  |
| **msoMaterialWireFrame**                                |
| **msoPresetMaterialMixed**                              |



## 示例


```JavaScript
/*本示例指定第一张工作表中第一个形状的延伸表面为线框。*/
function test() {
    let worksheet = Worksheets.Item(1)
    let threeDFormat = worksheet.Shapes.Item(1).ThreeD
    threeDFormat.Visible = msoTrue
    threeDFormat.PresetMaterial = msoMaterialWireFrame
}
```


```JavaScript
/*本示例显示活动工作表中第二个形状延伸表面是否为金属。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    alert(shape.ThreeD.PresetMaterial == msoMaterialMetal)
}
```
