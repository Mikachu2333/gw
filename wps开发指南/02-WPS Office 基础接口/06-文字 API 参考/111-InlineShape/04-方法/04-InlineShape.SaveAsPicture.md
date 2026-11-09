# InlineShape.SaveAsPicture

将单个形状另存为图片文件。



## 语法

express.**SaveAsPicture(FileName)**

express   一个代表 **InlineShape** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | any | 要创建的新图片文件的路径和文件名。保存图片的图形格式由指定的文件扩展名（如 .jpg 或 .gif）决定。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将选中的第二个内嵌形状另存为图片文件。*/
function test() {
    let inlineShape = Selection.InlineShapes.Item(2)
    inlineShape.SaveAsPicture("D:\\示例\\example_1.jpg")
}
```


```JavaScript
/*本示例将活动文档中第一个内嵌形状另存为图片文件。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    inlineShape.SaveAsPicture("example_2.png")
}
```
