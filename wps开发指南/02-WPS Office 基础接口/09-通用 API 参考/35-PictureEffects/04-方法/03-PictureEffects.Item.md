# PictureEffects.Item

检索位于指定索引处的 **[PictureEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/PictureEffect/obj)** 对象。只读。



## 语法

express.**Item(Index)**

express   一个代表 **PictureEffects** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 指定一个代表 **PictureEffect** 对象的索引位置的整数。 |

## 返回值

PictureEffect

## 示例


```JavaScript
/*本示例运行于表格组件，显示活动工作表的第一个（图片）形状的第一个图片效果的类型是否为msoEffectBrightnessContrast。*/
function test() {
    let pictureEffects = ActiveSheet.Shapes.Item(1).Fill.PictureEffects
    alert(pictureEffects.Item(1).Type == msoEffectBrightnessContrast)
}
```


```JavaScript
/*本示例运行于表格组件，判断如果活动工作表的第一个（图片）形状的图片效果的数量大于 2，则删除该形状的最后一个图片效果，然后显示该形状的图片效果的数量。*/
function test() {
    let pictureEffects = ActiveSheet.Shapes.Item(1).Fill.PictureEffects
    if (pictureEffects.Count > 2) {
        pictureEffects.Item(pictureEffects.Count).Delete()
    }
    alert(pictureEffects.Count)
}
```
