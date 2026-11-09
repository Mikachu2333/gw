# InlineShapes.AddPicture

在文档中添加一幅图片。返回一个代表该图片的 **[InlineShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/obj)** 对象。



## 语法

express.**AddPicture(FileName, LinkToFile, SaveWithDocument, Range)**

express   一个代表 **InlineShapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 图片的路径和文件名。 |
| LinkToFile | 可选 | any | 如果为 **True** ，则将图片链接到创建它的文件；如果为 **False** ，则使图片成为该文件的独立副本。默认值为 **False** 。 |
| SaveWithDocument | 可选 | any | 如果为 **True** ，则将链接的图片与文档一起保存。默认值为 **False** 。 |
| Range | 可选 | any | 图片置于文本中的位置。如果该区域未折叠，那么图片将覆盖此区域，否则插入图片。如果省略此参数，则自动放置图片。 |

## 返回值

InlineShape

## 示例


```JavaScript
/*本示例向活动文档添加一幅图片。*/
function test() {
    ActiveDocument.InlineShapes.AddPicture("D:\\示例\\img1.png")
}
```


```JavaScript
/*本示例向第一个文档上所选区域添加一幅图片。*/
function test() {
    Documents.Item(1).InlineShapes.AddPicture("D:\\示例\\img1.png", true, false, Selection.Range)
}
```
