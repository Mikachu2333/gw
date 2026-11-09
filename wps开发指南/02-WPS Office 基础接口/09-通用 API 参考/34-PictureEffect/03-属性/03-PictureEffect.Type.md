# PictureEffect.Type

指定图片效果的类型。只读。



## 语法

express.**Type**

express   一个代表 **PictureEffect** 对象的变量。

## 类型

MsoPictureEffectType

## 说明


此属性使用 **[MsoPictureEffectType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoPictureEffectType)** 枚举。



## 示例


```JavaScript
/*本示例运行于表格组件，显示活动工作表的第一个（图片）形状的第一个图片效果的类型是否为msoEffectBrightnessContrast。*/
function test() {
    let pictureEffects = ActiveSheet.Shapes.Item(1).Fill.PictureEffects
    alert(pictureEffects.Item(1).Type == msoEffectBrightnessContrast)
}
```


```JavaScript
/*本示例运行于表格组件，遍历第一张工作表的第一个（图片）形状的所有图片效果，删除该形状上类型为msoEffectColorTemperature的图片效果。*/
function test() {
    let pictureEffects = Worksheets.Item(1).Shapes.Item(1).Fill.PictureEffects
    for (let i = pictureEffects.Count; i >= 1; i--) {
        if (pictureEffects.Item(i).Type == msoEffectColorTemperature) {
            pictureEffects.Item(i).Delete()
        }
    }
}
```
