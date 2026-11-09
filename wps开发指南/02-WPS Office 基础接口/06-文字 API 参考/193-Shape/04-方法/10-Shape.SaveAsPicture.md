# Shape.SaveAsPicture

将单个形状另存为图片文件。



## 语法

express.**SaveAsPicture(FileName)**

express   一个代表 **Shape** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | any | 要创建的新图片文件的路径和文件名。保存图片的图形格式由指定的文件扩展名（如 .jpg 或 .gif）决定。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将活动文档上第一个形状另存为图片文件。*/
function test() {
    ActiveDocument.Shapes.Item(1).SaveAsPicture("D:\\示例\\filename.jpg")
}
```


```JavaScript
/*本示例判断如果所选的第一个形状的名称为“Rectangle 1”，则将该形状另存为图片文件。*/
function test() {
    let shape = Selection.ShapeRange.Item(1)
    if (shape.Name == "Rectangle 1") {
        shape.SaveAsPicture("D:\\示例\\example.png")
    }
}
```
