# InlineShapes.AddPictureBullet

向当前文档添加一个基于图像文件的图片项目符号。返回一个 **InlineShape** 对象。



## 语法

express.**AddPictureBullet(FileName, Range)**

express   一个代表 **InlineShapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 要用于图片项目符号的图像的文件名称。 |
| Range | 可选 | any | WPS 向其添加图片项目符号的区域。 WPS 会将图片项目符号添加到该区域的每个段落。如果省略该参数，则 WPS 将图片项目符号添加到当前选定内容的每个段落中。 |

## 返回值

InlineShape

## 示例


```JavaScript
/*本示例使用名为“img1.png”的图像文件向选定内容添加一个图片项目符号。*/
function test() {
    Selection.InlineShapes.AddPictureBullet("D:\\示例\\img1.png")
}
```


```JavaScript
/*本示例向第一个文档上所选区域中添加一个基于图像文件的图片项目符号。*/
function test() {
    Documents.Item(1).InlineShapes.AddPictureBullet("D:\\示例\\img1.png", Selection.Range)
}
```
