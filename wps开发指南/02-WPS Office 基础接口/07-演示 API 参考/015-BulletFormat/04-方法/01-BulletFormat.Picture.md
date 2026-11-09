# BulletFormat.Picture

当 **BulletFormat** 对象的 **[Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/BulletFormat/member/Type)** 属性设置为 **ppBulletPicture** 时，此方法可设置用于项目符号列表中的项目符号的图形文件。



## 语法

express.**Picture(Picture)**

express   一个代表 **BulletFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Picture | 必选 | string | 有效图形文件的路径和文件名。 |

## 返回值

void

## 说明


有效的图形文件包括具有如下扩展名的文件：.bmp、.cdr、.cgm、.drw、.dxf、.emf、.eps、.gif、.jpg、.jpeg、.pcd、.pct、.pcx、.pict、.png、.tga、.tiff、.wmf 和 .wpg。



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的第一个（文本框）形状中文本段落的项目符号的类型设置为ppBulletPicture，然后设置用于项目符号列表中的项目符号的图形文件。*/
function test() {
    let textRange = ActivePresentation.Slides.Item(1).Shapes.Item(1).TextFrame.TextRange
    let bulletFormat = textRange.ParagraphFormat.Bullet
    bulletFormat.Type = ppBulletPicture
    bulletFormat.Picture("D:\\TestFile\\img1.bmp")
}
```


```JavaScript
/*本示例将活动窗口所选文本区域中第二段的项目符号的类型设置为ppBulletPicture，然后设置用于项目符号列表中的项目符号的图形文件。*/
function test() {
    let bulletFormat = ActiveWindow.Selection.TextRange.Paragraphs(2, 1).ParagraphFormat.Bullet
    bulletFormat.Type = ppBulletPicture
    bulletFormat.Picture("D:\\TestFile\\img1.png")
}
```
