# InlineShapes.AddHorizontalLine

向当前文档添加一条基于图像文件的横线。



## 语法

express.**AddHorizontalLine(FileName, Range)**

express   一个代表 **InlineShapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 要用于横线的图像的文件名。 |
| Range | 可选 | any | WPS 在其上方放置横线的区域。如果省略该参数，则 WPS 会将横线放置在当前选定内容的上方。 |

## 返回值

InlineShape

## 说明


要添加不基于现有图像文件的横线，可用 **AddHorizontalLineStandard** 方法。



## 示例


```JavaScript
/*本示例将一条基于图像文件“img2.png”的横线添加到活动文档中当前选定内容的上方。*/
function test() {
    Selection.InlineShapes.AddHorizontalLine("D:\\示例\\img2.png")
}
```


```JavaScript
/*本示例向活动文档第一个段落的上方添加一条基于图像文件“img2.png”的横线。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(1).Range
    ActiveDocument.InlineShapes.AddHorizontalLine("D:\\示例\\img2.png", range)
}
```
