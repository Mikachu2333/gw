# ExtraColors.Item

从指定的 **ExtraColors** 集合中返回单个颜色。



## 语法

express.**Item(Index)**

express   一个代表 **ExtraColors** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 集合中要返回的单个对象的索引号。 |

## 返回值

number（int4 精度）

## 示例


```JavaScript
/*本示例在当前演示文稿的第一张幻灯片中添加一个矩形，并将其前景填充颜色设为第一种其他颜色。演示文稿中必须已定义至少一种其他颜色，否则本示例将失败。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.AddShape(msoShapeRectangle, 50, 50, 100, 200)
    shape.Fill.ForeColor.RGB = ActivePresentation.ExtraColors.Item(1)
}
```


```JavaScript
/*本示例将第一篇演示文稿的第一张幻灯片背景填充的背景颜色设为第一种其他颜色。演示文稿中必须已定义至少一种其他颜色，否则本示例将失败。*/
function test() {
    let colorFormat = Presentations.Item(1).Slides.Item(1).Background.Fill.BackColor
    colorFormat.RGB = Presentations.Item(1).ExtraColors.Item(1)
}
```
