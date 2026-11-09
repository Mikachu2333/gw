# FillFormat.Type

返回一个 **MsoFillType** 常量，该常量代表填充的类型。只读。



## 语法

express.**Type**

express   一个代表 **FillFormat** 对象的变量。

## 类型

MsoFillType

## 说明


 **Type** 属性的值可以是下列 **MsoFillType** 常量之一：

| 常量 |
| ---------------------------------- |
| **msoFillBackground**                  |
| **msoFillGradient**                    |
| **msoFillMixed**                       |
| **msoFillPatterned**                   |
| **msoFillPicture**                     |
| **msoFillSolid**                       |
| **msoFillTextured**                    |



## 示例


```JavaScript
/*本示例遍历活动演示文稿上第一张幻灯片中所有形状，如果形状使用的填充类型为实心填充，则将其填充的预设纹理设置为纸莎草纹理。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        if (shapes.Item(i).Fill.Type == msoFillSolid) {
            shapes.Item(i).Fill.PresetTextured(msoTexturePapyrus)
        }
    }
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状填充的类型是否为msoFillGradient。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.Fill.Type == msoFillGradient)
}
```
