# PictureEffect 对象

代表图片效果。

## 说明


图片效果作为一个链进行处理，该链由按顺序应用的单个项组成，以创建最终的复合图像。 效果链将允许将效果添加到链、重新排序或从链中删除。


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
        pictureEffects.Item(1).Delete()
    }
}
```


```JavaScript
/*本示例运行于表格组件，遍历第一张工作表的第一个（图片）形状的所有图片效果，判断如果该形状中包含饱和度效果，则通知用户。*/
function test() {
    let pictureEffects = Worksheets.Item(1).Shapes.Item(1).Fill.PictureEffects
    for (let i = pictureEffects.Count; i >= 1; i--) {
        if (pictureEffects.Item(i).Type == msoEffectSaturation) {
            alert("包含饱和度效果")
        }
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/PictureEffect/member/Delete) | 删除图片效果。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/PictureEffect/member/Application) | 获取一个 **Application** 对象，该对象代表 **PictureEffect** 对象的容器应用程序。只读 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/PictureEffect/member/Creator) | 获取一个 32 位整数，该整数指示在其中创建了 **PictureEffect** 对象的应用程序。只读 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/PictureEffect/member/Type) | 指定图片效果的类型。只读。 |