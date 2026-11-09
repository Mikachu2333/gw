# FillFormat.PresetGradientType

返回指定填充的预设渐变类型。只读 **MsoPresetGradientType** 类型。



## 语法

express.**PresetGradientType**

express   一个代表 **FillFormat** 对象的变量。

## 类型

MsoPresetGradientType

## 说明


使用 **[PresetGradient](#TODO)** 方法可设置填充的预设渐变类型。

 **PresetGradientType** 属性的值可以是下列 **MsoPresetGradientType** 常量之一：

| 常量 |
| ------------------------------------------------------- |
| **msoGradientBrass**                                        |
| **msoGradientCalmWater**                                    |
| **msoGradientChrome**                                       |
| **msoGradientChromeII**                                     |
| **msoGradientDaybreak**                                     |
| **msoGradientDesert**                                       |
| **msoGradientEarlySunset**                                  |
| **msoGradientFire**                                         |
| **msoGradientFog**                                          |
| **msoGradientGold**                                         |
| **msoGradientGoldII**                                       |
| **msoGradientHorizon**                                      |
| **msoGradientLateSunset**                                   |
| **msoGradientMahogany**                                     |
| **msoGradientMoss**                                         |
| **msoGradientNightfall**                                    |
| **msoGradientOcean**                                        |
| **msoGradientParchment**                                    |
| **msoGradientPeacock**                                      |
| **msoGradientRainbow**                                      |
| **msoGradientRainbowII**                                    |
| **msoGradientSapphire**                                     |
| **msoGradientSilver**                                       |
| **msoGradientWheat**                                        |
| **msoPresetGradientMixed**                                  |



## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的第一个形状填充的预设渐变类型是否为msoGradientMoss。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    alert(shape.Fill.PresetGradientType == msoGradientMoss)
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状填充的预设渐变类型是否为msoPresetGradientMixed。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.Fill.PresetGradientType == msoPresetGradientMixed)
}
```
