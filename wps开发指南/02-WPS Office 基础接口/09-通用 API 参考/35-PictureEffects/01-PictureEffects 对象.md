# PictureEffects 对象

代表 **[PictureEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/PictureEffect/obj)** 对象的集合。

## 说明


图片效果将作为链进行处理，该链由按顺序应用的单个项目组成，以创建最终的合成图像。效果链将允许将效果添加到链中、重新排序或从链中删除。


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

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/PictureEffects/member/Delete) | 从集合中删除 **[PictureEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/PictureEffect/obj)** 对象。 |
| [Insert](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/PictureEffects/member/Insert) | 将图片效果插入到复合效果链中。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/PictureEffects/member/Item) | 检索位于指定索引处的 **[PictureEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/PictureEffect/obj)** 对象。只读。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/PictureEffects/member/Application) | 获取一个 **Application** 对象，该对象代表 **PictureEffects** 对象的容器应用程序。只读 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/PictureEffects/member/Count) | 检索包含在 **[PictureEffects](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/PictureEffects/obj)** 集合中的 **PictureEffect** 对象数的计数。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/PictureEffects/member/Creator) | 获取一个 32 位整数，该整数指示在其中创建了 **PictureEffects** 对象的应用程序。只读 |