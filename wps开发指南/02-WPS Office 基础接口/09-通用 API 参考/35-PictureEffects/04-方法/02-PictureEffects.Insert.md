# PictureEffects.Insert

将图片效果插入到复合效果链中。



## 语法

express.**Insert(EffectType, Position)**

express   一个代表 **PictureEffects** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| EffectType | 必选 | MsoPictureEffectType | 一个指定图片效果类型的枚举。 |
| Position | 可选 | number（int 精度） | 效果在图片效果的复合链中的位置。 |

## 返回值

PictureEffect

## 说明


图片效果被处理为由各个项构成的链，以便创建一个最终复合图像，链中的项是按照顺序应用的。效果链将允许向链中添加效果、对效果重新排序或从链中删除效果。



## 示例


```JavaScript
/*本示例运行于表格组件，为活动工作表上第一个（图片）形状添加图片效果，然后删除该工作表上所有图片效果。*/
function test() {
    // Setup a sheet with one picture shape.
    let pictureEffects = ActiveSheet.Shapes.Item(1).Fill.PictureEffects
    // Insert Saturation effect.
    pictureEffects.Insert(msoEffectSaturation)
    // Insert Brightness and Contrast Effect.
    pictureEffects.Insert(msoEffectBrightnessContrast)
    // Remove all Picture effects.
    while (pictureEffects.Count > 0) {
        pictureEffects.Delete(1)
    }
}
```


```JavaScript
/*本示例运行于表格组件，为第一张工作表的第一个（图片）形状插入一个图片效果，并显示该形状的图片效果的数量。*/
function test() {
    let pictureEffects = Worksheets.Item(1).Shapes.Item(1).Fill.PictureEffects
    pictureEffects.Insert(msoEffectBlur, 1)
    alert(pictureEffects.Count)
}
```
