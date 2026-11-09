# Shape.ConvertTextToSmartArt

将 **Shape** 对象中的文本转换为 SmartArt 图表。



## 语法

express.**ConvertTextToSmartArt(Layout)**

express   一个代表 **Shape** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Layout | 必选 | SmartArtLayout | 要将文本转换为的 SmartArt 布局。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个形状的文本转换为 SmartArt 图。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    shapes.Item(1).ConvertTextToSmartArt(Application.SmartArtLayouts(3))
}
```


```JavaScript
/*本示例判断如果第一篇演示文稿的第一张幻灯片中第二个形状的名称为“test”，则将其的文本转换为 SmartArt 图。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(2)
    if (shape.Name == "test") {
        shape.ConvertTextToSmartArt(Application.SmartArtLayouts(4))
    }
}
```
