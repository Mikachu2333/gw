# Shape.CopyPicture

将所选对象作为图片复制到剪贴板。



## 语法

express.**CopyPicture(Appearance, Format)**

express   一个代表 **Shape** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Appearance | 可选 | any | 用于指定图片复制方式的 [XlPictureAppearance](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPictureAppearance) 常量。默认值为 **xlScreen** 。 |
| Format | 可选 | any | 用于指定图片格式的 [XlCopyPictureFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlCopyPictureFormat) 常量。默认值为 **xlPicture** 。 |

## 返回值

void

## 说明


如果复制区域，它必须由相邻单元格构成。



## 示例


```JavaScript
/*本示例将第一张工作表中的第一个形状作为图片复制到剪贴板。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    shapes.Item(1).CopyPicture(xlScreen, xlBitmap)
}
```


```JavaScript
/*本示例判断如果活动工作表中第二个形状为椭圆，则作为图片复制到剪贴板。*/
function test() {
    let shapes = ActiveSheet.Shapes
    if (shapes.Item(2).AutoShapeType == msoShapeOval) {
        shapes.Item(2).CopyPicture()
    }
}
```
