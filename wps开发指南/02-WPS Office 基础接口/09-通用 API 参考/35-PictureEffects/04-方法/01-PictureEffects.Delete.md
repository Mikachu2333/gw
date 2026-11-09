# PictureEffects.Delete

从集合中删除 **[PictureEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/PictureEffect/obj)** 对象。



## 语法

express.**Delete(Index)**

express   一个代表 **PictureEffects** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | number（int 精度） | 要删除的 **PictureEffect** 对象的索引号。 |

## 返回值

void

## 示例


```JavaScript
/*本示例运行于表格组件，删除活动工作表的第一个（图片）形状的最后一个图片效果。*/
function test() {
    let pictureEffects = ActiveSheet.Shapes.Item(1).Fill.PictureEffects
    pictureEffects.Delete(pictureEffects.Count)
}
```


```JavaScript
/*本示例运行于表格组件，判断如果第一张工作表的第一个（图片）形状的图片效果的数量大于 2，则删除该形状的第一个图片效果。*/
function test() {
    let pictureEffects = Worksheets.Item(1).Shapes.Item(1).Fill.PictureEffects
    if (pictureEffects.Count > 2) {
        pictureEffects.Delete(1)
    }
}
```
