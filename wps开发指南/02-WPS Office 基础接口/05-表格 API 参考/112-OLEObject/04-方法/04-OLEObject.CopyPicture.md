# OLEObject.CopyPicture

将所选对象作为图片复制到剪贴板。



## 语法

express.**CopyPicture(Appearance, Format)**

express   一个代表 **OLEObject** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Appearance | 可选 | XlPictureAppearance | 指定图片的复制方式。默认值为 xlScreen。 |
| Format | 可选 | XlCopyPictureFormat | 图片的格式。默认值为 xlPicture。 |

## 返回值

Variant

## 示例


```JavaScript
/*此示例将第一张工作表中的第一个 OLE 对象作为图片复制到剪贴板。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects(1).CopyPicture()
}
```


```JavaScript
/*此示例将活动工作表中的第二个 OLE 对象作为位图格式的图片复制到剪贴板。*/
function test() {
    ActiveSheet.OLEObjects(2).CopyPicture(xlScreen, xlBitmap)
}
```
