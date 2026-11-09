# ThreeDFormat.PresetLighting

返回或设置 **ThreeDFormat** 对象的延伸预设照明。可读/写 **[MsoLightRigType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoLightRigType)** 类型。



## 语法

express.**PresetLighting**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

MsoLightRigType

## 说明


| MsoLightRigType 可以是下列 **MsoLightRigType** 常量之一。 |
| ----------------------------------------------- |
| **msoLightRigBalanced**                         |
| **msoLightRigBrightRoom**                       |
| **msoLightRigChilly**                           |
| **msoLightRigContrasting**                      |
| **msoLightRigFlat**                             |
| **msoLightRigFlood**                            |
| **msoLightRigFreezing**                         |
| **msoLightRigGlow**                             |
| **msoLightRigHarsh**                            |
| **msoLightRigLegacyFlat1**                      |
| **msoLightRigLegacyFlat2**                      |
| **msoLightRigLegacyFlat3**                      |
| **msoLightRigLegacyFlat4**                      |
| **msoLightRigLegacyHarsh1**                     |
| **msoLightRigLegacyHarsh2**                     |
| **msoLightRigLegacyHarsh3**                     |
| **msoLightRigLegacyHarsh4**                     |
| **msoLightRigLegacyNormal1**                    |
| **msoLightRigLegacyNormal2**                    |
| **msoLightRigLegacyNormal3**                    |
| **msoLightRigLegacyNormal4**                    |
| **msoLightRigMixed**                            |
| **msoLightRigMorning**                          |
| **msoLightRigSoft**                             |
| **msoLightRigSunrise**                          |
| **msoLightRigSunset**                           |
| **msoLightRigThreePoint**                       |
| **msoLightRigTwoPoint**                         |



## 示例


```JavaScript
/*此示例为第一张工作表的第一个形状延伸预设照明指定 Balanced 效果。*/
function test() {
    let shape = Worksheets.Item(1).Shapes.Item(1)
    shape.ThreeD.PresetLighting = msoLightRigBalanced
}
```


```JavaScript
/*本示例显示活动工作表中第二个形状延伸预设照明效果是否为msoLightRigChilly。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    alert(shape.ThreeD.PresetLighting == msoLightRigChilly)
}
```
