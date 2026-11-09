# Range.CopyPicture

将所选对象作为图片复制到剪贴板。 **Variant** 。



## 语法

express.**CopyPicture(Appearance, Format)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Appearance | 可选 | XlPictureAppearance | 指定图片的复制方式。 |
| Format | 可选 | XlCopyPictureFormat | 图片的格式。 |

## 返回值

Variant

## 示例


```JavaScript
/*本示例将 A1:C1 单元格区域的值设置为 2，将 A1:C1 单元格区域复制为图片粘贴到 C3 单元格中，再以位图格式复制，粘贴到 A10 单元格中*/
function test() {
    Range("A1:C1").Value2 = 2
    Range("A1:C1").CopyPicture()
    Range("C3").PasteSpecial()
    Range("A1:C1").CopyPicture(null, xlBitmap)
    Range("A10").PasteSpecial()
}
```


```JavaScript
/*本示例将 A1 单元格按其打印效果、以矢量格式复制为图片，并粘贴至 E5 单元格中*/
function test() {
    Range("A1").CopyPicture(xlPrinter, xlPicture)
    Range("E5").PasteSpecial()
}
```
